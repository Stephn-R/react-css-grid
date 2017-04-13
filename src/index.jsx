import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const props = {
  title: 'Hello World!!!',
};

const rootEl = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    rootEl,
  );
};

render(App);

// HOT RELOADER
if (module.hot) module.hot.accept('./', () => render(App));
