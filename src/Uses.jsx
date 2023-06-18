import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import useScrollToTop from './hooks/useScrollToTop'

const Uses = () => {
  useScrollToTop();
  const chameleonAnimation = keyframes`
    0% { color: #47FCE4; }
    25% { color: #8DFFB2; }
    50% { color: #D5FD82; }
    75% { color: #F9F871; }
    100% { color: #039590; }
  `;

  const ChameleonText = styled.span`
    animation: ${chameleonAnimation} 7s infinite;
    transition-timing-function: linear;
  `;

  const Link = styled.a`
    color: RGB(147, 112, 219);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <Wrapper>
      <div className="main_line">
        <p>
          <ChameleonText>/Uses</ChameleonText>
        </p>
      </div>
      <div className="apps">
        <p>Applications</p>
      </div>
      <ul className="item-list">
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">VS Code</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Chrome</span>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Discord</span>
        </li>
      </ul>
      <div className="apps">
        <p>Helper Apps</p>
      </div>
      <ul className="item-list">
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Backdrops</span>
          <div className="text_apps">regularly changing wallpapers of absolutely wow quality</div>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Lightroom</span>
          <div className="text_apps">My one stop for photo editing.</div>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Pinterest</span>
          <div className="text_apps">Design inspiration to wallpaper, solves all,</div>
        </li>
      </ul>
      <div className="apps">
        <p>VS Code Equipments</p>
      </div>
      <div className="text_apps_u">
        <p>I have harnessed the might of VS Code with a few essential extensions for an enhanced coding experience.</p>
      </div>
      <ul className="item-list">
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Karma</span>
          <div className="text_apps">A colorful VS Code theme</div>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">Prettier</span>
          <div className="text_apps">Formatting code consistently is important for readability and maintainability.</div>
        </li>
        <li>
          <FaLongArrowAltRight className="arrow" />
          <span className="arrow-content">IntelliSense</span>
          <div className="text_apps">This built-in feature of VS Code provides intelligent code completion suggestions.</div>
        </li>
      </ul>
      <div className="apps">
        <p>Equipments</p>
      </div>
      <ul className="item-list">
        <li>Laptop HP-Pavilion i5 10th Gen</li>
        <li>Phone Samsung A71</li>
        <li>Watch Noise Core 2</li>
        <li>
          <Link href="https://www.amazon.in/dp/B073XGT189/ref=twister_B0C78HGYMT?_encoding=UTF8&th=1" target="_blank" rel="noopener noreferrer">
            boAt Bass Heads 225 in-Ear Wired Headphones with Mic (Neon Lime)
          </Link>
        </li>
        <li>
          <Link href="https://www.amazon.in/Zebronics-Zeb-Transformer-M-Optical-Gaming-Effect/dp/B0819HZPXL" target="_blank" rel="noopener noreferrer">
            Zebronics Zeb-Transformer-M Optical
          </Link>
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

  .main_line {
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
    // align-items: center;
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
  }

  .text_apps {
    color: white;
    margin-left: 0.625rem;
    
    font-weight: 400;
  }

  .text_apps_u {
    margin-top: 0.625rem;
    font-weight: 400;
    font-size: 1.125rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    .main_line {
      
      width: 90vw;
      
    }

    .arrow {
      color: ${({ theme }) => theme.colors.helper};
      margin-right: 1rem;
      font-size: 20px;
      flex-wrap: wrap;
    }

    .item-list li {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.625rem;
      font-weight: 400;
    }
  }
`;

export default Uses;
