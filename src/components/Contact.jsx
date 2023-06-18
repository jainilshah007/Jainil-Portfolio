import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
    padding: 2rem 0rem 2rem 0;
    
    .text_contact {
      text-align: center;
    }
    
    .container {
      margin-top: 1rem;
      text-align: center;
      
      .contact-form {
        max-width: 50rem;
        
        
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input[type='text'],
          textarea {
            padding: 0.15rem;
          }
          
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.5s;
            margin: 0 auto;
            width:7rem;
            padding:0.30rem;
            textarea::placeholder
             {
              
              padding: 0rem;
              line-height: 1;
              color: #999;}
              
            
            &:hover {
              background-color: rgb(147, 112, 219);
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
              color: white;
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="text_contact">
        <p>Contact Me!!</p>
      </h2>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mgebgzdq" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              required
             
            />
            <textarea
              name="message"
              placeholder="Your Message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
