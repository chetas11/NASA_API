import './App.css'; 
import Home from './Components/Home'
import {SearchProvider} from './Components/SearchContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from './Components/SearchResults'

function App() {
  return (
    <SearchProvider>
    <div>
      <h1 className="text-center mt-4">NASA Media Search</h1>
      <hr />
      <Router>
        <Switch>
          <Route path="/searchresult">
              <SearchResults />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    </SearchProvider>
  );
}

export default App;
