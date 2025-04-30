import React, { useState } from 'react';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Cerrar el menú después de hacer clic en un enlace
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img src="/vite.png" alt="Logo" style={{ height: '50px', marginRight: '30px', verticalAlign: 'middle' }} />
      </div>

      {/* Botón de menú (hamburguesa) */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰ {/* Puedes usar un icono de biblioteca de iconos como Font Awesome o React Icons */}
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
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