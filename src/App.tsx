import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/unauth/Home';
import Login from './pages/unauth/Login';
import Register from './pages/unauth/Register';
import Dashboard from './pages/auth/Dashboard';
import Header from './components/layout/Header';

const App: React.FC = () => {
  return(
    <React.Fragment>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

// We could export the variable directly, in which case we would need to reference it as: import {App} from 'filepath'
// Exporting it as default means we can simply do: import App from 'filepath'. This ensures we only have one export per file.
export default App;
