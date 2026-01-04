import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useScrollToTop from './hooks/useScrollToTop';

const Projects = () => {
  useScrollToTop();

  const web3Projects = [
    {
      title: "Fine-tuning LLMs for Solidity",
      description: "Fine-tuning a LLaMA-based model to specialize in Solidity smart contract generation. Used LoRA with 4-bit quantization for efficient training under GPU constraints.",
      highlights: [
        "Combined custom Solidity samples with braindao/solidity-base dataset",
        "Trained using SFTTrainer (TRL) with LoRA + 4-bit quantization",
        "Validated by generating ERC-20 contracts aligned with OpenZeppelin v5"
      ],
      tech: ["LLaMA", "LoRA", "QLoRA", "4-bit Quantization", "SFTTrainer"],
      github: "https://github.com/jainilshah007/finetune-on-solidity"
    },
    {
      title: "BlockAudit – RAG-powered Smart Contract Analysis",
      description: "A lightweight RAG-based system for Solidity code analysis. Shows how retrieval + reasoning can make smart contract understanding more practical and extensible.",
      highlights: [
        "Breaks contracts into function-level contexts",
        "Retrieves relevant security knowledge using FAISS",
        "Guides LLM to produce structured, explainable insights"
      ],
      tech: ["Python", "RAG", "FAISS", "Streamlit", "LangChain"],
      github: "https://github.com/jainilshah007/BlockAudit",
      live: "https://blockaudit-jim8visnr7mbuysjxkov47.streamlit.app/"
    },
    {
      title: "EIP Navigator – AI Agents for Ethereum Standards",
      description: "Ethereum standards (EIPs) are dense and interdependent. EIP Navigator uses AI Agents to provide accurate explanations and secure code grounded in live standards.",
      highlights: [
        "Librarian Agent → fetches latest EIPs from GitHub",
        "Engineer Agent → explains or implements the standard",
        "Auditor Agent → reviews output for security issues"
      ],
      tech: ["Python", "Multi-Agent", "OpenAI API", "GitHub API"],
      github: "https://github.com/jainilshah007/EIP-Navigator"
    }
  ];

  const aiProjects = [
    {
      title: "Microservice-Based MultiAgent Orchestration",
      description: "Modular GenAI architecture where multiple AI agents operate over microservices for RAG retrieval, memory management, observability, and guardrails.",
      highlights: [
        "Scalable, maintainable multi-agent workflows",
        "Integrated Mem0 for memory management",
        "Phoenix observability + production-ready guardrails"
      ],
      tech: ["Python", "AutoGen 0.4", "FastAPI", "Mem0", "Phoenix"]
    },
    {
      title: "QBP Accelerator – GenAI Tool",
      description: "Generative AI application for automated requirement analysis. Built a scalable Python backend integrating vector retrieval for seamless context injection.",
      highlights: [
        "Leverages AutoGen and RAG for requirement analysis",
        "Vector retrieval mechanisms for context injection",
        "Production-ready Python backend"
      ],
      tech: ["Python", "AutoGen", "RAG", "Vector DB", "FastAPI"]
    },
    {
      title: "Chat Context Manager with MCP",
      description: "MCP-powered Chat Context Manager using FastMCP to store, retrieve, and share persistent conversation context across different LLMs and MCP hosts.",
      highlights: [
        "Persistent context sharing across LLMs",
        "Works with model switching seamlessly",
        "Integration with MCP hosts like Cursor"
      ],
      tech: ["Python", "FastMCP", "Claude", "Cursor"],
      github: "https://github.com/jainilshah007/mcp_memory_context"
    },
    {
      title: "LLM Fine-Tuning for Custom Data",
      description: "Fine-tuned Llama-2-7b-chat-hf for domain-specific text generation using 4-bit quantization and LoRA for efficient training on Colab.",
      highlights: [
        "4-bit quantization with bitsandbytes",
        "LoRA (PEFT) for parameter-efficient training",
        "Contextually relevant domain-specific responses"
      ],
      tech: ["LLaMA 2", "QLoRA", "PEFT", "bitsandbytes"]
    }
  ];

  return (
    <Wrapper>
      <div className="main_line">
        <p>/projects</p>
      </div>

      <div className="Main_content">
        {/* WEB3 x AI Section */}
        <section className="section">
          <CategoryHeader>
            <span className="category-icon">⛓️</span>
            <h2>WEB3 × AI</h2>
            <span className="category-line"></span>
          </CategoryHeader>
          <p className="category-desc">Building at the intersection of blockchain and artificial intelligence</p>

          <ProjectGrid>
            {web3Projects.map((project, index) => (
              <ProjectCard key={index}>
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo" className="live-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className="description">{project.description}</p>
                <ul className="highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </section>

        {/* AI Section */}
        <section className="section">
          <CategoryHeader>
            <span className="category-icon">🤖</span>
            <h2>AI Projects</h2>
            <span className="category-line"></span>
          </CategoryHeader>
          <p className="category-desc">Multi-agent systems, RAG, and LLM fine-tuning</p>

          <ProjectGrid>
            {aiProjects.map((project, index) => (
              <ProjectCard key={index}>
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo" className="live-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className="description">{project.description}</p>
                <ul className="highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </section>

        {/* Experience Section */}
        <section className="section">
          <CategoryHeader>
            <span className="category-icon">💼</span>
            <h2>Experience</h2>
            <span className="category-line"></span>
          </CategoryHeader>

          <ExperienceCard>
            <div className="exp-header">
              <div className="company-info">
                <h3>Capgemini</h3>
                <span className="role">Senior Analyst</span>
              </div>
              <div className="exp-meta">
                <span className="location">Mumbai</span>
                <span className="duration">Mar 2024 - Present</span>
              </div>
            </div>
            <ul className="exp-highlights">
              <li>Developed and deployed full-stack applications using Django (backend), Angular (frontend), and MySQL, optimizing performance with advanced join queries and Django REST Framework APIs.</li>
              <li>Implemented Generative AI solutions with AutoGen, RAG, OpenAI APIs, Hugging Face models, and vector databases for automated document analysis, summarization, and data retrieval.</li>
              <li>Lead cloud integration and scalable deployments using Azure, Docker and Kubernetes, including containerized SonarQube for continuous code quality analysis.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-tag">Django</span>
              <span className="tech-tag">Angular</span>
              <span className="tech-tag">AutoGen</span>
              <span className="tech-tag">RAG</span>
              <span className="tech-tag">Azure</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
            </div>
          </ExperienceCard>
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
    margin-bottom: 2rem;
  }

  .Main_content {
    width: 50vw;
    margin: 0 auto;
    padding-bottom: 4rem;
  }

  .section {
    margin-bottom: 4rem;
  }

  .category-desc {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .Main_content {
      width: 90vw;
    }

    .main_line {
      font-size: 3rem;
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;

  .category-icon {
    font-size: 1.8rem;
  }

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.helper};
    margin: 0;
  }

  .category-line {
    display: none;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: linear-gradient(145deg, rgba(30, 30, 40, 0.9), rgba(20, 20, 30, 0.95));
  border: 1px solid rgba(147, 112, 219, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(147, 112, 219, 0.5);
    box-shadow: 0 8px 32px rgba(147, 112, 219, 0.15);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
    flex: 1;
    line-height: 1.4;
  }

  .card-links {
    display: flex;
    gap: 0.75rem;
    margin-left: 1rem;

    a {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }

    .live-link {
      font-size: 0.95rem;
    }
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .highlights {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;

    li {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.85rem;
      padding: 0.25rem 0;
      padding-left: 1.2rem;
      position: relative;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }

  .tech-tag {
    background: rgba(147, 112, 219, 0.15);
    color: ${({ theme }) => theme.colors.helper};
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
    border-radius: 0.25rem;
    font-weight: 500;
  }
`;

const ExperienceCard = styled.div`
  background: linear-gradient(145deg, rgba(30, 30, 40, 0.9), rgba(20, 20, 30, 0.95));
  border: 1px solid rgba(147, 112, 219, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .company-info {
    h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      color: #fff;
      margin: 0 0 0.25rem 0;
    }

    .role {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .exp-meta {
    text-align: right;
    
    .location {
      display: block;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    .duration {
      display: block;
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }
  }

  .exp-highlights {
    list-style: none;
    padding: 0;
    margin: 0 0 1.25rem 0;

    li {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.95rem;
      line-height: 1.6;
      padding: 0.4rem 0;
      padding-left: 1.5rem;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.helper};
        font-weight: bold;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: rgba(147, 112, 219, 0.15);
    color: ${({ theme }) => theme.colors.helper};
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
    border-radius: 0.25rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    .exp-header {
      flex-direction: column;
    }

    .exp-meta {
      text-align: left;
    }
  }
`;

export default Projects;
