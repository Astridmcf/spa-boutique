// components/Navbar.tsx
import React from 'react';


const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
      <img src="/vite.png" alt="Logo" style={{ height: '50px', marginRight: '30px', verticalAlign: 'middle' }} />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item" onClick={() => scrollToSection('inicio')}>Inicio</li>
        <li className="navbar-item" onClick={() => scrollToSection('servicios')}>Servicios</li>
        <li className="navbar-item" onClick={() => scrollToSection('boutique')}>Boutique</li>
        <li className="navbar-item" onClick={() => scrollToSection('visitanos')}>Visítanos</li>
        <li className="navbar-item" onClick={() => scrollToSection('redes-sociales')}>Redes sociales</li>
        <li className="navbar-item" onClick={() => scrollToSection('promotion-dev')}>Diseño Web</li>
      </ul>
    </nav>
  );
};

export default Navbar;