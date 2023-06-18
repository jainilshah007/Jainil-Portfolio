import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'


const Footer = () => {
 
  return (
   
      
    <Wrapper>
    <Contact/>
    
    <div>
      <div className="links_line">
      <div className="text">• Made with
      <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React.js</Link></div>
      <div className="text"> • View source on
       <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferrer"> Github</Link></div>
       <div className="text">• Find me on 
        <Link href="twitter.com/jainils007" target="_blank" rel="noopener noreferrer"> Twitter</Link></div>
      </div>
      <div className="last_line">
      <br/>I hope you have a very nice day :)</div>
    </div>
    </Wrapper>
  )
}

const Link = styled.a`
  color:${({ theme }) => theme.colors.helper} ;
  margin-right: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  margin-left: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }`

 const Wrapper=styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  
  align-items: center;
  
  .links_line{
    display:flex;
    font-size: 1.125rem;
    font-weight:400;
    
}
  .last_line{
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content:center;
   align-items: center;
    font-size: 1.125rem;
    font-weight:400;
  }
  .text{display:flex;
    
  }
.last_line{margin-bottom:0.625rem;}
@media screen and (max-width: 768px) {

  .links_line{display:flex;
    flex-direction:column;
    width:50vw;
    
    margin-left:auto;
    margin-right:auto;
    
   
  }
  .text{
    width:70vw;
    flex-wrap: wrap;
   }
    
  `

export default Footer