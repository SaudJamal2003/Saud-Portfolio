// components/ExperienceCard.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from '../style/ExperienceCard.module.css';

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.logoContainer}>
          <Image 
            src={experience.logo} 
            alt={`${experience.company} logo`} 
            width={50} 
            height={50} 
            className={styles.logo}
          />
        </div>
        <div className={styles.companyInfo}>
          <h2 className={styles.company}>{experience.company}</h2>
          <h3 className={styles.position}>{experience.position}</h3>
          <div className={styles.metaInfo}>
            {experience.location && (
              <span className={styles.location}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {experience.location}
              </span>
            )}
            <span className={styles.duration}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>
        <button className={styles.expandButton} onClick={toggleExpand}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`${styles.expandIcon} ${expanded ? styles.expanded : ''}`}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      
      <div className={`${styles.cardContent} ${expanded ? styles.expanded : ''}`}>
        <ul className={styles.descriptionList}>
          {experience.description.map((item, index) => (
            <li key={index} className={styles.descriptionItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;