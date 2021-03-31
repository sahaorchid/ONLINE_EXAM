
import {Switch,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Login from './Login';
import Menu from './Menu';
import Success from './Success'
import Homeapp from './Homaapp';

function App() {
  var arr =["rahul","roham"];
  return (
    <>
    <Switch>
      <Route exact path='/home/:id' component={()=><Home name={arr[1]}/>}/>
      <Route exact path='/home' component={Menu}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/index' component={Login}/>
      <Route exact path='/success' component={Success}/>
      <Route exact path='/' component={Homeapp}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
