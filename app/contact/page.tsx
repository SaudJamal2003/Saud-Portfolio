// ContactSection.tsx
'use client'
import { FC, useState, KeyboardEvent } from 'react';
import styles from '../../style/Contact.module.css';

interface ContactSectionProps {
  email?: string;
  phone?: string;
}

const Page: FC<ContactSectionProps> = ({
  email = 'jsaud7308@gmail.com',
  phone = '+923352495576'
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveItem(id);
      e.currentTarget.click();
    }
  };

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
         <h3 className={styles.skillsTitle}>Let's Connect</h3>          
          <div className={styles.contactBox} tabIndex={0}>
            <h3 className={styles.skillsSubTitle}>Contact me!</h3>
            
            <div className={styles.contactInfo}>
              <div 
                className={styles.contactItem}
                data-active={activeItem === 'email'}
              >
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <a 
                  href={`mailto:${email}`} 
                  className={styles.contactLink}
                  onFocus={() => setActiveItem('email')}
                  onBlur={() => setActiveItem(null)}
                  onKeyDown={(e) => handleKeyDown(e, 'email')}
                >
                  {email}
                </a>
              </div>
              
              <div 
                className={styles.contactItem}
                data-active={activeItem === 'phone'}
              >
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <a 
                  href={`tel:${phone}`} 
                  className={styles.contactLink}
                  onFocus={() => setActiveItem('phone')}
                  onBlur={() => setActiveItem(null)}
                  onKeyDown={(e) => handleKeyDown(e, 'phone')}
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Page;