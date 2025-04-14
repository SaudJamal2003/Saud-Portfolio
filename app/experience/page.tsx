// pages/experience.tsx
'use client'
import Image from 'next/image';
import styles from '../../style/Experience.module.css';
import { useState, useEffect } from 'react';

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
}

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Set isLoaded to true after component mounts to trigger animations
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const experiences: Experience[] = [
        {
          id: 1,
          company: "EMPIRIC TECHNOLOGY",
          position: "Trainee Full stack Software Engineer",
          location: "Karachi, Pakistan",
          startDate: "January 2025",
          endDate: "Present",
          description:
            "Developed the company's website using Next.js for a fast, modern, and scalable frontend. Utilized Strapi CMS for efficient content management and seamless frontend integration. Building an AI-powered sales agent using Gemini API and Retrieval-Augmented Generation (RAG) to enhance customer interactions. Led full-stack feature development from concept to deployment, collaborating with designers and backend engineers.",
          logo: "/assets/experience/empiric.png"
        },
        {
          id: 2,
          company: "KNYSYS",
          position: "Software Engineering Internship",
          location: "Karachi, Pakistan",
          startDate: "November 2024",
          endDate: "December 2024",
          description:
            "Collaborated with the development team to identify, debug, and resolve issues in existing projects using Python and the Odoo framework, ensuring smooth functionality and enhanced system reliability. Assisted in developing and improving modules within the Odoo ERP system, contributing to feature enhancements and system customization.",
          logo: "/assets/experience/knysys.jpg"
        },
        {
          id: 3,
          company: "Headstarter",
          position: "Software Engineering Fellowship",
          location: "Remote, USA",
          startDate: "July 2024",
          endDate: "September 2024",
          description:
            "Worked on integrating Gemini API and OpenAI API into multiple projects, including the development of an AI-powered chatbot, AI flashcard system, and payment integration with Stripe. Completed 5 projects in 7 weeks, demonstrating strong technical proficiency and problem-solving skills.",
          logo: "/assets/experience/headstarter.jpg"
        },
        {
          id: 4,
          company: "Educationist (Open Source)",
          position: "Android Application Contributor",
          location: "Remote",
          startDate: "December 2023",
          endDate: "January 2024",
          description:
            "Collaborated on the development and launch of 'Educationist', an Android app that streamlined access to O' level past paper catalogs for students worldwide, enhancing preparation and learning efficiency. Utilized JSON for lightweight data storage and optimized Android integration for improved performance. Leveraged AI capabilities to make math problem-solving faster, more accessible, and interactive.",
          logo: "/assets/experience/educationist.png"
        }
    ];
      
  // Track which card is expanded (for future functionality if needed)
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className={styles.container}>      
      <main className={styles.main}>
        <h1 className={styles.experienceTitle}>Experience</h1>        
        <div className={styles.timelineContainer}>
          <div className={styles.timelineCenterLine}></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`${styles.experienceItem} ${index % 2 === 0 ? styles.leftSide : styles.rightSide}`}
            >
              <div 
                className={styles.card}
                tabIndex={0} // Make the card focusable for keyboard navigation
              >
                <div className={styles.cardContent}>
                  <div className={styles.logoAndTitle}>
                    <div className={styles.logoContainer}>
                      <Image 
                        src={experience.logo} 
                        alt={`${experience.company} logo`} 
                        width={60} 
                        height={60}
                        className={styles.logo}
                      />
                    </div>
                    <div className={styles.titleContainer}>
                      <h2 className={styles.company}>{experience.company}</h2>
                      <h3 className={styles.position}>{experience.position}</h3>
                    </div>
                  </div>
                  
                  <div className={styles.metaInfo}>
                    <div className={styles.location}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{experience.location}</span>
                    </div>
                    <div className={styles.date}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{experience.startDate} - {experience.endDate}</span>
                    </div>
                  </div>
                  
                  <div className={styles.description}>
                    {experience.description}
                  </div>
                </div>
              </div>
              
              <div className={styles.timelineNode}>
                <button 
                  className={styles.expandButton}
                  onClick={() => toggleExpand(experience.id)}
                  aria-label={expandedCard === experience.id ? "Collapse details" : "Expand details"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}