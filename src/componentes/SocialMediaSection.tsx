// components/SocialMediaSection.tsx
import React from 'react';

import { FaInstagram} from 'react-icons/fa'; // Importa los iconos de Font Awesome

interface SocialMediaProps {
  leftHeading: string;
  leftSubheading: string;
  instagramUsername: string;
  tiktokUsername: string;
  rightHeading?: string; // Optional heading for the right side
}

const SocialMediaSection: React.FC<SocialMediaProps> = ({
  leftHeading,
  leftSubheading,
  instagramUsername,
  tiktokUsername,
  rightHeading,
}) => {
  const pinterestLink = 'https://www.facebook.com/share/1CVcpZ1hpy/';

  const handleInstagramClick = () => {
    window.open(pinterestLink, '_blank');
  };

  const handleTiktokClick = () => {
    window.open(pinterestLink, '_blank');
  };

  return (
    <div className="social-media-section-reusable">
      <div className="social-media-left-reusable">
        <h2 className="social-media-heading-left-reusable">{leftHeading}</h2>
        <p className="social-media-subheading-left-reusable">{leftSubheading}</p>
        <div className="social-media-link-left-reusable" onClick={handleInstagramClick} style={{ cursor: 'pointer' }}>
          <FaInstagram className="social-media-icon-left-reusable" />
          <span className="social-media-username-left-reusable">{instagramUsername}</span>
        </div>
      </div>
      <div className="social-media-right-reusable">
        {rightHeading && <h2 className="social-media-heading-right-reusable">{rightHeading}</h2>}
        <div className="social-media-link-right-reusable" onClick={handleTiktokClick} style={{ cursor: 'pointer' }}>
        
          <span className="social-media-username-right-reusable">{tiktokUsername}</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;