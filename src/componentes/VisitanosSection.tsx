// components/VisitanosSection.tsx
import React from 'react';


interface InfoItem {
  title: string;
  details: string[];
}

interface VisitanosSectionProps {
  title: string;
  infoItems: InfoItem[];
}

const VisitanosSection: React.FC<VisitanosSectionProps> = ({ title, infoItems }) => {
  return (
    <div className="visitanos-section-reusable">
      <h2 className="visitanos-title-with-emojis">✿ {title} ✿</h2>
      <div className="visitanos-content-reusable">
        {infoItems.map((item, index) => (
          <div key={index} className="visitanos-block-reusable">
            <h3 className="visitanos-subtitle-reusable">{item.title}</h3>
            {item.details.map((detail, detailIndex) => (
              <p key={detailIndex} className="visitanos-text-reusable">{detail}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitanosSection;