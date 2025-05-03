import React from 'react';
import styled from 'styled-components';
import useScrollToTop from './hooks/useScrollToTop';

const Projects = () => {
  useScrollToTop();

  return (
    <Wrapper>
      <div className="main_line">
        <p>/projects</p>
      </div>

      <div className="Main_content">
        <section className="section">
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Languages:</strong> Java, Python, JavaScript, HTML/CSS</li>
            <li><strong>Frameworks:</strong> Django, React.js, Next.js, Angular, LangChain</li>
            <li><strong>Gen AI:</strong> RAG, OpenAI API, Hugging Face, MCP</li>
            <li><strong>Cloud:</strong> Azure, Docker, Kubernetes</li>
            <li><strong>Multi-Agent Systems:</strong> Crew AI, Browser-Use, LangGraph</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>
            <li><strong>Soft Skills:</strong> Problem Solving, Self-learning, Presentation, Adaptability</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>

          <ProjectCard>
            <h3>QBP (Quality Blue Print) Accelerator – GenAI Tool</h3>
            <p>
              • Built a Generative AI app leveraging LangChain and RAG for automated requirement analysis.<br />
              • Integrated OpenAI APIs, vector DBs, and Hugging Face models.<br />
              • Developed REST APIs and scalable Python backend with LangChain agents.
            </p>
            <ul>
              <li><strong>Tech Stack:</strong> Python, LangChain, OpenAI API, Hugging Face, Vector DB, FastAPI</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/yourusername/qbp-genai-tool" target="_blank" rel="noopener noreferrer">github.com/yourusername/qbp-genai-tool</a></li>
            </ul>
          </ProjectCard>

          <ProjectCard>
            <h3>Chat Context Manager with MCP</h3>
            <p>
              • Created FastMCP for context memory handling using summaries.<br />
              • Enables persistent context sharing across LLMs, even with model switching.<br />
              • Supports integration with MCP hosts like Cursor.
            </p>
            <ul>
              <li><strong>Tech Stack:</strong> Python, MCP, FastAPI, LangChain, Redis, OpenAI API</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/yourusername/chat-context-mcp" target="_blank" rel="noopener noreferrer">github.com/yourusername/chat-context-mcp</a></li>
            </ul>
          </ProjectCard>

          <ProjectCard>
            <h3>Stock Market Analysis using Multi-Agent System</h3>
            <p>
              • Developed with AutoGen 0.4, Azure AI Agent Service, and Bing Search.<br />
              • Four-agent system: stock fetching, news analysis, sentiment evaluation, investment suggestion.<br />
              • Real-time financial data analysis using LLM agents.
            </p>
            <ul>
              <li><strong>Tech Stack:</strong> Python, AutoGen, Azure AI, LangChain, LLM Agents, Bing Search API</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/yourusername/stock-agent-system" target="_blank" rel="noopener noreferrer">github.com/yourusername/stock-agent-system</a></li>
            </ul>
          </ProjectCard>
        </section>

        <section className="section">
          <h2>Experience – Capgemini (Mar 2024 - Present)</h2>
          <p>
            • Built full-stack apps with Django & Angular.<br />
            • Integrated GenAI using LangChain + RAG with OpenAI & Hugging Face APIs.<br />
            • Deployed using Azure, Docker, Kubernetes.<br />
            • Developed REST APIs and database logic with MySQL & Django ORM.<br />
            • Setup SonarQube for CI-based code quality monitoring.
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main_line {
    display: flex;
    justify-content: center;
    font-size: 5.62rem;
    margin-top: 50px;
  }

  .Main_content {
    width: 50vw;
    margin: 50px auto;
    font-size: 1.125rem;
    line-height: 1.8rem;
    font-weight: 400;
  }

  .section {
    margin-bottom: 3rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  h2 {
    margin-bottom: 1rem;
    color: #5856d6;
  }

  h3 {
    color: #212631;
  }

  @media screen and (max-width: 768px) {
    .Main_content {
      width: 90vw;
    }

    .main_line {
      font-size: 3.5rem;
    }
  }
`;

const ProjectCard = styled.div`
  background-color: #f3f4f7;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(88, 86, 214, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
  }

  p {
    margin: 0;
    color:rgb(5, 5, 5);
  }

  ul {
    margin-top: 1rem;
    padding-left: 20px;
    color:rgb(5, 5, 5);
  }

  li {
    margin-bottom: 0.5rem;
    
  }

  a {
    color:rgb(23, 57, 92);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Projects;
