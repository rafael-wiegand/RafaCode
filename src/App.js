import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Importando o hook useLocation
import './App.css';
import HeaderComponent from './components/Header/header';
import SobreComponent from './components/Section/sobre';
import SectionServicos from './components/Section/servicos';
import FooterComponent from './components/Footer/footer';

// Componente para rolar para o topo a cada mudança de rota
const ScrollToTop = () => {
  const location = useLocation(); // Hook para monitorar mudanças de rota

  useEffect(() => {
    // A cada mudança de rota, força a rolagem para o topo
    window.scrollTo(0, 0);

    // Desabilita a rolagem automática do navegador
    document.body.style.scrollBehavior = 'auto';

    // Após rolar para o topo, ativa a rolagem suave novamente, se necessário
    setTimeout(() => {
      document.body.style.scrollBehavior = 'smooth';
    }, 0); // Isso garante que o efeito de rolagem suave só ocorra depois de rolar para o topo

  }, [location]); // O efeito será acionado sempre que a rota mudar

  return null; // Não precisa renderizar nada
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Componente para rolar ao topo em cada mudança de rota */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeaderComponent />
              <SobreComponent />
              <SectionServicos />
              <FooterComponent />
            </>
          } 
        />
        {/* Adicione outras rotas aqui se necessário */}
      </Routes>
    </Router>
  );
};

export default App;
