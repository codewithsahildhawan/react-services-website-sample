import React from 'react'
import { NavLink } from 'react-bootstrap'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className='header-logo' src="./images/logo.png" alt="website-logo" width="50px"></img>
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
 padding: 0 4.8rem;
 height:5rem;
 background: ${({theme}) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items:center;

.header-logo {
  height:auto;
  max-width:80%
}

`;

export default Header
