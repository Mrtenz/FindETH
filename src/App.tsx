import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { light } from '@mycrypto/ui';
import { BaseCSS } from 'styled-bootstrap-grid';
import Main from './components/Main';
import Header from './components/ui/Header';
import Routes from './components/Routes';
import Footer from './components/ui/Footer';
import { Provider } from 'react-redux';
import { createStore } from './store';
import GlobalModal from './components/GlobalModal';
import { HashRouter } from 'react-router-dom';
import Analytics from './components/Analytics';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  body, #root {
    min-height: 100vh;
  }
  
  body {
    background: ${({ theme }) => (theme as any).background};
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }
`;

const store = createStore();

const App: FunctionComponent = () => (
  <ThemeProvider theme={light}>
    <Provider store={store}>
      <HashRouter>
        <Analytics>
          <GlobalModal />
          <GlobalStyle />
          <BaseCSS />

          <Main>
            <Header />
            <Routes />
          </Main>
          <Footer />
        </Analytics>
      </HashRouter>
    </Provider>
  </ThemeProvider>
);

export default hot(App);
