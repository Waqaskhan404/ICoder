import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import Contactus from './components/Contactus';

function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
          <Navbar/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contactus/>
          </Route>
        </Switch>
     
     </Router>      
  
    </>
  );
}

export default App;
