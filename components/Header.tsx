'use client';

import { navLinks } from '@/constants/constants';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLanguage, LANGUAGES } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      {/* Logo */}
      <div className={styles.logoWrap}>
        <div className={styles.logoIcon}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#FF4D30"/>
            <path d="M13 27L27 13M27 13H17M27 13V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className={styles.logoTextMain}>KARGON</div>
          <div className={styles.logoTextSub}>LOGISTIC SERVICE</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li className={styles.navItem} key={item.href}>
              <Link
                href={item.href}
                className={
                  pathname === item.href
                    ? `${styles.navLink} ${styles.navLinkActive}`
                    : styles.navLink
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Search & Language Dropdown */}
      <div className={styles.actionWrap}>
        <button className={styles.iconBtn} aria-label="Search">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
        </button>
        <select
          className={styles.langDropdown}
          value={lang}
          onChange={e => changeLanguage(e.target.value)}
          aria-label="Select language"
        >
          {LANGUAGES.map((lng) => (
            <option key={lng.code} value={lng.code}>
              {lng.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;