import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin, FaSpotify } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import Contact from './Contact'

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <div className="footer-content">
        <div className="social-icons">
          <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
          <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link href="https://www.linkedin.com/in/jainil-shah07/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jainilcrshah@gmail.com" target="_blank" rel="noopener noreferrer"><IoMdMail /></Link>
          <Link href="https://open.spotify.com/user/31owygju4vhxswzvsgqbjbsce5wq" target="_blank" rel="noopener noreferrer"><FaSpotify /></Link>
        </div>
        <div className="links_line">
          <span className="text">Made with <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</Link></span>
          <span className="divider">•</span>
          <span className="text">Source on <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferrer">Github</Link></span>
        </div>
        <div className="last_line">
          I hope you have a very nice day ❤️
        </div>
      </div>
    </Wrapper>
  )
}

const Link = styled.a`
  color: ${({ theme }) => theme.colors.helper};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.5rem;
  }

  .social-icons {
    display: flex;
    gap: 1.25rem;
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
  }

  .links_line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0.75rem;
  }

  .divider {
    color: rgba(255, 255, 255, 0.3);
  }

  .last_line {
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 768px) {
    .links_line {
      flex-direction: column;
      gap: 0.5rem;
    }

    .divider {
      display: none;
    }
  }
`

export default Footer
