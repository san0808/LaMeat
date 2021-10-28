import {BrowserRouter as   Router,Route,  Switch } from 'react-router-dom';
import './App.css';
import Events from './Components/Events';
import Home from "./Components/Home";
import Header from './Components/Header';
import EventPage from './asthetics/EventPage'
function App() {
  return (
    <Router>
    <div className="App">
     
       
      <Header />
     
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/Events'>
         <Events/>
      </Route>
      <Route path='/EventPage'>
        <EventPage/>
      </Route>
     
      
    </div>
    </Router>
  );
}

export default App;
