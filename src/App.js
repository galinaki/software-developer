import './App.css';
import Introduce from './components/Introduction/Introduce'
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="App">
      <Introduce />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
