import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  const Link = styled.a`
    color: ${({ theme }) => theme.colors.body};
    text-decoration: none;
    cursor: pointer;
  
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.helper};
    }
  `;

  const Nav = styled.nav`
    .menuIcon {
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }

    .navbar-list {
      display: flex;
      gap: 2vw;

      li {
        list-style: none;
      }

      .navbar-link {
        color: ${({ theme }) => theme.colors.body};
        font-size: 1.5rem;
        text-decoration: none;

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
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
      width: 85vw;

      .navbar-list {
        gap: 1.2vw;

        .navbar-link {
          font-size: 1.5rem;
        }

        .github {
          font-size: 1.5rem;
        }
      }
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
            <NavLink className="navbar-link" to="/project">Projects</NavLink>
          </li>
          <li>
            <div className="github">
              <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </Link>
            </div>
          </li>
          <li>
            <div className="github">
              <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
            </div>
          </li>
          <li>
            <div className="github">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jainilcrshah@gmail.com" target="_blank" rel="noopener noreferrer">
                <IoMdMail />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
