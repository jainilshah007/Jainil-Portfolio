import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop'

const About = () => {
  useScrollToTop();
  return (
    <Wrapper>
      <div className="main_line">
        <p>/about</p>
      </div>
      <div className="Main_content">
        <p>
          I'm someone who gets genuinely excited when things click—when a model finally learns something useful,
          or when an idea that felt abstract starts working in code.
          <br /><br />
          My interest in AI started with the{' '}
          <Link href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">
            "Attention is All You Need"
          </Link>{' '}
          paper. Reading it changed how I think about language, context, and machines.
          It made me want to understand transformers not just as tools, but as ideas worth exploring deeply.
          <br /><br />
          Lately, I've been spending time at the intersection of{' '}
          <Link>AI</Link> and{' '}
          <Link>Web3</Link>—building things like{' '}
          <Link href="https://github.com/jainilshah007/BlockAudit" target="_blank" rel="noopener noreferrer">
            RAG-based contract analysis
          </Link>,{' '}
          <Link href="https://github.com/jainilshah007/finetune-on-solidity" target="_blank" rel="noopener noreferrer">
            fine-tuning models on Solidity
          </Link>, and{' '}
          <Link href="https://github.com/jainilshah007/EIP-Navigator" target="_blank" rel="noopener noreferrer">
            multi-agent systems for Ethereum standards
          </Link>.
          Not because I have all the answers, but because I find the problems interesting.
          <br /><br />
          I'm self-taught in most of what I do. I have a degree in Electronics from{' '}
          <Link href="https://www.bvmengineering.ac.in/" target="_blank" rel="noopener noreferrer">
            BVM, Vidhyanagar
          </Link>, but computers pulled me in a different direction. The first time I saw Google in 8th grade,
          something shifted. I've been curious ever since.
          <br /><br />
          Currently working at{' '}
          <Link>Capgemini</Link>{' '}
          as an Analyst, building full-stack apps and integrating AI into real workflows.
          It's taught me that production is where ideas get tested—and humbled.
          <br /><br />
          Outside work, I watch a lot of{' '}
          <NavLink className="navbar-link" to="/movies">movies</NavLink>,
          follow football (Hala Madrid), and occasionally overthink things.
          <br /><br />
          If any of this resonates, feel free to reach out.
        </p>
        <div className="icons">
          <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
          <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link href="https://www.linkedin.com/in/jainil-shah07/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jainilcrshah@gmail.com" target="_blank" rel="noopener noreferrer"><IoMdMail /></Link>
          <Link href="https://open.spotify.com/user/31owygju4vhxswzvsgqbjbsce5wq" target="_blank" rel="noopener noreferrer"><FaSpotify /></Link>
        </div>
        <div className="resume">
          Resumes: <Link href="https://drive.google.com/file/d/12Uy3X-ze3dE86HpC-ucNiTN0FjXhtCJ4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">[AI]</Link> · <Link href="https://drive.google.com/file/d/1iX856RCpwrDg2Z5W7xC2Aun0tBZ2Ewf9/view?usp=sharing" target="_blank" rel="noopener noreferrer">[AI × Web3]</Link>
        </div>

        <div className="more-section">
          <h3>More about me</h3>
          <div className="tabs">
            <NavLink to="/uses" className="tab">Uses</NavLink>
            <NavLink to="/photographs" className="tab">Photographs</NavLink>
            <NavLink to="/poems" className="tab">Poems</NavLink>
            <NavLink to="/movies" className="tab">Movies</NavLink>
          </div>
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
  .navbar-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.helper};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .icons {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.helper};
    margin-top: 2rem;
    font-size: 1.4rem;
  }

  .resume {
    margin-top: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    text-align: start;
  }

  .more-section {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    h3 {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 1rem;
      text-align: center;
      font-weight: 400;
    }

    .tabs {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }

    .tab {
      color: ${({ theme }) => theme.colors.helper};
      text-decoration: underline;
      font-size: 1rem;
      transition: color 0.2s ease;

      &:hover {
        color: #f5c518;
      }
    }
  }

  .main_line {
    display: flex;
    justify-content: center;
    font-size: 5.62rem;
    margin-top: 50px;
    margin-bottom: 2rem;
  }

  .Main_content {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    text-align: start;
    line-height: 1.7rem;
    font-weight: 400;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    .Main_content {
      width: 90vw;
    }

    .main_line {
      font-size: 3rem;
    }

    .more-section .tabs {
      gap: 0.75rem;
    }

    .more-section .tab {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }
  }
`;

export default About;
