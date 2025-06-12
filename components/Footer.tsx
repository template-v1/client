import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import logoInner from "@/public/images/logo-inner.png";

const socials = [
  { type: "facebook", href: "#", icon: <FaFacebookF /> },
  { type: "twitter", href: "#", icon: <FaXTwitter /> },
  { type: "linkedin", href: "#", icon: <FaLinkedinIn /> },
  { type: "instagram", href: "#", icon: <FaInstagram /> },
];

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-0">
      <div className="container pb-4">
        <div className="row mb-4">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h2 className="footer-title fw-bold mb-3">About Kargon</h2>
            <p className="footer-desc mb-4">
              We pride ourselves on providing the best transport and shipping
              services.
            </p>
            <div className="footer-socials d-flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.type}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn d-inline-flex align-items-center justify-content-center rounded-circle"
                  aria-label={s.type}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h2 className="footer-title fw-bold mb-3">Contact Us</h2>
            <ul className="footer-contact-list list-unstyled mb-0">
              <li>
                <span className="footer-contact-label fw-bold">ADDRESS:</span>{" "}
                66 Guild Street 512B, Great North Town.
              </li>
              <li>
                <span className="footer-contact-label fw-bold">MAIL:</span>
                addyour@email
              </li>
              <li>
                <span className="footer-contact-label fw-bold">PHONE:</span>{" "}
                (+44) 123 456 789
              </li>
              <li>
                <span className="footer-contact-label fw-bold">FAX ID:</span>{" "}
                (+1) 523-567-987
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-4">
            <h2 className="footer-title fw-bold mb-3">Our Newsletter</h2>
            <form className="mb-3">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control footer-newsletter-input rounded-start-pill"
                  placeholder="Subscribe with us"
                  aria-label="Email"
                />
                <span className="input-group-text bg-white border-0 rounded-end-pill">
                  <span className="material-symbols-outlined">search</span>
                </span>
              </div>
              <button
                type="submit"
                className="footer-newsletter-btn btn rounded-pill fw-bold py-3 px-4"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="row align-items-center py-3">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <Image
                src={logoInner}
                alt="Kargon Logo"
                width={150}
                height={50}
                className="footer-logo"
              />
            </div>
          </div>
          <div className="col-md-8 text-center text-md-end">
            <nav className="footer-nav">
              <Link
                href="#"
                className="mx-3 text-white text-decoration-none fw-medium"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="mx-3 text-white text-decoration-none fw-medium"
              >
                Services
              </Link>
              <Link
                href="#"
                className="mx-3 text-white text-decoration-none fw-medium"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
