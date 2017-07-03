import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from './reducers/';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';

import 'whatwg-fetch';
import 'normalize.css';
import './index.css';

const store = createStore();
const containerNode = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  containerNode
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router>
            <NextApp />
          </Router>
        </Provider>
      </AppContainer>,
      containerNode
    );
  });
}

registerServiceWorker();
