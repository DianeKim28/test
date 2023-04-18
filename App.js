
import './App.css';
import Header from './components/Header.js';
import Contents from './components/Contents';
import Slide from './components/Slide';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
  return (
    <div id ="wrap">
      <Logo/>
      <Header/>
      <Footer/>
      <Contents/>
      <Slide/>
    </div>
  );
}

export default App;
