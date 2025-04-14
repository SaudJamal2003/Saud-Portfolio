// pages/education.tsx
'use client'
import Image from 'next/image';
import styles from '../../style/Education.module.css';
import { useState, useEffect } from 'react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  grades: string;
  description: string;
  logo: string;
}

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(isLoaded)

    // Set isLoaded to true after component mounts to trigger animations
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const educations: Education[] = [
        {
          id: 1,
          institution: "FAST NUCES",
          degree: "Bachelor of Computer & Information Systems Engineering",
          location: "Karachi, Pakistan",
          startDate: "September 2021",
          endDate: "Present",
          grades: "CGPA: 3.54/4.0",
          description:
            "Pursued a comprehensive curriculum in computer engineering with a focus on software development, algorithms, data structures, and system design. Participated in coding competitions and database designing, enhancing problem-solving skills and teamwork. Selected for the Dean's Honor List for academic excellence in 2024 and 2025.",
          logo: "/assets/education/fast.png"
        },
        {
          id: 2,
          institution: "National College",
          degree: "Pre-Engineering (Intermediate)",
          location: "Karachi, Pakistan",
          startDate: "August 2019",
          endDate: "June 2021",
          grades: "A+ Grade - 94%",
          description:
            "Completed pre-engineering with distinction in Mathematics, Physics, and Computer Science, securing 94% — the highest in my college, effectively topping the institution. Ranked among the top 10 students in Karachi, and was honored with a scholarship offer from CA authorities in recognition of academic excellence.",
          logo: "/assets/education/nationalcollege.jpg"
        },
        {
          id: 3,
          institution: "Aisha Bawany Academy",
          degree: "O-Levels (Cambridge)",
          location: "Karachi, Pakistan",
          startDate: "August 2004",
          endDate: "July 2019",
          grades: "2As, 5Bs, 1C",
          description:
            "Achieved exceptional grades with A* in Mathematics, Physics, Chemistry, Computer Science, and other subjects. Participated in the school's robotics club and science exhibitions. Selected as a student mentor to assist peers with programming concepts and mathematics.",
          logo: "/assets/education/aba.jpg"
        },
    ];
      
  // Track which card is expanded (for future functionality if needed)
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className={styles.container}>      
      <main className={styles.main}>
        <h1 className={styles.educationTitle}>Education</h1>        
        <div className={styles.timelineContainer}>
          <div className={styles.timelineCenterLine}></div>
          
          {educations.map((education, index) => (
            <div 
              key={education.id} 
              className={`${styles.educationItem} ${index % 2 === 0 ? styles.leftSide : styles.rightSide}`}
            >
              <div 
                className={styles.card}
                tabIndex={0} // Make the card focusable for keyboard navigation
              >
                <div className={styles.cardContent}>
                  <div className={styles.logoAndTitle}>
                    <div className={styles.logoContainer}>
                      <Image 
                        src={education.logo} 
                        alt={`${education.institution} logo`} 
                        width={60} 
                        height={60}
                        className={styles.logo}
                      />
                    </div>
                    <div className={styles.titleContainer}>
                      <h2 className={styles.institution}>{education.institution}</h2>
                      <h3 className={styles.degree}>{education.degree}</h3>
                    </div>
                  </div>
                  
                  <div className={styles.metaInfo}>
                    <div className={styles.location}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{education.location}</span>
                    </div>
                    <div className={styles.date}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{education.startDate} - {education.endDate}</span>
                    </div>
                    <div className={styles.grades}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{education.grades}</span>
                    </div>
                  </div>
                  
                  <div className={styles.description}>
                    {education.description}
                  </div>
                </div>
              </div>
              
              <div className={styles.timelineNode}>
                <button 
                  className={styles.expandButton}
                  onClick={() => toggleExpand(education.id)}
                  aria-label={expandedCard === education.id ? "Collapse details" : "Expand details"}
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