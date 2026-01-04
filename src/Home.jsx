import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import useScrollToTop from './hooks/useScrollToTop';

const quotes = [
  "Growth is the art of feeling regularly stupid.",
  "Delusional Optimism is the only way out.",
  "We only hear the questions we are able to answer."
];

const Home = () => {
  useScrollToTop();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="home-main">
        <h1 className="hey">Hey, I'm Jainil! 👋</h1>
        <p className="tagline">applied LLM mechanic_</p>
        <div className="Main_content">
          <p>
            I dissect, tweak, and fine-tune{' '}
            <Link href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">
              language models
            </Link> - from architecture to inference. Strong math base, faster execution.
            <br /><br />
            Deep into{' '}
            <Link href="/project#ai-projects">
              AI
            </Link> and{' '}
            <Link href="/project">
              Web3
            </Link>, breaking things, fixing them, and getting excited when stuff works.
            I'm exploring how machines read{' '}
            <Link href="https://github.com/jainilshah007/BlockAudit" target="_blank" rel="noopener noreferrer">
              documents
            </Link>, understand context, and support better decisions.
            It's led me to build tools that think, remember, and sometimes surprise me.
            <br /><br />
            This site is a little personal project. Someday I hope to build something bigger - a product or maybe a company.
            For now, I'm just experimenting and following the spark.
          </p>

          <div className="current-project">
            <p>
              <span className="highlight">Currently working on</span>{' '}
              <Link href="https://github.com/jainilshah007/securePR" target="_blank" rel="noopener noreferrer">
                SecurePR
              </Link>{' '}
              - AI-powered security reviews on every PR.
              <br />
              A GitHub Action that finds vulnerabilities, explains the risk, and suggests fixes before merge.
            </p>
          </div>

          <QuoteContainer>
            <QuoteText $visible={isVisible}>
              "{quotes[currentQuote]}"
            </QuoteText>
          </QuoteContainer>
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-5px); }
`;

const QuoteContainer = styled.blockquote`
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  border-left: 3px solid ${({ theme }) => theme.colors.helper};
  min-height: 3rem;
`;

const QuoteText = styled.span`
  display: block;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  line-height: 1.5rem;
  animation: ${({ $visible }) => $visible ? fadeIn : fadeOut} 0.3s ease forwards;
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

  .current-project {
    margin-top: 2rem;
    
    p {
      color: ${({ theme }) => theme.colors.body};
    }

    .highlight {
      color: #ffe066;
    }
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
  }
`;

export default Home;
