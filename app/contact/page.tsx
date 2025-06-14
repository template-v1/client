"use client";

import ContactForm from "@/components/ui/contactForm/ContactForm";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaPhone,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  { type: "facebook", href: "#", icon: <FaFacebookF /> },
  { type: "twitter", href: "#", icon: <FaXTwitter /> },
  { type: "youtube", href: "#", icon: <FaYoutube /> },
  { type: "linkedin", href: "#", icon: <FaLinkedinIn /> },
];

export default function ContactPage() {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="page-title-section bg-img cover-background left-overlay-secondary"
        data-overlay-dark="9"
        style={{
          backgroundImage: `url(/images/bg-contact.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-start">
                <h1 className="fw-bold text-white mb-3">Contact Us</h1>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="/" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="list-inline-item text-white">/</li>
                  <li className="list-inline-item text-white-50">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="container py-5">
          <div className="row g-0">
            {/* Form */}
            <div className="col-lg-7 overflow-x">
              <ContactForm />
            </div>
            {/* Contact Detail */}
            <div
              className="col-lg-5 d-flex align-items-stretch"
              style={{
                background: `linear-gradient(rgba(24,49,83,0.95),rgba(24,49,83,0.95)), url('https://kargonhtml.websitelayout.net/img/content/contact-image.jpg') center/cover no-repeat`,
              }}
            >
              <div className="p-4 p-lg-5 w-100 d-flex flex-column justify-content-center">
                <h2
                  className="fw-bold text-white mb-3"
                  style={{ fontSize: 32 }}
                >
                  Our contact detail
                </h2>
                <p className="mb-4 text-white-50">
                  Need any consultations contact with us
                </p>
                {/* Phone */}
                <div className="d-flex mb-4 pb-3 border-bottom border-secondary">
                  <div className="flex-shrink-0 mt-2">
                    <FaPhone
                      className="text-white"
                      style={{ color: "#f94735", fontSize: 28 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h3 className="h5 text-white mb-2">Phone Number</h3>
                    <span className="text-white d-block mb-1">
                      +1 (888) 123-5678
                    </span>
                    <span className="text-white">(+44)123 456 789</span>
                  </div>
                </div>
                {/* Email */}
                <div className="d-flex mb-4 pb-3 border-bottom border-secondary">
                  <div className="flex-shrink-0 mt-2">
                    <MdEmail
                      className="text-white"
                      style={{ color: "#f94735", fontSize: 28 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h3 className="h5 text-white mb-2">Email Address</h3>
                    <span className="text-white d-block mb-1">
                      info@example.com
                    </span>
                    <span className="text-white">contact@example.com</span>
                  </div>
                </div>
                {/* Location */}
                <div className="d-flex mb-4 pb-3 border-bottom border-secondary">
                  <div className="flex-shrink-0 mt-2">
                    <FaMapMarkerAlt
                      className="text-white"
                      style={{ color: "#f94735", fontSize: 28 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h3 className="h5 text-white mb-2">Location</h3>
                    <address className="text-white mb-0">
                      Guild Street 51, North Town, London-06192, UK
                    </address>
                  </div>
                </div>
                {/* Socials */}
                <ul className="list-inline mt-4 mb-0">
                  {socials.map((s) => (
                    <li key={s.type} className="list-inline-item me-2">
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: 44,
                          height: 44,
                          background: "#f94735",
                          color: "#fff",
                          fontSize: 20,
                          transition: "background 0.2s, color 0.2s",
                        }}
                      >
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div>
        <iframe
          className="w-100"
          style={{ minHeight: 400, border: 0 }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
