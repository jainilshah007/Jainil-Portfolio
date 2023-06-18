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
          Hey there! I'm a recent graduate, currently working as a front-end developer remotely. Guess what? I've just finished working on a fantastic hospital website using React. If you're curious, you can check it out <Link href="https://sudeepent.netlify.app/" target="_blank" rel="noopener noreferrer">[here]</Link>.<br/><br/>
          I absolutely love diving into the world of <Link href="https://react.dev/">React</Link> and tinkering with all things <Link href="https://www.w3schools.com/css/">CSS</Link>, including <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</Link> and <Link href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</Link>. In my journey as a developer, I've had the opportunity to work with various languages like <Link href="https://www.python.org/">Python</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link>, <Link href="https://example.com">C</Link>, and <Link href="https://example.com">C++</Link>. Oh, and let's not forget my passion for design! Whenever I need to bring my creative ideas to life, I turn to <Link href="https://www.figma.com/community">Figma</Link>, my trusty companion.<br/><br/>
          My path to becoming a developer has been a unique one. I'm actually self-taught, but I do hold a degree in Electronics and Engineering from Birla Vishvakrama Mahavidhyalaya <Link href="https://www.bvmengineering.ac.in/" target="_blank" rel="noopener noreferrer">(BVM, Vidhyanagar)</Link>. Computers and the internet have fascinated me since I first laid eyes on Google back in 8th grade. That was a mind-blowing experience!<br/><br/>
          In the past, Python has been my go-to language, and I've even worked on some exciting projects in the realm of <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferrer">Data science</Link>. By the way, I also had the honor of being a Lead in my college's <Link href="https://example.com" target="_blank" rel="noopener noreferrer">Technical Club</Link>, which allowed me to sharpen my leadership skills.<br/><br/>
          Outside the world of programming, there's a side of me that's deeply passionate about sports, particularly <Link href="https://example.com">Football</Link>. I proudly wear the badge of a Pro Madridista and genuinely admire the beauty of sports in general. And let's not forget my love for  <NavLink className="navbar-link" to="/movies" > [Movies!]</NavLink> From timeless classics to Bollywood masala, I can't resist the allure of a good film.<br/><br/>
          You can check me out on the following platforms:
        </p>
        <div className="icons">
        <Link href="https://github.com/jainilshah007" target="_blank" rel="noopener noreferre"> <FaGithub /></Link>
        <Link href="https://twitter.com/jainils007" target="_blank" rel="noopener noreferre"> <FaTwitter /></Link>
        <Link href="https://www.linkedin.com/in/jainil-shah07/" target="_blank" rel="noopener noreferre"> <FaLinkedin /></Link>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jainilcrshah@gmail.com" target="_blank" rel="noopener noreferre"> <IoMdMail /></Link> 
          <Link href="https://open.spotify.com/user/31owygju4vhxswzvsgqbjbsce5wq?si=iPcuPG3VSWG27kSXTA9kiw&utm_source=copy-link" target="_blank" rel="noopener noreferre"><FaSpotify /></Link>
        </div>
        <div className="resume">
          If you're interested, you can take a look at my <Link href="https://drive.google.com/file/d/1GYVd9ai2-wyxEJFhfDmXT2_-BzTljZpC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">[resume]</Link> — and if you're still intrigued, thanks! You can reach out to me at Jainil.
        </div>
      </div>
    </Wrapper>
  );
};

const Link = styled.a`
  color: RGB(147, 112, 219);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.section`
  .body_content {
    font-size: 27px;
    width: 50vw;
    text-align: start;
    margin-top: 5rem;
    line-height: 2.7rem;
    vertical-align: baseline;
    font-weight: 400;
    margin-right: 436px;
  }
.navbar-link{
  text-decoration: none;
  color: RGB(147, 112, 219);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
  .icons {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.helper};
    margin-top: 20px;
  }

  .resume {
    margin-top: 20px;
  }

  .main_line {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    font-size: 5.62rem;
    text-align: center;
    margin-top: 50px;
    transition: color 5s linear;
  }

  .Main_content {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    text-align: start;
    margin-top: 50px;
    line-height: 27px;
    vertical-align: baseline;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .Main_content {
      overflow-x: hidden;
      text-align: start;
      vertical-align: baseline;
      width: 90vw;
    }

    .main_line {
      width: 90vw;
    }
  }
`;

export default About;
