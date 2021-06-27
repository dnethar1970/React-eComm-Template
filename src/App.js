import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';

import './App.css';

const HatsPage = () => {
  return (
      <div>
        <h1>Hats Page </h1>
      </div>
  );
};

const SneakersPage = () => {
  return (
    <div>
      <h1>Sneakers Page </h1>
    </div>
  );
};

const JacketsPage = () => {
  return (
    <div>
      <h1>Jackets Page </h1>
    </div>
  );
};

const WomensPage = () => {
  return (
    <div>
      <h1>Womens Page </h1>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
};

const MensPage = () => {
  return (
    <div>
      <h1>Mens Page </h1>
    </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>Topic Detail Page: { props.match.params.topicId }</h1>
    </div>
  );
};

function App() {
  return (
    <div> 
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route path='/shop/sneakers' component={SneakersPage} />
          <Route path='/shop/jackets' component={JacketsPage} />
          <Route path='/shop/womens' component={WomensPage} />
          <Route path='/shop/mens' component={MensPage} />
          <Route exact path='/topics' component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
