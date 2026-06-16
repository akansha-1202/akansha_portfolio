"use client";

import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled || menuOpen ? "scrolled" : "not-scrolled"}`}
    >
      <div className="inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          Akansha Verma
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="contact-btn group hidden sm:flex">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          <button
            type="button"
            className="mobile-menu-btn lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`bar ${menuOpen ? "open" : ""}`} />
            <span className={`bar ${menuOpen ? "open" : ""}`} />
            <span className={`bar ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a href={link} onClick={closeMenu}>
                {name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-contact-link" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
