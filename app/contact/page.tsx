'use client';

import React from "react";
import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import bgContact from "@/public/images/bg-contact.jpg";
import ContactForm from "@/components/ui/contactForm/ContactForm";

const contactDetail = {
  title: "Our contact detail",
  desc: "Need any consultations contact with us",
  phones: ["+1(888) 123-5678", "(+44)123 456 789"],
  emails: ["info@example.com", "contact@example.com"],
  location: "Guild Street 51, North Town,\nLondon-06192, UK",
  socials: [
    { href: "#", icon: "/icons/facebook.svg", alt: "Facebook" },
    { href: "#", icon: "/icons/twitter.svg", alt: "Twitter" },
    { href: "#", icon: "/icons/youtube.svg", alt: "YouTube" },
    { href: "#", icon: "/icons/linkedin.svg", alt: "LinkedIn" },
  ],
};

export default function ContactPage() {
  return (
    <div>
      {/* Banner */}
      <div className={styles.banner}>
        <Image
          src={bgContact}
          alt="Contact Banner"
          className={styles.bannerImg}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>Contact Us</h1>
            <div className={styles.breadcrumb}>
              <span>Home</span>
              <span className={styles.breadcrumbDivider}></span>
              <span className={styles.breadcrumbCurrent}>Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.contactBox}>
          <ContactForm />
          <div className={styles.detailSection}>
            <h3 className={styles.detailTitle}>{contactDetail.title}</h3>
            <p className={styles.detailDesc}>{contactDetail.desc}</p>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                {/* Phone SVG */}
                <svg width="28" height="28" fill="none"><path d="M21 19v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" stroke="#FF4D30" strokeWidth="2" /><path d="M17 3h6v6" stroke="#FF4D30" strokeWidth="2"/><path d="M11 17l12-12" stroke="#FF4D30" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Phone Number</div>
                {contactDetail.phones.map((phone) => (
                  <div key={phone}>{phone}</div>
                ))}
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                {/* Email SVG */}
                <svg width="28" height="28" fill="none"><path d="M4 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" stroke="#FF4D30" strokeWidth="2"/><path d="M22 7l-8 7-8-7" stroke="#FF4D30" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Email Address</div>
                {contactDetail.emails.map((email) => (
                  <div key={email}>{email}</div>
                ))}
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                {/* Location SVG */}
                <svg width="28" height="28" fill="none"><path d="M14 25s8-7.5 8-13A8 8 0 1 0 6 12c0 5.5 8 13 8 13z" stroke="#FF4D30" strokeWidth="2"/><circle cx="14" cy="12" r="3" stroke="#FF4D30" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Location</div>
                <div>
                  {contactDetail.location.split('\n').map((line, i) => (
                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.socials}>
              {contactDetail.socials.map((s) => (
                <a key={s.alt} href={s.href}><img src={s.icon} alt={s.alt} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}