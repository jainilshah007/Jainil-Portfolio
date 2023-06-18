import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import {IoMdMail} from "react-icons/io";

const Navbar = () => {
  const Link = styled.a`
  color:white;
  text-decoration: none;
  cursor: pointer;
 
  &:hover {
    text-decoration: underline;
    color: RGB(147, 112, 219);
  }`
  const Nav = styled.nav`
  .menuIcon{display:flex;
    // width:50vw;
 margin-left:auto;
  margin-right:auto;
  }
    .navbar-list {
      display: flex;
      gap: 2vw;
     

      li {
        list-style: none;
      }

      .navbar-link {
        &:link,
        &:visited {
        }

        list-style: none;
        color: white;

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }

        font-size: 1.5rem;
        text-decoration: none;
      }

      .github {
        font-size: 1.5rem;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    @media screen and (max-width: 768px) {
      width:85vw;
    }
  `;

  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/About">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/Uses">Uses</NavLink>
          </li>
          <li>
            <div className="github">
            <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferre"><FaGithub /></Link></div>
          </li>
          <li>
            <div className="github">
            <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferre"><FaTwitter /></Link></div>
          </li>
          <li>
            <div className="github">
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jainilcrshah@gmail.com" target="_blank" rel="noopener noreferre"><IoMdMail/></Link></div>
          </li>
        </ul>
      </div>
    </Nav>
  );
};


export default Navbar;
