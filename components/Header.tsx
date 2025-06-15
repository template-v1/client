"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";
import logoInner from "@/public/images/logo-inner.png";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const { lang, changeLanguage, LANGUAGES } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      lastScrollY.current = window.scrollY;
      if (showMenu) setShowMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMenu]);

  // Đóng menu khi đổi route
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <header className={`header-fixed${isScrolled ? " scrolled" : ""}`}>
      <nav className={`header-navbar${isScrolled ? " scrolled" : ""}`}>
        {/* Logo + Menu */}
        <div className="d-flex align-items-center flex-grow-1 min-width-0">
          <Link href="/" className="header-logo">
            <Image
              src={isScrolled ? logo : logoInner}
              alt="Logo"
              width={160}
              height={48}
              priority
              style={{ height: "48px", width: "auto" }}
            />
          </Link>
          <ul className="header-menu d-none d-lg-flex">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname.startsWith("/services") ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={pathname.startsWith("/blog") ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname.startsWith("/contact") ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search & Language desktop */}
        <div className="header-actions d-none d-lg-flex">
          <button
            aria-label="Search"
            className="header-search-btn"
            onClick={() => setShowSearch((v) => !v)}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <div style={{ position: "relative", marginLeft: 8 }}>
            <select
              className="header-lang-select"
              value={lang}
              onChange={e => changeLanguage(e.target.value)}
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
            <span className="header-lang-arrow">▼</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Menu"
          className="header-mobile-btn d-lg-none"
          onClick={() => setShowMenu((v) => !v)}
        >
          <span className="material-symbols-outlined">dehaze</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="header-mobile-menu d-lg-none">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <button
            aria-label="Search"
            className="header-search-btn"
            style={{ textAlign: "left", padding: "8px 32px" }}
            onClick={() => {
              setShowSearch((v) => !v);
              setShowMenu(false);
            }}
          >
            <span className="material-symbols-outlined">search</span> Tìm kiếm
          </button>
          <div className="header-mobile-lang">
            <select className="header-lang-select" defaultValue="vi">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
            <span className="header-mobile-lang-arrow">▼</span>
          </div>
        </div>
      )}

      {/* Search Box */}
      {showSearch && (
        <div className="header-search-box">
          <form
            action="/search"
            method="GET"
            className="header-search-form"
            onSubmit={() => setShowSearch(false)}
          >
            <input
              type="text"
              name="q"
              placeholder="Type & hit enter..."
              autoFocus
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setShowSearch(false)}
            >
              <i className="fas fa-times" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
