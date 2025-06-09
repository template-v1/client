'use client';

import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import InputV2 from "@/components/ui/InputV2";
import Image from "next/image";
import bgContact from "@/public/images/bg-contact.jpg";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý dữ liệu form ở đây
    console.log(form);
  };

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
          {/* Left: Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              {/* <span className={styles.formStep}>01 _ CONTACT</span> */}
              <h2 className={styles.formTitle}>Get in touch</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <InputV2
                    label="Your Name"
                    name="name"
                    required
                    placeholder="Your name here"
                    defaultValue={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <InputV2
                    label="Your Email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email here"
                    defaultValue={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <InputV2
                    label="Your Subject"
                    name="subject"
                    required
                    placeholder="Your subject here"
                    defaultValue={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <InputV2
                    label="Contact Number"
                    name="phone"
                    placeholder="Your phone here"
                    defaultValue={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <InputV2
                  label="Message"
                  name="message"
                  type="textarea"
                  required
                  placeholder="Tell us a few words"
                  rowsTextarea={3}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <InputV2
                  name="captcha"
                  placeholder="Type the below word"
                  value={form.captcha}
                  onChange={handleChange}
                />
                <div className={styles.captcha}>catch</div>
              </div>
              <button type="submit" className={styles.sendBtn}>SEND MESSAGE</button>
            </form>
          </div>
          {/* Right: Contact Detail */}
          <div className={styles.detailSection}>
            <h3 className={styles.detailTitle}>Our contact detail</h3>
            <p className={styles.detailDesc}>Need any consultations contact with us</p>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg width="28" height="28" fill="none"><path d="M21 19v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" stroke="#FF4D30" strokeWidth="2" /><path d="M17 3h6v6" stroke="#FF4D30" strokeWidth="2"/><path d="M11 17l12-12" stroke="#FF4D30" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Phone Number</div>
                <div>+1(888) 123-5678</div>
                <div>(+44)123 456 789</div>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg width="28" height="28" fill="none"><path d="M4 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" stroke="#FF4D30" strokeWidth="2"/><path d="M22 7l-8 7-8-7" stroke="#FF4D30" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Email Address</div>
                <div>info@example.com</div>
                <div>contact@example.com</div>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg width="28" height="28" fill="none"><path d="M14 25s8-7.5 8-13A8 8 0 1 0 6 12c0 5.5 8 13 8 13z" stroke="#FF4D30" strokeWidth="2"/><circle cx="14" cy="12" r="3" stroke="#FF4D30" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Location</div>
                <div>Guild Street 51, North Town,<br/>London-06192, UK</div>
              </div>
            </div>
            <div className={styles.socials}>
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
              <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
              <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}