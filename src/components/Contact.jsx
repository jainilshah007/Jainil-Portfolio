import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="text_contact">Contact Me</h2>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mgebgzdq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              autoComplete="off"
              required
            />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1rem;

  .text_contact {
    text-align: center;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .contact-form {
    width: 100%;
    max-width: 420px;
    padding: 1.5rem;
    background: linear-gradient(145deg, rgba(30, 30, 40, 0.9), rgba(20, 20, 30, 0.95));
    border: 1px solid rgba(147, 112, 219, 0.3);
    border-radius: 0.5rem;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;

      input[type='text'],
      input[type='email'],
      textarea {
        font-family: inherit;
        font-size: 0.95rem;
        padding: 0.65rem 0.875rem;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(147, 112, 219, 0.2);
        border-radius: 0.25rem;
        color: #1a1a2e;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;

        &::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }

        &:focus {
          border-color: ${({ theme }) => theme.colors.helper};
          box-shadow: 0 0 0 2px rgba(147, 112, 219, 0.1);
          outline: none;
        }
      }

      textarea {
        resize: none;
      }

      input[type='submit'] {
        margin-top: 0.25rem;
        padding: 0.65rem 1rem;
        background: ${({ theme }) => theme.colors.helper};
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: opacity 0.2s ease, transform 0.2s ease;

        &:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0;

    .container {
      width: 90vw;
      margin: 0 auto;
    }

    .contact-form {
      max-width: 100%;
    }
  }
`;

export default Contact;
