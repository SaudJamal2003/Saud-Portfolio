// components/LandingPage.tsx
'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import styles from '../style/LandingPage.module.css';
import Link from 'next/link';

interface CounterProps {
  end: number;
  label: string;
  duration: number;
}

const Counter = ({ end, label, duration }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = end / (duration / 16); // 16ms is roughly 60fps
    
    const timer = setInterval(() => {
      start += step;
      setCount(Math.min(Math.floor(start), end));
      
      if (start >= end) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <div className={styles.counterItem} ref={countRef}>
      <div className={styles.counterNumber}>{count}</div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>
          Muhammad Saud,
          <div className={styles.underline}></div>
        </h1>
        
        <div className={styles.subtitle}>
        Full-Stack Developer | LLM Integrator
        </div>
        
        <p className={styles.description}>
        Crafting intelligent web experiences using modern JavaScript frameworks and Large Language Models. I work at the intersection of AI and web development — integrating tools like the Gemini API into real-world applications. Currently expanding my skills in AI integration, system design, and scalable backend development. I enjoy turning complex ideas into clean, user-centric products that actually get used.
        </p>
        
        <div className={styles.countersContainer}>
          <Counter end={10} label="Projects Completed" duration={1500} />
          <Counter end={2} label="Years of Experience" duration={1500} />
          <Counter end={3} label="Organizations worked with" duration={1500} />
        </div>
        
        <div className={styles.socialLinks}>
          <Link href="https://github.com/SaudJamal2003" className={styles.socialLink} aria-label="GitHub">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/saud-jamal/" className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link href="/resume" className={styles.socialLink} aria-label="Resume">
            <FaUser />
          </Link>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/assets/saud.png" 
            alt="Mohammad Saud" 
            width={300} 
            height={300}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;