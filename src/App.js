import './reset.css'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Projects'
import projectData from './projectData/projectData';
import { Link, Switch, Route, HashRouter as Router } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'></Link>
      
      <Switch>
        <Route exact path="/">
          <Header />
          <Project project={projectData[0]} />
          <Footer />
        </Route>
        <Route exact path="/1">
          <Header />
          <Project project={projectData[0]} />
          <Footer />
        </Route>
        <Route exact path="/2">
          <Header />
          <Project project={projectData[1]} />
          <Footer />
        </Route>
        <Route exact path="/3">
          <Header />
          <Project project={projectData[2]} />
          <Footer />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
