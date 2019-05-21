import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { light } from '@mycrypto/ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseCSS } from 'styled-bootstrap-grid';
import Main from './components/ui/Main';
import Header from './components/ui/Header';
import Routes from './components/Routes';
import Footer from './components/ui/Footer';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';
import GlobalModal from './components/GlobalModal';

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

const source = createMemorySource('/');
export const history = createHistory(source);

const store = createStore();

const App: FunctionComponent = () => (
  <ThemeProvider theme={light}>
    <Provider store={store}>
      <LocationProvider history={history}>
        <ToastContainer position="bottom-center" pauseOnHover={true} />
        <GlobalModal />
        <GlobalStyle />
        <BaseCSS />

        <Main>
          <Header />
          <Routes />
        </Main>
        <Footer />
      </LocationProvider>
    </Provider>
  </ThemeProvider>
);

export default hot(App);
