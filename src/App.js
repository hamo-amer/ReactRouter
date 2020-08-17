import React from 'react';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import Login,{fakeAuth} from './Login';
import Admin from './Admin';
import {Link,Route,Switch,BrowserRouter as Router,Redirect} from 'react-router-dom';
import './App.css';

function App() {
 
  return (
    <Router>
    <div className="App">
      <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/category'>Category</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/admin'>Admin area</Link></li>
      </ul>
      </nav>
     
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route path='/category' component={Category} />
        <Route path='/products' component={Products} />
        <Route path="/login" component={Login} />
        <PrivateRoute  path='/Admin' component = {Admin} />
      </Switch>
      
    </div>
    </Router>
  );
}
const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

export default App;

