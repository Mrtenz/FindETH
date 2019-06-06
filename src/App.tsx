import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider, lightTheme } from './styles';
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
    font-size: 62.5%;
    overflow-x: hidden;
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }
`;

const store = createStore();

const App: FunctionComponent = () => (
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <HashRouter>
        <Analytics>
          <GlobalModal />
          <GlobalStyle />

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
