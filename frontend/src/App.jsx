import React, { useEffect, useState  } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Navbar from 'src/components/Navbar/Navbar';
import Siteplan from 'src/components/Siteplan/Siteplan';
import BackgroundImage from 'src/assets/images/background.png';
import CardTest from 'src/components/Card/CardTest';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Detail from 'src/components/Detail/DetailSpesifikasi';
import Login from 'src/components/Login/Login';
import { AuthProvider } from './AuthContext';
import './components/Loader/Loader.css';
import { LoadingProvider, useLoading } from './LoadingContext';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CardTest />
    </div>
  );
};

const SiteplanWithSidebar = () => {
  const [isApplyFilter, setIsApplyFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    filterAvailable: false,
    filterSoldOut: false,
  });

  return (
    <div>
      <Siteplan isApplyFilter={isApplyFilter} filterData={filterData} />
      <Sidebar setIsApplyFilter={setIsApplyFilter} setFilterData={setFilterData} />
    </div>
  );
};


const ComponentWithNavbar = ({ children }) => {
  const location = useLocation();
  // const isNotDashboard = location.pathname !== '/' && location.pathname !== '/login';
  const isNotDashboard = location.pathname !== '/';


  return (
    <>
      <Navbar isNotDashboard={isNotDashboard} />
      {children}
    </>
  );
};

const SiteplanPage = () => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Setelah loading selesai
    }, 1000);
  }, [setIsLoading]); // Empty dependency array to run the effect only once

  return (
    isLoading ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (  
      <div>
        <ComponentWithNavbar>
          <SiteplanWithSidebar />
        </ComponentWithNavbar>
      </div>
    )
  );
};

const LoginPage = () => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Setelah loading selesai
    }, 1000);
  }, [setIsLoading]); // Empty dependency array to run the effect only once

  return (
    isLoading ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (  
      <div>
        <Login />
      </div>
    )
  );
};



const App = () => {

  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <AuthProvider> {/* Wrap the entire App with AuthProvider */}
            <LoadingProvider>
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
                <Route
                  path="/siteplan"
                  element={
                    <SiteplanPage />
                  }
                />
                <Route 
                  path="/detail/:houseId" 
                  element={
                    <ComponentWithNavbar>
                      <Detail />
                    </ComponentWithNavbar>
                  }
                />
                <Route 
                  path="/login" 
                  element={
                    <div
                      style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                      }}
                    >
                    {/* <ComponentWithNavbar> */}
                      <LoginPage />
                    {/* </ComponentWithNavbar> */}
                    </div>
                  }
                />
              </Routes>
            </LoadingProvider>
          </AuthProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
};

export default App;
