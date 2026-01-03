import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';


const Header = () => {
  return (
    <Mainheader>
      <FlexContainer>
        <NavLink to="/">
          <svg className="purp_box" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="25" rx="6" fill="RGB(147, 112, 219)" />
          </svg>
        </NavLink>
        <Navbar />
      </FlexContainer>
    </Mainheader>
  );
};

const Mainheader = styled.header`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;

  .purp_box {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export default Header;
