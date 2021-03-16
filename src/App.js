
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
   <div>
     
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/:CountryName'>
            <CountryDetail/>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
