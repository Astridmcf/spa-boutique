

interface BoutiqueSectionProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const BoutiqueSection: React.FC<BoutiqueSectionProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="boutique-section-padded-emojis">
      <span className="top-left-emoji">✨</span>
      <div className="boutique-text-container-padded">
        <h2 className="boutique-title-padded">{title}</h2>
        {subtitle && <p className="boutique-subtitle-padded">{subtitle}</p>}
      </div>
      <div className="boutique-image-container-padded">
        <img src={imageUrl} alt={title} className="boutique-image-padded" />
      </div>
      <span className="bottom-right-emoji">✨</span>
    </div>
  );
};

export default BoutiqueSection;