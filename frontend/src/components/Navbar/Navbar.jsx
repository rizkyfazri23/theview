import React from 'react';
import TheViewImage from 'src/assets/images/navbar_The_View.png';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'; // Tambahkan icon untuk logout
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../AuthContext';
import VectorImage from 'src/assets/images/navbar_Vector.png';





const Navbar = ({ isNotDashboard }) => {
  
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Destructure isLoggedIn dan setIsLoggedIn dari useAuth()


  const handleLoginClick = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      // Jika pengguna sudah login, lakukan aksi logout di sini
      setIsLoggedIn(false); // Set isLoggedIn ke false saat logout
      localStorage.removeItem('authToken'); // Hapus token dari localStorage saat logout
      navigate('/'); // Navigasi ke halaman logout setelah logout berhasil
    } else {
      // Jika pengguna belum login, navigasikan ke halaman login
      navigate('/login');
    }
  };

  return (
    <div className={`${styles.navbar} ${isNotDashboard ? styles.navbarSiteplan : ''}`}>
      {isNotDashboard ? (
        <div className={styles.icRoundArrowBack} onClick={() => navigate(-1)}>
          <div className={styles.arrow}></div>
        </div>
      ) : (
        ''
      )}
      
      <div className={styles.frame5}>
        <img src={TheViewImage} className={styles.theView} alt="The View" />
        <div className={styles.byHektaKarya}>by Hekta Karya</div>
      </div>
      <div className={styles.frame4}></div>
      {/* <div className={styles.frame3}>
        <div className={styles.beranda}>Beranda</div>
        <div className={styles.siteplan}>Siteplan</div>
        <div className={styles.q3dVirtual}>3D Virtual</div>
        <div className={styles.about}>About</div>
      </div> */}
      <div className={styles.frame2}>
        <button className={styles.buttonLogin} onClick={handleLoginClick}>
          <FontAwesomeIcon icon={isLoggedIn ? faUnlock : faLock} className={styles.lockIcon} />
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
