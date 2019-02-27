import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

const subscribeToTimer = (cb) => {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
};

const encodeData = (data, cb) => {
  socket.on('encoder', resData => cb(null, resData));
  socket.emit('encodeData', data);
}

export {
  subscribeToTimer,
  encodeData
}