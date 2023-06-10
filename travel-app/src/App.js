import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TravelForm from './components/TravelForm';
import TravelList from './components/TravelList';


function App() {
  return (
    <Router>
      <div >
        <nav style={{'display':'flex','textAlign':'center','alignItems':'center','justifyContent':'space-around','border':'2px dotted red'}}>
          <ul>
            <li>
              <Link to="/post">Post Data</Link>
            </li>
            <li>
              <Link to="/retrieve">Retrieve Data</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/post">
            <TravelForm />
          </Route>
          <Route path="/retrieve">
            <TravelList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
