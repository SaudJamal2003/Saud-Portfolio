// pages/resume.tsx
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../style/Resume.module.css';

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set isLoaded to true after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to handle resume download
  const handleDownload = () => {
    // Replace with your actual resume PDF path
    const resumeLink = '/resume/Saud-Jamal-Resume.pdf';
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Saud_Jamal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.resumeTitle}>Resume</h1>
        
        <div className={styles.resumeActions}>
          <button 
            className={styles.downloadButton}
            onClick={handleDownload}
            aria-label="Download Resume"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </button>
        </div>
        
        <div className={styles.resumePreviewContainer}>
          <div className={styles.previewCard}>
            <div className={styles.resumeSection}>
              <h2 className={styles.sectionTitle}>Professional Summary</h2>
              <div className={styles.sectionContent}>
                <p>
                  Passionate software engineer with experience in full-stack development, specializing in modern JavaScript frameworks, 
                  AI integration, and responsive UI design. Proven ability to deliver high-quality software solutions through 
                  internships and open-source contributions. Currently pursuing a Bachelor's degree in Computer Science.
                </p>
              </div>
            </div>
            
            <div className={styles.resumeSection}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                  <h3>Programming Languages</h3>
                  <div className={styles.skillBadges}>
                    <span className={styles.skillBadge}>JavaScript</span>
                    <span className={styles.skillBadge}>TypeScript</span>
                    <span className={styles.skillBadge}>Python</span>
                    <span className={styles.skillBadge}>Java</span>
                    <span className={styles.skillBadge}>C++</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h3>Frameworks & Libraries</h3>
                  <div className={styles.skillBadges}>
                    <span className={styles.skillBadge}>React</span>
                    <span className={styles.skillBadge}>Next.js</span>
                    <span className={styles.skillBadge}>Node.js</span>
                    <span className={styles.skillBadge}>Express</span>
                    <span className={styles.skillBadge}>Material UI</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h3>Tools & Technologies</h3>
                  <div className={styles.skillBadges}>
                    <span className={styles.skillBadge}>Github Desktop</span>
                    <span className={styles.skillBadge}>Postman</span>
                    <span className={styles.skillBadge}>MySQL Workbench</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.resumeSection}>
              <h2 className={styles.sectionTitle}>Experience Highlights</h2>
              <div className={styles.experienceList}>
                <div className={styles.experienceItem}>
                  <div className={styles.expHeader}>
                    <Image 
                      src="/assets/experience/empiric.png" 
                      alt="Empiric Technology logo" 
                      width={40} 
                      height={40}
                      className={styles.companyLogo}
                    />
                    <div>
                      <h3>Trainee Full stack Software Engineer</h3>
                      <p className={styles.companyName}>Empiric Technology</p>
                      <p className={styles.duration}>January 2025 - Present</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.experienceItem}>
                  <div className={styles.expHeader}>
                    <Image 
                      src="/assets/experience/knysys.jpg" 
                      alt="Knysys logo" 
                      width={40} 
                      height={40}
                      className={styles.companyLogo}
                    />
                    <div>
                      <h3>Software Engineering Internship</h3>
                      <p className={styles.companyName}>KNYSYS</p>
                      <p className={styles.duration}>November 2024 - December 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.resumeSection}>
              <h2 className={styles.sectionTitle}>Education Highlights</h2>
              <div className={styles.educationList}>
                <div className={styles.educationItem}>
                  <div className={styles.eduHeader}>
                    <Image 
                      src="/assets/education/fast.png" 
                      alt="Fast University logo" 
                      width={40} 
                      height={40}
                      className={styles.institutionLogo}
                    />
                    <div>
                      <h3>Bachelor of Computer Science</h3>
                      <p className={styles.institutionName}>FAST NUCES</p>
                      <p className={styles.duration}>August 2021 - Present</p>
                      <p className={styles.grades}>CGPA: 3.54/4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.resumeSection}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <h3>Predict-Ed: Ai powered learing platfomr</h3>
                    <div className={styles.projectTags}>
                      <span className={styles.projectTag}>Reactjs</span>
                      <span className={styles.projectTag}>RAG</span>
                      <span className={styles.projectTag}>Gemin API</span>
                    </div>
                  </div>
                  <p>A learing platform for Cambridge student to prepare for O'levels exams by solving entire papers generated by AI model on Predict-Ed</p>
                </div>
                
                <div className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <h3>Helping hands</h3>
                    <div className={styles.projectTags}>
                      <span className={styles.projectTag}>Reactjs</span>
                      <span className={styles.projectTag}>MySQL</span>
                      <span className={styles.projectTag}>Express.js</span>
                    </div>
                  </div>
                  <p>Full stack website serving as a platform for charitable foundations, enabling online donations, volunteering signups and providing a one stop solution for donators to collaborate with charitable foundations</p>
                </div>
              </div>
            </div>
            
            <div className={styles.resumeFooter}>
              <p>For a full detailed resume, please download the PDF version.</p>
              <button 
                className={styles.downloadButtonSmall}
                onClick={handleDownload}
                aria-label="Download Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}