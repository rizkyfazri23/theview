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
      <a href="https://www.theviewbintaro.com/" target="_blank" rel="noopener noreferrer" className="card card-hekta">
        <div>
          <img src={ImageHekta} alt="Card Image" className="card-hekta-image" />
          <div className="card-text">Website</div>
        </div>
      </a>

      <Link to="/siteplan" className="card card-siteplan">
        <div>
          <img src={SiteplanLogo} alt="Card Image" className="card-image" />
          <div className="card-text">Siteplan</div>
        </div>
      </Link>

      <a href="https://theview.co.id/theviewvirtual/" target="_blank" rel="noopener noreferrer" className="card card-vr">
        <div >
          <img src={VrLogo} alt="Card Image" className="card-image" />
          <div className="card-text">3D Virtual</div>
        </div>
      </a>

      <a href="https://www.youtube.com/@hektakarya9516" target="_blank" rel="noopener noreferrer" className="card card-youtube">
        <div>
          <img src={YoutubeLogo} alt="Card Image" className="card-image" />
          <div className="card-text">Youtube</div>
        </div>
      </a>
    </div>
  );
}

export default Card;
