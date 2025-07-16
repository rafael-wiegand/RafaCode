//import React, { useEffect } from 'react';
//import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Importando o hook useLocation
import './App.css';
import HeaderComponent from './components/Header/header';
import SobreComponent from './components/Section/sobre';
import SectionServicos from './components/Section/servicos';
import FooterComponent from './components/Footer/footer';


const App = () => {
  return (
            <>
              <HeaderComponent />
              <SobreComponent />
              <SectionServicos />
              <FooterComponent />
            </>
  );
};

export default App;
