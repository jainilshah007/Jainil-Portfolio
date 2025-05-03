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
            Lately, I’ve been deep in the world of{' '}
            <Link href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">
              AI
            </Link> chasing ideas, breaking things, fixing them, and getting way too excited when something finally works.
            I started exploring how machines can understand{' '}
            <Link href="https://en.wikipedia.org/wiki/Document" target="_blank" rel="noopener noreferrer">
              documents
            </Link>, make sense of context, and even help people make better decisions.
            That curiosity pulled me into building tools that think a little, remember a little, and (sometimes) surprise me.
            <br/><br/>
            Apart from coding, I enjoy playing{' '}
            <Link href="https://www.realmadrid.com/en" target="_blank" rel="noopener noreferrer">
              Football
            </Link>, watching sports, and occasionally indulging in the thrill of{' '}
            <Link href="https://en.wikipedia.org/wiki/Need_for_Speed:_Most_Wanted_(2005_video_game)" target="_blank" rel="noopener noreferrer">
              NFS: Most Wanted
            </Link>.
            <br/><br/>
            This website is my cherished labor of love. Although it may appear simple, I've had a blast{' '}
            <Link href="https://en.wikipedia.org/wiki/Overengineering" target="_blank" rel="noopener noreferrer">
              over-engineering
            </Link> it. 
            While it doesn't need all the bells and whistles, I've had genuine fun building them anyway.
            <br/><br/>
            I dream of building something bigger someday maybe a product, maybe a company. 
            For now, I’m just following the spark, one experiment at a time.
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
      font-size: 2.5rem;
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
