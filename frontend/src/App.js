import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

// Pages
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import WhoWeServe from './components/pages/WhoWeServe';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ClientExp from './components/pages/ClientExp';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/client-experience" component={ClientExp} />
        <Route path="/who-we-serve" component={WhoWeServe} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
