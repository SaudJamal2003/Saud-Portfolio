// pages/projects.tsx
'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../../style/Projects.module.css';

interface Project {
  id: number;
  title: string;
  type: string;
  timeframe: string;
  description: string;
  logo: string;
  link?: string;
  technologies: string[];
}

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded)

  // Set isLoaded to true after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "PredictEd – AI-Powered Exam Preparation Platform",
      type: "Full Stack Web Application",
      timeframe: "August - Present, 2024-2025",
      description: "Developed an AI-based platform that generates Cambridge-style exams, simulates timed tests, auto-assesses results, and provides performance analytics along with parental tracking.",
      logo: "/assets/projects/predicted.png",
      link: "",
      technologies: ["react", "nodejs", "express", "mysql", "figma", "openai"]
    },
    {
      id: 2,
      title: "Cafe Street",
      type: "Static Frontend Website",
      timeframe: "August 2024",
      description: "Developed a visually appealing static portfolio website demonstrating responsive design, modern layouts, and interactive UI components to highlight web development capabilities.",
      logo: "/assets/projects/cafe.png",
      link: "https://cafe-street-murex.vercel.app/",
      technologies: ["react","javascript", "css"]
    },
    {
      id: 3,
      title: "Go-To-Store",
      type: "Fullstack E-commerce Website",
      timeframe: "August 2024",
      description: "Built a fullstack e-commerce platform with Sanity CMS as backend, featuring product management, shopping cart functionality, user authentication, and responsive design for a smooth shopping experience.",
      logo: "/assets/projects/gotoStore.ico",
      link: "https://your-goto-store.vercel.app/",
      technologies: ["nextjs","css", "sanity", "nodejs"]
    },
    {
      id: 4,
      title: "Panaverse DAO Mock",
      type: "Static Frontend Website",
      timeframe: "August 2024",
      description: "Created a static landing page replicating the Panaverse DAO website layout, focusing on clean UI design, responsive structure, and smooth navigation to showcase frontend development skills.",
      logo: "/assets/projects/panaverse.ico",
      link: "https://panaverse-dao-pq7g.vercel.app/",
      technologies: ["nextjs", "css"]
    },
    {
      id: 5,
      title: "Simax Landing Page",
      type: "Static Frontend Website",
      timeframe: "August 2024",
      description: "Designed and developed a modern static landing page for Simax, incorporating smooth scroll effects, engaging sections, and a professional layout to present key business information attractively.",
      logo: "/assets/projects/simax.ico",
      link: "https://simax-landing-page-8h6s.vercel.app/",
      technologies: ["react","javascript", "css", "bootstrap"]
    },
    {
      id: 6,
      title: "Helping Hands",
      type: "Full Stack Web Application",
      timeframe: "January - April, 2024",
      description: "Built a donation and volunteer management platform for charity foundations with user dashboards, donation tracking, and an AI chatbot to guide users through features and services.",
      logo: "/assets/projects/helpinghands.svg",
      link: "",
      technologies: ["react", "nodejs", "express", "mysql", "figma", "gemini"]
    },  
    {
      id: 7,
      title: "EquaSolve",
      type: "AI-Powered Math Tool",
      timeframe: "August - September, 2024",
      description: "Created an AI-driven math tool that solves complex algebraic, trigonometric, and graphical problems in real-time, featuring visual representations and intuitive equation inputs.",
      logo: "/assets/projects/equasolve.svg",
      link: "",
      technologies: ["react", "nodejs", "python", "gemini", "pinecone"]
    },
    {
      id: 8,
      title: "Vector Space Model",
      type: "Information Retrieval System",
      timeframe: "March 2024",
      description: "Implemented a text-based information retrieval system using TF-IDF weighting and cosine similarity to compute document relevance.",
      logo: "/assets/projects/vsm.svg",
      link: "",
      technologies: ["python"]
    },
    {
      id: 9,
      title: "Sentiment Analyzer",
      type: "NLP Application",
      timeframe: "February 2024",
      description: "Developed and compared three different models for sentiment analysis, evaluating their performance on various datasets.",
      logo: "/assets/projects/sentiment.svg",
      link: "",
      technologies: ["python"]
    },
      
  ];
  
  // Technology icon mapping
  const technologyIcons: Record<string, string> = {
    nextjs: "/assets/skills/nextjs.svg",
    javascript: "/assets/skills/javascript-svgrepo-com.svg", 
    firebase: "/assets/skills/firbase.svg",
    react: "/assets/skills/reactjs-svgrepo-com.svg",
    python: "/assets/skills/python-svgrepo-com.svg",
    gemini: "/assets/skills/googlegemini.svg", 
    nodejs: "/assets/skills/nodejs.svg",
    express: "/assets/skills/expressjs.png",
    mysql: "/assets/skills/mysql.svg",
    openai: "/assets/skills/openai.svg",
    html: "/assets/skills/html-5-svgrepo-com.svg",
    css: "/assets/skills/css-3-svgrepo-com.svg",
    bootstrap: "/assets/skills/bootstarp.png",
    figma: "/assets/skills/figma.svg",
    pinecone: "/assets/skills/pinecone.png",
    sanity: "/assets/skills/sanity.svg"
  };
  

  return (
    <div className={styles.container}>      
      <main className={styles.main}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard} tabIndex={0}>
              <div className={styles.cardContent}>
                <div className={styles.logoAndTitle}>
                  <div className={styles.logoContainer}>
                    <Image 
                      src={project.logo} 
                      alt={`${project.title} logo`} 
                      width={60} 
                      height={60}
                      className={styles.logo}
                    />
                  </div>
                  <h2 className={styles.projectTitle}>
                    {project.title}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.externalLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.externalLinkIcon}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </h2>
                </div>
                
                <div className={styles.metaInfo}>
                  <div className={styles.projectType}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    </svg>
                    <span>{project.type}</span>
                  </div>
                  <div className={styles.projectDate}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{project.timeframe}</span>
                  </div>
                </div>
                
                <div className={styles.description}>
                  {project.description}
                </div>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <div key={tech} className={styles.techIcon}>
                      <Image 
                        src={technologyIcons[tech]} 
                        alt={tech} 
                        width={24} 
                        height={24}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}