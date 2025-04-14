// components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaCode, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link href="/">
            <span className={styles.nameText}>Muhammad Saud</span>
          </Link>
        </div>

        <div className={styles.mobileIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.navbarItem}>
            <Link href="/skills" className={styles.navbarLink} onClick={toggleMenu}>
              <FaCode className={styles.navIcon} />
              <span>Skills</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/projects" className={styles.navbarLink} onClick={toggleMenu}>
              <FaProjectDiagram className={styles.navIcon} />
              <span>Projects</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/experience" className={styles.navbarLink} onClick={toggleMenu}>
              <FaBriefcase className={styles.navIcon} />
              <span>Experience</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/education" className={styles.navbarLink} onClick={toggleMenu}>
              <FaGraduationCap className={styles.navIcon} />
              <span>Education</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/resume" className={styles.navbarLink} onClick={toggleMenu}>
              <FaFileAlt className={styles.navIcon} />
              <span>Resume</span>
            </Link>
          </li>
        </ul>

        <div className={styles.contactLink}>
          <Link href="/contact" className={styles.contactButton} onClick={toggleMenu}>
            <FaEnvelope className={styles.contactIcon} />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;