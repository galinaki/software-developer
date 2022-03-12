import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Introduce from './components/Introduction/Introduce'
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Introduce />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Resume />
      <br />
      <br />
      <Footer />
      <br />
      <br />
    </div>
  );
}

export default App;
