import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Navbar from 'src/components/Navbar/Navbar';
import Siteplan from 'src/components/Siteplan/Siteplan';
import BackgroundImage from 'src/assets/images/background.png';
import Card from 'src/components/Card/Card';
import CardTest from 'src/components/Card/CardTest';
import Sidebar from 'src/components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CardTest />
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                  }}
                >
                  <HomePage />
                </div>
              }
            />
            <Route path="/siteplan" element={<SiteplanWithNavbar />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
};

const SiteplanWithNavbar = () => {
  const location = useLocation();
  const isSiteplanPath = location.pathname === '/siteplan';

  return (
    <>
      <Navbar isSiteplanPath={isSiteplanPath} />
      <Siteplan />
      <Sidebar />
    </>
  );
};

const Navbar1 = ({ isSiteplanPath }) => {
  return (
    <nav className={`navbar ${isSiteplanPath ? 'navbar--siteplan' : ''}`}>
      {/* Navbar content */}
    </nav>
  );
};

export default App;
