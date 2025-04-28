import React from 'react';

interface BannerProps {
  title: string;
  subtitle: string;
  button1Text: string;
  button2Text: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, button1Text, button2Text }) => {
  const whatsappLink = 'https://wa.me/573009745500';
  const instagramProfile = 'https://www.instagram.com/astriddeveloper/';

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramProfile, '_blank');
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-subtitle">{subtitle}</p>
        <div className="banner-buttons"> {/* Contenedor para los botones */}
          <button className="banner-button" onClick={handleWhatsAppClick}>{button1Text}</button>
          <button className="banner-button" onClick={handleInstagramClick}>{button2Text}</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;