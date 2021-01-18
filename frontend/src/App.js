import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

// Pages
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import WhoWeServe from './components/pages/WhoWeServe';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ClientExp from './components/pages/ClientExp';
import Login from './components/pages/Login';
import Err404 from './components/pages/Err404';
import Admin from './components/layouts/Admin';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/client-experience" exact component={ClientExp} />
          <Route path="/who-we-serve" exact component={WhoWeServe} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/know-us/our-vision" exact component={About} />
          <Route path="/know-us/our-team" exact component={About} />

          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="*" component={Err404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
