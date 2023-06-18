import React from 'react';
import styled from 'styled-components';
import useScrollToTop from './hooks/useScrollToTop';


const Home = () => {
  useScrollToTop();
  
  return (
    <Wrapper>
     
      <div className="home-main">
        <h1 className="hey">Hey, I'm Jainil! 👋</h1>
        <div className="Main_content">
          <p>
            As a recent graduate working{' '}
            <Link href="https://www.upwork.com/freelancers/~014a5b3b95e9f6d36b?qpn-profile-completeness=employment" target="_blank" rel="noopener noreferrer">
              Remotely
            </Link>, I'm immersed in the captivating world of{' '}
            <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              React
            </Link> and{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              JavaScript
            </Link>. Lately, I've been exploring the art of{' '}
            <Link href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
              CSS
            </Link>/<Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              Tailwind
            </Link> and deepening my JavaScript expertise. Python and C++ have also piqued my interest, with forays into Machine Learning concepts.
            <br/><br/>
            Design and development are my twin passions, and I eagerly contribute whenever I can. And for Designs,{' '}
            <Link href="https://www.figma.com/community" target="_blank" rel="noopener noreferrer">
              Figma
            </Link> is my go-to companion! Apart from coding, I enjoy playing{' '}
            <Link href="https://www.realmadrid.com/en" target="_blank" rel="noopener noreferrer">
              Football
            </Link>, watching sports, and occasionally indulging in the thrill of NFS: Most Wanted.
            <br/><br/>
            This website is my cherished labor of love. Although it may appear simple, I've had a blast over-engineering it. While it doesn't need all the bells and whistles, I've had genuine fun building them anyway.
          </p>
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
    width: 80vw;
    font-size: 2.81rem;
    line-height: 4.21rem;
    vertical-align: baseline;
    line-height: 4.21rem;
    font-weight: 700;
    text-indent: 0;
    flex-wrap: wrap;
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

  @media screen and (max-width: 768px) {
    /* Media query for screens with a maximum width of 768px */
    .home-main {
      margin-left: 0.1rem;
      overflow-x: hidden;
    }

    .hey {
      width: 80vw;
      text-align: start;
      font-size: 2.81rem;
      line-height: 4.21rem;
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
