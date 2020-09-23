import React from 'react';
import SideDrawer from './component/SideDrawer/sideDrawer';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router >
      <Route exact path="/" component={SideDrawer} />
      <Route exact path="/new-user" component={Register}/>
      <Route exact path="/login" component={Login}/>
      
    </Router>
      
    </div>
  );
}

export default App;
