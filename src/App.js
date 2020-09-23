import React from 'react';
import SideDrawer from './component/SideDrawer/sideDrawer';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import EditUsers from './component/users/EditUsers';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'; 
import ViewUser from './component/users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router >
      <Route exact path="/" component={SideDrawer} />
      <Route exact path="/new-user" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/users/edit/:id" component={EditUsers}/>
      <Route exact path="/users/view/:id" component={ViewUser}/>
      
    </Router>
      
    </div>
  );
}

export default App;
