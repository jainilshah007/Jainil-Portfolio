import React from 'react';
import styled from 'styled-components';
import useScrollToTop from './hooks/useScrollToTop';

const Home = () => {
  useScrollToTop();

  return (
    <Wrapper>
      <div className="home-main">
        <h1 className="hey">Hey, I'm Jainil! 👋</h1>
        <p className="tagline">applied LLM mechanic_</p>
        <div className="Main_content">
          <p>
            I dissect, tweak, and fine-tune{' '}
            <Link>
              language models
            </Link>—from architecture to inference. Strong math base, faster execution.
            <br /><br />
            Deep into{' '}
            <Link>
              AI
            </Link> and{' '}
            <Link>
              Web3
            </Link>, breaking things, fixing them, and getting excited when stuff works.
            I'm exploring how machines read{' '}
            <Link>
              documents
            </Link>, understand context, and support better decisions.
            It's led me to build tools that think, remember, and sometimes surprise me.
            <br /><br />
            This site is a little personal project. Someday I hope to build something bigger—a product or maybe a company.
            For now, I'm just experimenting and following the spark.
          </p>
          <blockquote className="quote">
            "Growth is the art of feeling regularly stupid."
          </blockquote>
        </div>
      </div>
    </Wrapper>
  );
};

const Link = styled.a`
  color: ${({ theme }) => theme.colors.helper};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.section`
  text-align: center;

  .home-main {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    margin-top: 3.125rem;
  }

  .hey {
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    font-size: 2.81rem;
    line-height: 4.21rem;
    vertical-align: baseline;
    font-weight: 700;
    text-indent: 0;
    text-align: start;
  }

  .Main_content {
    justify-content: center;
    margin-top: 3.125rem;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    text-align: start;
    line-height: 1.68rem;
    vertical-align: baseline;
    font-weight: 400;
  }

  .tagline {
    font-family: 'Courier New', monospace;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.helper};
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    text-align: start;
    letter-spacing: 0.05em;
    font-weight: 500;
  }

  .quote {
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    border-left: 3px solid ${({ theme }) => theme.colors.helper};
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .home-main {
      margin-left: 0.1rem;
      overflow-x: hidden;
    }

    .hey {
      width: 90vw;
      text-align: start;
      font-size: 2.3rem;
      line-height: 4.21rem;
    }

    .tagline {
      width: 90vw;
      text-align: start;
      font-size: 1rem;
    }

    .Main_content {
      overflow-x: hidden;
      text-align: start;
      vertical-align: baseline;
      width: 90vw;
    }

    .quote {
      padding: 0.75rem 1rem;
    }
  }
`;

export default Home;
