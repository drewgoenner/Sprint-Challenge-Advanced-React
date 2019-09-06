import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode'
import styled from 'styled-components';

const NavBar = styled.nav`
align-items: center;
border-bottom: 1px solid rgb(221, 221, 221);
display: flex;
height: 70px;
justify-content: space-between;
padding: 0 3%;
width: 100%;
-webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
-moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
`;

const DarkToggle = styled.div`
background: papayawhip;
border-radius: 50px;
border: 1px solid black;
height: 20px;
position: relative;
width: 40px;
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <NavBar>
      <h1>Women's World's Cup Players:</h1>
      <DarkToggle>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </DarkToggle>
    </NavBar>
  );
};

export default Navbar;