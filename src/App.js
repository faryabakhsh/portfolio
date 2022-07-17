import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path='/' exact>
          <Home />
        </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/education">
        <Education />
      </Route>
    </div>
  );
}

export default App;
