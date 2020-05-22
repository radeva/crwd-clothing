import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const AnyPage = () => {
  let { pageName } = useParams();

  return (<div><h1>{pageName} Page</h1></div>)
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/shop/:pageName' component={AnyPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
