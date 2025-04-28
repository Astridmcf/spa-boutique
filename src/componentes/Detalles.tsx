import React from 'react';


interface DetalleItem {
  title: string;
  details: string[];
}

interface DetallesProps {
  columns: DetalleItem[];
}

const Detalles: React.FC<DetallesProps> = ({ columns }) => {
  return (
    <div className="detalles-section-simple">
      {columns.map((column, index) => (
        <div key={index} className="detalles-column-simple">
          <h2 className="detalles-title-simple">{column.title}</h2>
          {column.details.map((detail, detailIndex) => (
            <p key={detailIndex} className="detalles-subtitle-simple">{detail}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Detalles;