import Home from './components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit'
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
            <Switch>
            <Route path="/edit/:id">
                <Edit/>
              </Route>
            <Route path="/create">
                <Create/>
              </Route>
              <Route path="/read/:rid">
                <Read/>
              </Route>
              <Route path="/delete/:id">
                <Delete/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </UserProvider>
    </div>
  );
}

export default App;
