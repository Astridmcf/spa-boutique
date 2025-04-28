// components/PromotionDev.tsx
import React from 'react';

interface PromotionDevProps {
  imageSrc: string; // URL o ruta de la imagen
}

const PromotionDev: React.FC<PromotionDevProps> = ({ imageSrc }) => {
  const instagramProfile = 'https://www.instagram.com/astriddeveloper/';

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Previene la acción predeterminada del enlace
    event.stopPropagation(); // Detiene la propagación del evento
    window.open(instagramProfile, '_blank');
  };

  return (
    <section className="promotion-dev-section">
      <div className="promotion-dev-text">
        <h2 className="promotion-dev-title">
          ¡Haz brillar tu marca online! 💻✨
        </h2>
        <p className="promotion-dev-description">
          Soy AstridDev, me dedico con pasión al diseño y desarrollo de sitios web atractivos, funcionales y únicos. 💖 ¡Presupuestos 100% gratuitos y personalizados!
        </p>
        <a
          href="#" // Puedes dejarlo como '#' o incluso quitarlo si solo dependes del onClick
          target="_blank"
          rel="noopener noreferrer"
          className="promotion-dev-button"
          onClick={handleButtonClick}
        >
          Escríbeme aquí 💌
        </a>
      </div>
      <div className="promotion-dev-image">
        <img src={imageSrc} alt="Desarrolladora" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
      </div>
    </section>
  );
};

export default PromotionDev;