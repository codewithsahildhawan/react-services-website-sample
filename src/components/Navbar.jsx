import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {

const Nav = styled.nav`
    .navbar-list {
        display:flex;
        gap:4rem;

        li {
            list-style:none;
            .navbar-link {
                list-style:none;
                text-decoration:none;
                text-transform:uppercase;
                color:${({theme}) =>theme.colors.dark_text};
                font-weight:400;

                &:hover,
                &:active {
                    color:${({theme}) =>theme.colors.light_text};
                }
            }
        }
    }
`;

  return (
    <Nav>
        <div className='menuIcon'>
            <ul className='navbar-list'>
                <li>
                    <NavLink className="navbar-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  )
}

export default Navbar
