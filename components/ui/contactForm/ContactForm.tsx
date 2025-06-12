import React, { useState } from "react";
import styles from "@/public/styles/ContacForm.module.css";
import InputV2 from "@/components/ui/InputV2";
import ButtonV2 from "@/components/ui/ButtonV2";

interface ContactFormProps {
  onSubmit?: (data: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    setForm({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
      captcha: "",
    });
  };

  return (
    <form className={styles.contactForm2Col} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Contact us</span>
        <h2 className={styles.title}>Get In Touch</h2>
      </div>
      <div className={styles.grid}>
        <InputV2
          label="Your Name"
          name="name"
          placeholder="Your name here"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <InputV2
          label="Your Email"
          name="email"
          type="email"
          placeholder="Your email here"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <InputV2
          label="Your Subject"
          name="subject"
          placeholder="Your subject here"
          value={form.subject}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <InputV2
          label="Contact Number"
          name="phone"
          type="tel"
          placeholder="Your phone here"
          value={form.phone}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <InputV2
        label="Message"
        name="message"
        type="textarea"
        placeholder="Tell us a few words"
        value={form.message}
        onChange={handleChange}
        required
        rowsTextarea={3}
        className={styles.textarea}
      />
      <InputV2
        name="captcha"
        placeholder="Type the below word"
        value={form.captcha}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.captchaBox}>
        <span className={styles.captchaImg}><i>c a t c h</i></span>
      </div>
      <ButtonV2
        label="SEND MESSAGE"
        htmlType="submit"
        className={styles.button}
        type="primary"
        size="large"
      />
    </form>
  );
};

export default ContactForm;