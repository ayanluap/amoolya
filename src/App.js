import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

// Pages
import Home from './components/pages/Home';
import WhoWeServe from './components/pages/WhoWeServe';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={WhoWeServe} />
      </Switch>
    </Router>
  );
};

export default App;
