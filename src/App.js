import './App.css';
import Hero from './components/Hero/Hero'
import Classes from './components/Classes/Classes'
import Program from './components/Program/Program'
import CreateMember from './components/CreateMember/CreateMember'
import Schedule from './components/Schedule/Schedule'
import Trainers from './components/Trainers/Trainers'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
    <Hero />
    <Program />
    <CreateMember />
    <Classes/>
    <Schedule />
    <Trainers />
    <Contact />
    <footer>
      UI cloned from <span className="colored">Training Studio</span>
    </footer>
    </>
  );
}

export default App;
