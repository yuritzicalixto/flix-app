import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Footer from './Componentes/Footer';
import NuevoVideo from './Componentes/NuevoVideo';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <NuevoVideo/>
      <Footer/>
    </div>
  );
}

export default App;
