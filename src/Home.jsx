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
            Recently, I’ve been diving into{' '}
            <Link>
              AI
            </Link>, breaking things, fixing them, and getting excited when stuff works.
            I’m exploring how machines read{' '}
            <Link>
              documents
            </Link>, understand context, and support better decisions.
            It’s led me to build tools that think, remember, and sometimes surprise me.
            <br/><br/>
            {/* Outside tech, I enjoy{' '}
            <Link href="https://www.realmadrid.com/en" target="_blank" rel="noopener noreferrer">
              football
            </Link>, watching games, and the occasional race in{' '}
            <Link href="https://en.wikipedia.org/wiki/Need_for_Speed:_Most_Wanted_(2005_video_game)" target="_blank" rel="noopener noreferrer">
              NFS: Most Wanted
            </Link>.
            <br/><br/> */}
            This site is a little personal project. Someday I hope to build something bigger a product or maybe a company. 
            For now, I’m just experimenting and following the spark.
            {/* I’ve{' '}
            <Link>
              over-engineered
            </Link> for fun. It didn’t need all the extras, but I built them anyway.
            <br/><br/> */}
             
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
    .home-main {
      margin-left: 0.1rem;
      overflow-x: hidden;
    }

    .hey {
      width: 80vw;
      text-align: start;
      font-size: 2.3rem;
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
