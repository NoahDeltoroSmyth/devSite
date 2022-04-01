import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CodeProjects from './views/CodeProjects/CodeProjects';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import PersonalProjects from './views/PersonalProjects.jsx/PersonalProjects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/code-projects">
            <CodeProjects />
          </Route>
          <Route path="/personal-projects">
            <PersonalProjects />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
