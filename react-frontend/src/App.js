import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="App-header">
          <div>
            <h2>Welcome to React</h2>
          </div>
          <a href='/add-item'>Go to Add-Item Page !</a>
          <div>
            {this.props.children}
          </div>

        </div>
    );
  }
}

export default App;
