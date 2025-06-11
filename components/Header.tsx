'use client';

import { navLinks } from '@/constants/constants';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback, useMemo } from 'react';
import styles from '../styles/Header.module.css';

// Component Logo
const Logo = () => (
  <div className={styles.logoIcon}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#FF4D30" />
      <path
        d="M13 27L27 13M27 13H17M27 13V23"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// Icon menu hamburger (mobile)
const HamburgerIcon = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3">
    <rect y="7" width="32" height="3" rx="1.5" fill="currentColor"/>
    <rect y="15" width="32" height="3" rx="1.5" fill="currentColor"/>
    <rect y="23" width="32" height="3" rx="1.5" fill="currentColor"/>
  </svg>
);

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLanguage, LANGUAGES } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  // Theo dõi scroll để đổi màu header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Đóng menu khi đổi route
  useEffect(() => {
    setMenuOpen(false);
    setMenuClosing(false);
  }, [pathname]);

  // Mở menu mobile
  const handleOpenMenu = useCallback(() => setMenuOpen(true), []);
  // Đóng menu mobile (có hiệu ứng)
  const handleCloseMenu = useCallback(() => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 250);
  }, []);

  // Xử lý click hamburger
  const handleHamburgerClick = useCallback(() => {
    if (menuOpen) {
      handleCloseMenu();
    } else {
      handleOpenMenu();
    }
  }, [menuOpen, handleCloseMenu, handleOpenMenu]);

  // Danh sách menu desktop (dùng useMemo để tối ưu)
  const navList = useMemo(() => (
    navLinks.map((item) => (
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
    ))
  ), [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Bên trái: Logo + menu desktop */}
        <div className="d-flex align-items-center py-3">
          {/* Logo */}
          <div className={`d-flex align-items-center ${styles.logoWrap}`}>
            <Logo />
            <div>
              <div className={styles.logoTextMain}>KARGON</div>
              <div className={styles.logoTextSub}>LOGISTIC SERVICE</div>
            </div>
          </div>

          {/* Menu desktop: dùng Bootstrap cho layout */}
          <nav className="d-none d-lg-flex">
            <ul className={`mb-0 d-flex align-items-center gap-4 ${styles.navList}`}>
              {navList}
            </ul>
          </nav>
        </div>

        {/* Bên phải: nút menu mobile + search + chọn ngôn ngữ */}
        <div className="d-flex justify-content-between align-items-center py-2">
          {/* Nút hamburger (chỉ hiện trên mobile) */}
          <button
            className="d-lg-none btn"
            aria-label="Open menu"
            onClick={handleHamburgerClick}
            style={{ color: scrolled ? '#183153' : '#fff' }}
          >
            <HamburgerIcon />
          </button>

          {/* Search & Language Dropdown desktop */}
          <div className={`d-none d-lg-flex align-items-center ${styles.actionWrap}`}>
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
        </div>
      </div>

      {/* Menu mobile (dropdown) */}
      {(menuOpen || menuClosing) && (
        <div
          className={`d-lg-none position-absolute top-100 start-0 w-100 shadow bg-white ${menuClosing ? styles.mobileMenuOut : styles.mobileMenu}`}
          style={{ zIndex: 2000 }}
        >
          <ul className="list-unstyled m-0 p-3">
            {navLinks.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`fw-semibold ${pathname === item.href ? styles.navLinkActive : ''} text-dark text-decoration-none`}
                  style={{ fontSize: '1.1rem' }}
                  onClick={handleCloseMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Dropdown chọn ngôn ngữ trên mobile */}
            <li className="mt-3">
              <select
                className={styles.langDropdown}
                value={lang}
                onChange={e => { changeLanguage(e.target.value); handleCloseMenu(); }}
                aria-label="Select language"
                style={{ width: '100%' }}
              >
                {LANGUAGES.map((lng) => (
                  <option key={lng.code} value={lng.code}>
                    {lng.label}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;