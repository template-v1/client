'use client'

import React, { useState, memo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import bgContact from "@/public/images/bg-contact.jpg";
import styles from "@/styles/Service.module.css";
import service01 from "@/public/images/service-01.jpg";
import service02 from "@/public/images/service-02.jpg";
import service03 from "@/public/images/service-03.jpg";
import service04 from "@/public/images/service-04.jpg";
import service05 from "@/public/images/service-05.jpg";
import service06 from "@/public/images/service-06.jpg";
import ContactForm from '@/components/ui/contactForm/ContactForm';
import ButtonV2 from '@/components/ui/ButtonV2';

type ServiceCardProps = {
  image: any;
  alt: string;
  title: string;
};

const ServiceCard = memo(({ image, alt, title }: ServiceCardProps) => (
  <div className={styles.serviceCard}>
    <Image src={image} alt={alt} width={350} height={250} className={styles.serviceImg} />
    <h3 className={styles.serviceName}><span>{title}</span></h3>
  </div>
));

const services = [
  { image: service01, key: "warehousing" },
  { image: service02, key: "air" },
  { image: service03, key: "ocean" },
  { image: service04, key: "road" },
  { image: service05, key: "rail" },
  { image: service06, key: "solution" },
];

type PricingCardProps = {
  icon: React.ReactNode;
  name: string;
  price: string;
  desc: string;
  features: { text: string; strike?: boolean }[];
};

const PricingCard = memo(({ icon, name, price, desc, features }: PricingCardProps) => (
  <div className={styles.pricingCard}>
    <div className={styles.pricingIcon}>{icon}</div>
    <div className={styles.pricingName}>{name}</div>
    <div className={styles.pricingPrice}>{price} <span>/mo</span></div>
    <div className={styles.pricingDesc}>{desc}</div>
    <hr className={styles.pricingDivider}/>
    <ul className={styles.pricingList}>
      {features.map((f, i) => (
        <li key={i} className={f.strike ? styles.strike : ""}>
          <span className={styles.check}>✓</span> {f.text}
        </li>
      ))}
    </ul>
    <ButtonV2
      label={desc}
      type="primary"
      size="middle"
      className={styles.pricingBtn}
    />
  </div>
));

const FAQAccordion = memo(({ faqs }: { faqs: any[] }) => {
  const [openIdx, setOpenIdx] = useState<number>(-1);
  return (
    <div className={styles.faqAccordion}>
      {faqs.map((faq, idx) => (
        <div
          className={`${styles.faqItem} ${openIdx === idx ? styles.faqOpen : ""}`}
          key={idx}
          onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
        >
          <div className={styles.faqQuestion}>
            <span className={openIdx === idx ? styles.faqActive : ""}>{faq.q}</span>
            <span className={styles.faqIcon}>{openIdx === idx ? "−" : "+"}</span>
          </div>
          {openIdx === idx && (
            <div className={styles.faqAnswer}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
});

const ServicePage = () => {
  const { t } = useTranslation('common');
  const servicePage = t('servicePage', { returnObjects: true }) as any;

  const processSteps = servicePage.process?.steps || [];
  const faqs = servicePage.faqContact?.faqs || [];

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
            <h1 className={styles.bannerTitle}>{servicePage.banner?.title}</h1>
            <div className={styles.breadcrumb}>
              <span>{servicePage.banner?.breadcrumbHome}</span>
              <span className={styles.breadcrumbDivider}></span>
              <span className={styles.breadcrumbCurrent}>{servicePage.banner?.breadcrumbCurrent}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <span className={styles.servicesSubtitle}>{servicePage.services?.subtitle}</span>
          <h2 className={styles.servicesTitle}>{servicePage.services?.title}</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, idx) => (
            <ServiceCard
              key={service.key}
              image={service.image}
              alt={t(`servicePage.services.list.${service.key}`)}
              title={t(`servicePage.services.list.${service.key}`)}
            />
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <section className={styles.ctaSection}>
        <Image
          src={bgContact}
          alt="Logistics CTA"
          fill
          className={styles.ctaBg}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.ctaOverlay}>
          <h2 className={styles.ctaTitle}>
            {servicePage.cta?.title?.split('\n').map((line: string, idx: number) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <ButtonV2
            label={servicePage.cta?.button}
            type="primary"
            size="large"
            className={styles.ctaButton}
          />
        </div>
      </section>
      
      {/* Process Steps Section */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <span className={styles.processSubtitle}>{servicePage.process?.subtitle}</span>
          <h2 className={styles.processTitle}>{servicePage.process?.title}</h2>
        </div>
        <div className={styles.processSteps}>
          {processSteps.map((item: any) => (
            <div className={styles.processStep} key={item.step}>
              <div className={styles.processStepTop}>
                <span className={styles.processStepLabel}>Step {item.step}</span>
                <span className={styles.processStepDot}></span>
              </div>
              <div className={styles.processStepNum}>{item.step}</div>
              <div className={styles.processStepTitle}>{item.title}</div>
              <div className={styles.processStepDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingHeader}>
          <span className={styles.pricingSubtitle}>{servicePage.pricing?.subtitle}</span>
          <h2 className={styles.pricingTitle}>{servicePage.pricing?.title}</h2>
        </div>
        <div className={styles.pricingGrid}>
          <PricingCard
            icon={
              <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="22" stroke="#FF4D30" strokeWidth="2"/><path d="M24 32l-7.5 4 1.5-8.5-6-5.5 8.5-1 3.5-8 3.5 8 8.5 1-6 5.5 1.5 8.5-7.5-4z" stroke="#FF4D30" strokeWidth="2" strokeLinejoin="round"/></svg>
            }
            name={servicePage.pricing?.plans?.basic}
            price="$149"
            desc={servicePage.pricing?.desc}
            features={[
              { text: servicePage.pricing?.features?.warehouse1 },
              { text: servicePage.pricing?.features?.customRules },
              { text: servicePage.pricing?.features?.realtimeRate },
              { text: servicePage.pricing?.features?.freight50, strike: true },
              { text: servicePage.pricing?.features?.insuranceNotIncluded, strike: true },
            ]}
          />
          <PricingCard
            icon={
              <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="22" stroke="#FF4D30" strokeWidth="2"/><path d="M24 32l-7.5 4 1.5-8.5-6-5.5 8.5-1 3.5-8 3.5 8 8.5 1-6 5.5 1.5 8.5-7.5-4z" stroke="#FF4D30" strokeWidth="2" strokeLinejoin="round"/><rect x="16" y="12" width="16" height="8" rx="4" stroke="#FF4D30" strokeWidth="2"/></svg>
            }
            name={servicePage.pricing?.plans?.premium}
            price="$169"
            desc={servicePage.pricing?.desc}
            features={[
              { text: servicePage.pricing?.features?.warehouse1 },
              { text: servicePage.pricing?.features?.customRules },
              { text: servicePage.pricing?.features?.realtimeRate },
              { text: servicePage.pricing?.features?.freight75 },
              { text: servicePage.pricing?.features?.insuranceIncluded, strike: true },
            ]}
          />
          <PricingCard
            icon={
              <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="22" stroke="#FF4D30" strokeWidth="2"/><path d="M24 32l-7.5 4 1.5-8.5-6-5.5 8.5-1 3.5-8 3.5 8 8.5 1-6 5.5 1.5 8.5-7.5-4z" stroke="#FF4D30" strokeWidth="2" strokeLinejoin="round"/><path d="M24 12a12 12 0 0112 12" stroke="#FF4D30" strokeWidth="2"/></svg>
            }
            name={servicePage.pricing?.plans?.gold}
            price="$199"
            desc={servicePage.pricing?.desc}
            features={[
              { text: servicePage.pricing?.features?.warehouse2 },
              { text: servicePage.pricing?.features?.customRules },
              { text: servicePage.pricing?.features?.realtimeRate },
              { text: servicePage.pricing?.features?.freight10 },
              { text: servicePage.pricing?.features?.insuranceIncluded },
            ]}
          />
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section className={styles.expertSection} style={{ background: "#f7f9fa", padding: "64px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 40,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* FAQ */}
          <div style={{ flex: 1, minWidth: 340 }}>
            <span style={{ color: "#FF4D30", fontWeight: 700, fontSize: "1rem", letterSpacing: 1 }}>
              {servicePage.faqContact?.subtitle}
            </span>
            <h2 style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              color: "#183153",
              margin: "16px 0 32px 0",
              lineHeight: 1.1,
            }}>
              {servicePage.faqContact?.title?.split('\n').map((line: string, idx: number) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;