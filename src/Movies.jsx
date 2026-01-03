import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import useScrollToTop from './hooks/useScrollToTop'

const Movies = () => {
  useScrollToTop();
  const chameleonAnimation = keyframes`
    0% { color: rgb(9,5,56); }
    10% { color: rgb(0,41,87); }
    20% { color: rgb(1,70,75); }
    30% { color: rgb(0,97,139); }
    40% { color: rgb(0,140,153); }
    50% { color: rgb(171,223,210); }
    60% { color: rgb(219,152,203); }
    70% { color: rgb(195,98,165); }
    
    80% { color: rgb(117,50,101); }
    90% { color: rgb(133,0,47); }
    70% { color: rgb(111,27,61); }
  `;

  const ChameleonText = styled.span`
    animation: ${chameleonAnimation} 12s infinite;
    transition-timing-function: linear;
  `;



  return (
    <Wrapper>
      <div className="main_line_movies">
        <p>
          <ChameleonText>/Movies</ChameleonText>
        </p>
      </div>
      <div className="apps">
        <p>Movies Recommendations</p>
      </div>
      <ul className="item-list">
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Blood Diamond</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Borat/Borat2</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">BATMAN-2022</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Snowden</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Baby Driver</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Bullet Train</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Drive</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">The Gentleman</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Crazy Stupid Love</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Soul</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Whiplash</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Prestige</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">GODFATHER</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Ocean's</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Midnight Trilogy</span>
        </li>



      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 50vw;

  .apps {
    color: ${({ theme }) => theme.colors.helper};
    font-size: 2.25rem;
    line-height: 3.375rem;
    display: flex;
    margin-top: 3.125rem;
  }

  .main_line_movies {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    font-size: 5.62rem;
    text-align: center;
    margin-top: 3.125rem;
    transition: color 5s linear;
  }

  .item-list {
    color: ${({ theme }) => theme.colors.helper};
    margin-top: 1.875rem;
    font-size: 1.125rem;
    line-height: 1.68rem;
    list-style: none;
    gap: 0px;
  }

  .item-list li {
    display: flex;
    margin-top: 0.625rem;
    font-weight: 400;
  }

  .arrow {
    color: ${({ theme }) => theme.colors.helper};
    margin-right: 1rem;
    font-size: 20px;
    width: 1.5rem;
    height: 1.5rem;
  }

  .arrow-content {
    margin-right: 0.5rem;
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.colors.body};
  }

  .arrow-content:hover {
    color: rgb(249,222,31); /* Add your desired hover color here */
  }

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    .main_line_movies {
      
      width: 90vw;
    .arrow-content:hover {
      color: blue; /* Remove hover color on mobile */
    }
  }
`;

export default Movies;
