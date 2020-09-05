import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>HEY WE ARE ROCKING</div>;
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
    console.log(this.state);
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
