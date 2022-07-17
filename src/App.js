import {Route} from 'react-router-dom';
import './App.css';
import Education from './pages/Education';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
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
