import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./clients/bidhelper";

import Header from './components/Header';
import NoMatch from './components/NoMatch';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about/:uid" component={About}/>
              <Route path="/posts" component={Posts}/>
              <Route path="/login" component={Login}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
