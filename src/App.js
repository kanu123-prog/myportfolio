import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import About from './components/About';
import { Projects } from './components/Projects';
import { Contacts } from './components/Contacts';
import Qualification from './components/Qualification';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Banner></Banner>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Qualification></Qualification>
    <Contacts></Contacts>
    <Footer></Footer>
    </div>
  );
}

export default App;
