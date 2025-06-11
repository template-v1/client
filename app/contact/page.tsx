'use client';

import React from "react";
import Image from "next/image";
import bgContact from "@/public/images/bg-contact.jpg";
import ContactForm from "@/components/ui/contactForm/ContactForm";
import { FaLocationDot, FaPhone, FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "@/styles/Contact.module.css";

// Common SocialIcon component
const SocialIcon = ({ type, href }: { type: string; href: string }) => {
  const iconProps = { size: 28 };
  let IconComp = null;
  switch (type) {
    case "facebook":
      IconComp = FaFacebookF;
      break;
    case "twitter":
      IconComp = FaXTwitter;
      break;
    case "youtube":
      IconComp = FaYoutube;
      break;
    case "linkedin":
      IconComp = FaLinkedinIn;
      break;
    default:
      return null;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
      <IconComp {...iconProps} />
    </a>
  );
};

// Common DetailItem component
const DetailItem = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="d-flex align-items-center gap-3 mb-3">
    <div className={styles.detailIcon}>{icon}</div>
    <div>
      <div className={styles.detailLabel}>{label}</div>
      {children}
    </div>
  </div>
);

const contactDetail = {
  title: "Our contact detail",
  desc: "Need any consultations contact with us",
  phones: ["+1(888) 123-5678", "(+44)123 456 789"],
  emails: ["info@example.com", "contact@example.com"],
  location: "Guild Street 51, North Town,\nLondon-06192, UK",
  socials: [
    { type: "facebook", href: "#" },
    { type: "twitter", href: "#" },
    { type: "youtube", href: "#" },
    { type: "linkedin", href: "#" },
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
          <div className="container py-4 px-4 px-md-5">
            <div className={`${styles.bannerContent} text-center text-md-start`}>
              <h1 className={styles.bannerTitle}>Contact Us</h1>
              <div className={`d-flex align-items-center gap-2 gap-md-3 justify-content-center justify-content-md-start ${styles.breadcrumb}`}>
                <span>Home</span>
                <span className={styles.breadcrumbDivider}></span>
                <span className={styles.breadcrumbCurrent}>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {/* Form */}
          <div className="col-12 col-lg-6">
            {/* <div className="bg-white rounded-4 shadow-sm p-4 h-100"> */}
              <ContactForm />
            {/* </div> */}
          </div>
          {/* Contact Detail */}
          <div className="col-12 col-lg-6">
            <div className={`${styles.detailSection} rounded-4 h-100 position-relative p-4 p-lg-5`}>
              <h3 className={styles.detailTitle}>{contactDetail.title}</h3>
              <p className={styles.detailDesc}>{contactDetail.desc}</p>
              <DetailItem icon={<FaPhone color="#FF4D30" />} label="Phone Number">
                {contactDetail.phones.map((phone) => (
                  <div key={phone}>{phone}</div>
                ))}
              </DetailItem>
              <DetailItem icon={<MdEmail color="#FF4D30" />} label="Email Address">
                {contactDetail.emails.map((email) => (
                  <div key={email}>{email}</div>
                ))}
              </DetailItem>
              <DetailItem icon={<FaLocationDot color="#FF4D30" />} label="Location">
                <div>
                  {contactDetail.location.split('\n').map((line, i) => (
                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                  ))}
                </div>
              </DetailItem>
              <div className={`d-flex gap-3 ${styles.socials}`}>
                {contactDetail.socials.map((s) => (
                  <SocialIcon key={s.type} type={s.type} href={s.href} />
                ))}
              </div>
              {/* Overlay background image for detail section */}
              <div className={styles.detailBg}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}