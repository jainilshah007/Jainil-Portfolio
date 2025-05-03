import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <div className="footer-content">
        <div className="links_line">
          <div className="text">• Made with
            <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React.js</Link>
          </div>
          <div className="text">• View source on
            <Link href="https://github.com/jainils007" target="_blank" rel="noopener noreferrer"> Github</Link>
          </div>
          <div className="text">• Find me on 
            <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferrer"> Twitter</Link>
          </div>
        </div>
        <div className="last_line">
          <br />I hope you have a very nice day :)
        </div>
      </div>
    </Wrapper>
  )
}

const Link = styled.a`
  color: ${({ theme }) => theme.colors.helper};
  margin: 0 0.5rem;
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
  }

  .links_line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.125rem;
    font-weight: 400;
    gap: 0.5rem;
    text-align: center;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .last_line {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }

  @media screen and (max-width: 768px) {
    .links_line {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`

export default Footer
