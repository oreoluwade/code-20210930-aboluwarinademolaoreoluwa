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

const Debug = styled.a`
  position: fixed;
  top: 10px;
  right: 10px;
  color: white;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <AppHeader>
          <Logo src={logo} className="App-logo" alt="logo" />
          <h1>Cars Collection</h1>
          <Debug
            href={`http://localhost:${process.env.REACT_APP_SERVER_PORT}/graphql`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Debug
          </Debug>
        </AppHeader>
        <Cars />
      </Container>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
