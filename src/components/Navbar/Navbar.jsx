import React from 'react';
import TheViewImage from 'src/assets/images/navbar_The_View.png';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ isSiteplanPath }) => {
  return (
    <div className={`${styles.navbar} ${isSiteplanPath ? styles.navbarSiteplan : ''}`}>
      <div className={styles.frame5}>
        <img src={TheViewImage} className={styles.theView} alt="The View" />
        <div className={styles.byHektaKarya}>by Hekta Karya</div>
      </div>
      <div className={styles.frame4}></div>
      <div className={styles.frame3}>
        <div className={styles.beranda}>Beranda</div>
        <div className={styles.siteplan}>Siteplan</div>
        <div className={styles.q3dVirtual}>3D Virtual</div>
        <div className={styles.about}>About</div>
      </div>
      <div className={styles.frame2}>
        <button className={styles.buttonLogin}>
          <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
