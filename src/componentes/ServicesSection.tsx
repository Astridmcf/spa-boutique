import React from 'react';

interface ServiceItem {
  imageUrl: string;
  title: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div className="services-section">
      <h2 className="services-title">Servicios</h2>
      <p className="services-subtitle"> Cada servicio está pensado para resaltar tu esencia, consentirte con elegancia y brindarte una experiencia de bienestar inolvidable</p>
      <div className="services-grid-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-circle">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <h3 className="service-item-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;