import { Route, Switch } from 'react-router';
import AdminNavbar from '../components/AdminNavbar';
import ManageBlogs from '../pages/ManageBlogs';

const Admin = () => {
  return (
    <div className="admin">
      <AdminNavbar />
      <div className="container">
        <Switch>
          <Route path="/admin" component={ManageBlogs} />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
