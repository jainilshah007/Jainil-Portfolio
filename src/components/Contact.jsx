import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
    padding: 2rem 1rem;

    .text_contact {
      text-align: center;
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color:RGB(147, 112, 219);
    }

    .container {
      display: flex;
      justify-content: center;
    }

    .contact-form {
      width: 100%;
      max-width: 500px;
      padding: 1.5rem 2rem;
      border: 1px solid #e0e0e0;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type='text'],
        input[type='email'],
        textarea {
          font-size: 1rem;
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          transition: border-color 0.3s ease;

          &:focus {
            border-color: #5856d6;
            outline: none;
          }
        }

        textarea::placeholder {
          color: #aaa;
        }

        input[type='submit'] {
          margin-top: 0.5rem;
          padding: 0.7rem 1rem;
          background-color: #5856d6;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.3s ease;

          &:hover {
            background-color: #4744c1;
            transform: scale(0.97);
          }
        }
      }
    }

    @media (max-width: 600px) {
      .contact-form {
        padding: 1rem;
      }

      .text_contact {
        font-size: 1.5rem;
      }
    }
  `;

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
              rows="5"
              autoComplete="off"
              required
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
