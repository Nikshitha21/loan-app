
import NavBar from './components/Layout/Navbar';
//import Registration from './components/Registration';
import AddCustomer from './components/AddCustomer';
import Login from './components/Login';
import ApplyLoan from './components/ApplyLoan';
import Education from './components/Education';
import Personal from './components/Personal';
import Update from './components/Update';
import AccountDetails from './components/AccountDetails';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginWelcome from './components/LoginWelcome';

function App(){
  return (
   <Router>
     <div>
     <NavBar/>
     <Switch>
       <Route exact path='/AccountDetails' component={AccountDetails}/>
       <Route exact path='/' component={AddCustomer}/>
       <Route exact path='/Login' component={Login}/>
       <Route exact path='/ApplyLoan' component={ApplyLoan}/>
       <Route exact path='/Education' component={Education}/>
       <Route exact path='/Personal' component={Personal}/>
       <Route exact path='/Update' component={Update}/>
       <Route exact path='/LoginWelcome' component={LoginWelcome}/>
     
    </Switch>
  </div>
   </Router>
  
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import {store} from './actions/store';
// import {Provider} from 'react-redux';
// import LoanReg from './components/LoanReg';
// function App(){
//   return(
// <Provider store={store}>
//    <LoanReg/>
// </Provider>
//   );
// }
// export default App;

