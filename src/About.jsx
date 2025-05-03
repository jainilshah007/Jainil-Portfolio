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
          My journey into development started with a simple curiosity about how things work behind the scenes, and it quickly grew into a passion. I love solving problems, building creative solutions, and constantly learning. The thrill of turning ideas into real, impactful projects is what drives me every day.For me, being a developer is more than just a job it’s a journey of growth and discovery. I’m excited by the challenges, the learning, and the opportunity to make a difference with the work I do.<br/><br/>
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
