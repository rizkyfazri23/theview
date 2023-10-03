import React from 'react';
import './Card.css';
import ImageHekta from 'src/assets/images/card_image_1.png';
import SiteplanLogo from 'src/assets/images/siteplan-icon.png'
import VrLogo from 'src/assets/images/vr-logo.png';
import YoutubeLogo from 'src/assets/images/youtube-logo.png';
import { Link } from 'react-router-dom';


const Card = () => {
  return (
    <div className="card-container">
      <div className="card card-hekta">
        <img src={ImageHekta} alt="Card Image" className="card-hekta-image" />
        <div className="card-text">Website</div>
      </div>

      <Link to="/siteplan" className="card card-siteplan">
        <div>
          <img src={SiteplanLogo} alt="Card Image" className="card-image" />
          <div className="card-text">Siteplan</div>
        </div>
      </Link>

      <div className="card card-vr">
        <img src={VrLogo} alt="Card Image" className="card-image" />
        <div className="card-text">3D Virtual</div>
      </div>

      <div className="card card-youtube">
        <img src={YoutubeLogo} alt="Card Image" className="card-image" />
        <div className="card-text">Youtube</div>
      </div>
    </div>
  );
}

export default Card;
