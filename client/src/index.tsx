import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import styled from 'styled-components';

import client from './apollo-client';
import Cars from './components/cars';
import logo from './logo.jpeg';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const Container = styled.div`
  text-align: center;
  width: 100vw;
`;

const AppHeader = styled.header`
  background-color: black;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  height: 80px;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <AppHeader>
          <Logo src={logo} className="App-logo" alt="logo" />
          <h1>Cars Collection</h1>
        </AppHeader>
        <Cars />
      </Container>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
