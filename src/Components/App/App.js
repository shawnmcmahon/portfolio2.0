import Header from '../Header/Header';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import findStyleAndDesign from '../../findStyleAndDesign';

import '../../styles/desktop/App.scss';



import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';

const App = () => {
  const [pageMode, setPageMode] = useState(localStorage.getItem('pageMode') || 'Light Mode');
  const [pageDesign, setPageDesign] = useState(localStorage.getItem('pageDesign') || 'Flat')



  const handleDesignSwitch = () => {
    if (pageDesign === 'Flat') {
      setPageDesign('Neomorphism');
      localStorage.setItem('pageDesign', 'Neomorphism');
      console.log('neo')
    } else if (pageDesign === 'Neomorphism') {
      setPageDesign('Flat') 
      localStorage.setItem('pageDesign', 'Flat')
      console.log('flat')
    }
  }

  
  const toggleTheme = () => {
    if (pageMode === 'Light Mode') {
      setPageMode('Dark Mode');
      localStorage.setItem('pageMode', 'Dark Mode')
    } else {
      setPageMode('Light Mode');
      localStorage.setItem('pageMode', 'Light Mode')
    }
  }


  return (
    <ThemeProvider theme={lightTheme} th
    eme={pageMode === 'Light Mode' ? lightTheme : darkTheme}> 

      <div className={findStyleAndDesign(pageMode, pageDesign, "app")}>
        <GlobalStyles />
        <Header pageMode={pageMode} pageDesign={pageDesign} handleDesignSwitch={handleDesignSwitch} toggleTheme={toggleTheme} /> 
        <Routes> 
          <Route
            path='/'
            element={<Home pageMode={pageMode} pageDesign={pageDesign} />}
          />
          <Route
            path='/portfolio/'
            element={<Portfolio pageMode={pageMode} pageDesign={pageDesign}/>}
          />
          <Route
            path='/contact/'
            element={<Contact pageMode={pageMode} pageDesign={pageDesign}/>}
          />
          <Route
            path='*'
            element={<Error pageMode={pageMode} pageDesign={pageDesign}/>}
          />
        </Routes>
          <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
