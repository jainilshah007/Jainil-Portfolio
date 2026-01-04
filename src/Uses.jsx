import React from 'react';
import styled, { keyframes } from 'styled-components';
import useScrollToTop from './hooks/useScrollToTop'

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

const Uses = () => {
  useScrollToTop();

  const categories = [
    {
      title: "Editor & Tools",
      items: [
        { name: "VS Code", desc: "Primary editor with Vim bindings" },
        { name: "Antigravity", desc: "AI-powered coding by Google" },
        { name: "Claude 4.5 Sonnet", desc: "AI pair programming" },
      ]
    },
    {
      title: "AI / ML Stack",
      items: [
        { name: "Python", desc: "Primary language for AI work" },
        { name: "PyTorch", desc: "Deep learning framework" },
        { name: "Hugging Face", desc: "Models & datasets" },
        { name: "LangChain", desc: "LLM application framework" },
        { name: "FAISS", desc: "Vector similarity search" },
      ]
    },
    {
      title: "Web Stack",
      items: [
        { name: "React / Next.js", desc: "Frontend framework" },
        { name: "Django / FastAPI", desc: "Backend APIs" },
        { name: "Docker", desc: "Containerization" },
        { name: "Vercel", desc: "Deployment" },
      ]
    },
    {
      title: "Hardware",
      items: [
        { name: "MacBook Air M4", desc: "Primary machine" },
        { name: "Samsung S23", desc: "Phone" },
        { name: "OnePlus Nord Buds 3", desc: "Wireless earphones" },
      ]
    },
    {
      title: "Apps",
      items: [
        { name: "Brave", desc: "Browser of choice" },
        { name: "YouTube Music", desc: "Music while coding" },
        { name: "Discord", desc: "Communities" },
        { name: "Lightroom", desc: "Photo editing" },
      ]
    }
  ];

  return (
    <Wrapper>
      <div className="main_line">
        <p><ChameleonText>/uses</ChameleonText></p>
      </div>
      <div className="Main_content">
        <p className="intro">
          Tools, hardware, and software I use daily for development and beyond.
        </p>

        {categories.map((category, idx) => (
          <div className="category" key={idx}>
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-desc">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main_line {
    display: flex;
    justify-content: center;
    font-size: 5.62rem;
    margin-top: 50px;
    margin-bottom: 2rem;
  }

  .Main_content {
    width: 50vw;
    margin: 0 auto;
    padding-bottom: 4rem;
  }

  .intro {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  .category {
    margin-bottom: 2.5rem;

    h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.helper};
      margin-bottom: 1rem;
      font-weight: 600;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 1rem;

      &:last-child {
        border-bottom: none;
      }
    }

    .item-name {
      color: ${({ theme }) => theme.colors.body};
      font-weight: 500;
      min-width: 180px;
    }

    .item-desc {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 400;
    }
  }

  @media screen and (max-width: 768px) {
    .Main_content {
      width: 90vw;
    }

    .main_line {
      font-size: 3rem;
    }

    .category li {
      flex-direction: column;
      gap: 0.25rem;
    }

    .category .item-name {
      min-width: auto;
    }
  }
`;

export default Uses;
