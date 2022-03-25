import './App.css';
import {Route,Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <header className="App-header">
          <Route exact path='/'>
        <Home/>
          </Route>
          <Route exact path='/subreddit'>
              <Subreddit/>
          </Route>
      </header>
      </Switch>

    </div>
  );
}

export default App;
