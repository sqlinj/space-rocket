import React from 'react';
import ReactDOM from 'react-dom';
import {
  subscribeToTimer,
  encodeData
} from './api/api';

class SpaceRocket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: null,
      result: '',
      value: '',
      error: ''
    };

    subscribeToTimer((err, timestamp) => this.setTimestamp(timestamp));
  }

  setTimestamp = (timestamp) => {
    this.setState({ timestamp });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.setState({ error: '' });
      encodeData(this.state.value, (err, result) => this.setState({ result }));
    } else {
      this.setState({ error: 'Write something into the input!'});
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }
  
  render() {
    const {
      result, timestamp, value, error
    } = this.state;
    return (
      <div>
        <h1>Socket example</h1>
        <h3>Check the current date from the server.</h3>
        <p>
          This is the timer value: {timestamp}
        </p>
        <h3>Or encode a string to base64</h3>
        { error && <h5>{error}</h5> }
        <form onSubmit={this.onSubmit}>
          <input value={value} onChange={this.onChange} />
          <button type="submit">Encode</button>
        </form>
        {
          result && (
            <p>Az eredmény: {result}</p>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<SpaceRocket />, document.getElementById('root'));
