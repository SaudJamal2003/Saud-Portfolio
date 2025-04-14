// components/SkillsPage.tsx
'use client'
import { useState, useEffect } from 'react';
import styles from '../../style/SkillsPage.module.css';
import SkillCard from '@/components/SkillCard';

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = [
    { name: 'Next.js', logo: '/assets/skills/nextjs.svg' },
    { name: 'React.js', logo: '/assets/skills/reactjs-svgrepo-com.svg' },
    { name: 'HTML5', logo: '/assets/skills/html-5-svgrepo-com.svg' },
    { name: 'CSS3', logo: '/assets/skills/css-3-svgrepo-com.svg' },
    { name: 'Mantine UI', logo: '/assets/skills/mantine-ui.png' }, // Using Material UI as substitute
    { name: 'Material UI', logo: '/assets/skills/material-ui-svgrepo-com.svg' },
    { name: 'Bootstrap', logo: '/assets/skills/bootstarp.png' }, // Not shown in image
  ];
  
  const backendSkills = [
    { name: 'Node.js', logo: '/assets/skills/nodejs.svg' },
    { name: 'Express.js', logo: '/assets/skills/expressjs.png' }, // No Express.js visible, using Node.js
    { name: 'Web Sockets', logo: '/assets/skills/websocket.svg' }, 
  ];
  
  const dataBaseSkills = [
    { name: 'SQL', logo: '/assets/skills/sql-server.svg' },
    { name: 'MySQL', logo: '/assets/skills/mysql.svg' }, // No Express.js visible, using Node.js
    { name: 'Firebase', logo: '/assets/skills/firbase.svg' }, 
    { name: 'MongoDB', logo: '/assets/skills/mongodb.svg' }, 
    { name: 'Pincone', logo: '/assets/skills/pinecone.png' }, 
  ];
  
  const apiIntegrationSkills = [
      { name: 'REST API', logo: '/assets/skills/rest-api.svg' }, // Using Postman as REST API tool
      { name: 'Nodemailer', logo: '/assets/skills/nodemailer.png' }, // Using Node.js
      { name: 'IP Whois', logo: '/assets/skills/ipwhois.png' }, // No direct match
      { name: 'REST Countries API', logo: '/assets/skills/rest-countries-api.png' }, // Using Postman
      { name: 'EmailJS', logo: '/assets/skills/javascript-svgrepo-com.svg' }, // Using JavaScript
      { name: 'Gemini API', logo: '/assets/skills/googlegemini.svg' },
      { name: 'OpenAI API', logo: '/assets/skills/openai.svg' },
      { name: 'Google OAuth', logo: '/assets/skills/googleauthenticator.svg' },
      { name: 'Google reCAPTCHA', logo: '/assets/skills/google-recaptcha.png' }, 
  ];
  const cmsSkills = [
      { name: 'Strapi CMS', logo: '/assets/skills/strapi.png' }, 
  ];
  
  const programmingSkills = [
    { name: 'JavaScript', logo: '/assets/skills/javascript-svgrepo-com.svg' },
    { name: 'TypeScript', logo: '/assets/skills/typescript-svgrepo-com.svg' },
    { name: 'Python', logo: '/assets/skills/python-svgrepo-com.svg' },
    { name: 'C', logo: '/assets/skills/c.svg' }, // Not visible in image
    { name: 'C++', logo: '/assets/skills/c++.svg' },
  ];
  
  const toolsSkills = [
    { name: 'GitHub Desktop', logo: '/assets/skills/github.svg' },
    { name: 'Postman', logo: '/assets/skills/postman-icon-svgrepo-com.svg' },
    { name: 'Oracle Sql Developer', logo: '/assets/skills/sqlDeveloper.png' },
    { name: 'MySQL Workbench', logo: '/assets/skills/workbench.png' },
    { name: 'Vs Code', logo: '/assets/skills/vscode.svg' },
  ];

  return (
    <div className={`${styles.skillsContainer} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.skillsTitle}>Skills</h1>

      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>Frontend Development</h2>
        <div className={styles.skillCards}>
          {frontendSkills.map((skill, index) => (
            <SkillCard key={`frontend-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>

      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>Backend Development</h2>
        <div className={styles.skillCards}>
          {backendSkills.map((skill, index) => (
            <SkillCard key={`backend-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>

      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>Database</h2>
        <div className={styles.skillCards}>
          {dataBaseSkills.map((skill, index) => (
            <SkillCard key={`api-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>API Integration</h2>
        <div className={styles.skillCards}>
          {apiIntegrationSkills.map((skill, index) => (
            <SkillCard key={`api-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>CMS</h2>
        <div className={styles.skillCards}>
          {cmsSkills.map((skill, index) => (
            <SkillCard key={`api-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>

      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>Programming Languages</h2>
        <div className={styles.skillCards}>
          {programmingSkills.map((skill, index) => (
            <SkillCard key={`programming-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>

      <div className={styles.skillSection}>
        <h2 className={styles.sectionTitle}>Tools</h2>
        <div className={styles.skillCards}>
          {toolsSkills.map((skill, index) => (
            <SkillCard key={`tools-${index}`} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;