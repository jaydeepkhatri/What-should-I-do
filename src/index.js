import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataFetch from './DataFetch';
import * as serviceWorker from './serviceWorker';

class BoredApp extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="title">What should I do?</h2>
        <DataFetch />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BoredApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();