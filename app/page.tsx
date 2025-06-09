'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import bgHome from "@/public/images/bg-home.jpg";
import about01 from "@/public/images/about-01.jpg";
import about02 from "@/public/images/about-02.jpg";
import service01 from "@/public/images/service-01.jpg";
import service02 from "@/public/images/service-02.jpg";
import service03 from "@/public/images/service-03.jpg";
import service04 from "@/public/images/service-04.jpg";
import service05 from "@/public/images/service-05.jpg";
import feedback01 from "@/public/images/testimonial-01.jpg";
import ButtonV2 from "@/components/ui/ButtonV2";
import { useSectionVisible } from "@/hooks/useSectionVisible";
import { StarRating } from "@/components/ui/StarRating";
import { GlitchNumber } from "@/components/ui/GlitchNumber";
import { useTranslation } from 'next-i18next';

// ---------- Common Components ----------

function Section({ children, className = "", visibleRef, showClass = "" }: { children: React.ReactNode, className?: string, visibleRef?: any, showClass?: string }) {
  const visible = visibleRef ? useSectionVisible(visibleRef, 0.2) : true;
  return (
    <section ref={visibleRef} className={`${className} ${visible ? showClass : ""}`}>
      {children}
    </section>
  );
}

// ---------- Data ----------

const serviceCards = [
  { src: service01, alt: "Warehousing", name: "service.warehousing" },
  { src: service02, alt: "Air Freight", name: "service.air" },
  { src: service03, alt: "Ocean Freight", name: "service.ocean" },
  { src: service04, alt: "Road Freight", name: "service.road" },
  { src: service05, alt: "Extra Service", name: "service.extra" },
];

const feedbackUsers = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Kristin",
    stars: 5,
    content: "feedback.1",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Kristin",
    stars: 5,
    content: "feedback.2"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Kristin",
    stars: 5,
    content: "feedback.3"
  },
];

const counterData = [
  { icon: "thumb_up", number: 35, label: "counter.experience" },
  { icon: "public", number: 528, label: "counter.cities" },
  { icon: "groups", number: 475, label: "counter.clients" },
  { icon: "handshake", number: 45, label: "counter.companies" },
];

const pricingPlans = [
  {
    icon: "workspace_premium",
    name: "pricing.basic",
    price: 149,
    period: "/mo",
    sub: "pricing.sub",
    features: [
      { text: "pricing.f1", included: true },
      { text: "pricing.f2", included: true },
      { text: "pricing.f3", included: true },
      { text: "pricing.f4", included: false },
      { text: "pricing.f5", included: false },
    ]
  },
  {
    icon: "emoji_events",
    name: "pricing.premium",
    price: 169,
    period: "/mo",
    sub: "pricing.sub",
    features: [
      { text: "pricing.f1", included: true },
      { text: "pricing.f2", included: true },
      { text: "pricing.f3", included: true },
      { text: "pricing.f6", included: true },
      { text: "pricing.f7", included: false },
    ]
  },
  {
    icon: "public",
    name: "pricing.gold",
    price: 199,
    period: "/mo",
    sub: "pricing.sub",
    features: [
      { text: "pricing.f8", included: true },
      { text: "pricing.f2", included: true },
      { text: "pricing.f3", included: true },
      { text: "pricing.f9", included: true },
      { text: "pricing.f7", included: true },
    ]
  }
];

// ---------- UI Components ----------

function ServiceCard({ src, alt, name }: { src: any; alt: string; name: string }) {
  const { t } = useTranslation('common');
  // Sử dụng homePageI18n cho các key dịch vụ
  const homePageI18n = t('homePage', { returnObjects: true }) as any;
  // name ví dụ: "service.warehousing"
  const [group, key] = name.split('.');
  return (
    <div className={styles.serviceCard}>
      <Image src={src} alt={alt} className={styles.serviceImg} width={350} height={260} />
      <div className={styles.serviceName}>
        {homePageI18n?.[group]?.[key] || ""}
        <div className={styles.serviceUnderline}></div>
      </div>
    </div>
  );
}

function Carousel({ cards }: { cards: any[] }) {
  const CARD_COUNT = 4;
  const GAP_PERCENT = 2;
  const TOTAL_GAP = GAP_PERCENT * (CARD_COUNT - 1);
  const CARD_WIDTH = (100 - TOTAL_GAP) / CARD_COUNT;
  const [startIdx, setStartIdx] = useState(0);
  const allCards = [...cards, ...cards];
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cards.length]);
  return (
    <div className={styles.servicesGrid}>
      <div
        className={styles.carouselTrack}
        style={{
          gap: '2%',
          transform: `translateX(-${startIdx * (CARD_WIDTH + GAP_PERCENT)}%)`,
          transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        {allCards.map((card, idx) => (
          <div
            key={idx}
            className={styles.carouselItem}
            style={{ flex: `0 0 ${CARD_WIDTH}%`, maxWidth: `${CARD_WIDTH}%` }}
          >
            <ServiceCard src={card.src} alt={card.alt} name={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CounterItem({ icon, number, label, visible }: { icon: string; number: number | string; label: string; visible: boolean }) {
  const { t } = useTranslation('common');
  const homePageI18n = t('homePage', { returnObjects: true }) as any;
  // label ví dụ: "counter.experience"
  const [group, key] = label.split('.');
  return (
    <div className={styles.counterItem}>
      <div className={styles.counterIcon}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className={styles.counterNumber}>
        {visible ? <GlitchNumber targetValue={Number(number)} /> : number}
      </div>
      <div className={styles.counterLabel}>{homePageI18n?.[group]?.[key] || ""}</div>
    </div>
  );
}

function FeedbackUser({ avatar, name, stars = 5, content }: { avatar: string; name: string; stars?: number; content?: string }) {
  const { t } = useTranslation('common');
  const homePageI18n = t('homePage', { returnObjects: true }) as any;
  const feedbackText = content ? homePageI18n[content] || "" : "";
  return (
    <div className={styles.feedbackUserContainer}>
      <p className={styles.feedbackText}>{feedbackText}</p>
      <div className={styles.feedbackUser}>
        <img src={avatar} alt={name} className={styles.feedbackAvatar} />
        <div>
          <div className={styles.feedbackUserName}>{name}</div>
          <div className={styles.feedbackUserStars}>
            <StarRating score={stars} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeedbackSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const total = feedbackUsers.length;
  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 3000);
    return () => clearTimeout(timer);
  }, [current]);
  const handleChange = (nextIdx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(nextIdx);
      setFade(true);
    }, 300);
  };
  const handlePrev = () => handleChange((current - 1 + total) % total);
  const handleNext = () => handleChange((current + 1) % total);
  return (
    <div style={{ position: "relative", minHeight: 220 }}>
      <div
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.3s cubic-bezier(0.23,1,0.32,1)",
          willChange: "opacity",
        }}
      >
        <FeedbackUser {...feedbackUsers[current]} />
      </div>
      <div className={styles.feedbackNav}>
        <button className={styles.feedbackNavBtn} onClick={handlePrev}>←</button>
        <button className={styles.feedbackNavBtn} onClick={handleNext}>→</button>
      </div>
    </div>
  );
}

function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  const { t } = useTranslation('common');
  const homePageI18n = t('homePage', { returnObjects: true }) as any;
  // plan.name ví dụ: "pricing.basic"
  const [group, key] = plan.name.split('.');
  return (
    <div className={styles.pricingCard}>
      <div className={styles.pricingIcon}>
        <span className="material-symbols-outlined" style={{ fontSize: 32, color: "#FF4D30" }}>{plan.icon}</span>
      </div>
      <div className={styles.pricingName}>{homePageI18n?.[group]?.[key] || ""}</div>
      <div className={styles.pricingPrice}>
        ${plan.price} <span className={styles.pricingPeriod}>{plan.period}</span>
      </div>
      <div className={styles.pricingSub}>{homePageI18n?.[group]?.sub || ""}</div>
      <hr className={styles.pricingDivider} />
      <ul className={styles.pricingList}>
        {plan.features.map((f, i) => {
          const [fGroup, fKey] = f.text.split('.');
          return (
            <li key={i} className={!f.included ? styles.pricingLineThrough : ""}>
              <span className={styles.pricingCheck}>✓</span> {homePageI18n?.[fGroup]?.[fKey] || ""}
            </li>
          );
        })}
      </ul>
      <ButtonV2 label={homePageI18n?.pricing?.choose || ""} className={styles.pricingBtn}/>
    </div>
  );
}

// ---------- Main Page ----------

export default function HomePage() {
  const { t } = useTranslation('common');
  const homePageI18n = t('homePage', { returnObjects: true }) as any;
  const router = useRouter();
  const aboutRef = useRef<any>(null);
  const counterRef = useRef<any>(null);
  const aboutVisible = useSectionVisible(aboutRef, 0.2);
  const counterVisible = useSectionVisible(counterRef, 0.3);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Home Section */}
      <section className={styles.home}>
        <Image src={bgHome} alt="Home Banner" fill className={styles.homeBg} style={{ objectFit: "cover" }} priority />
        <div className={styles.homeOverlay} />
        <aside className={styles.homeLeftBar}>
          <span className={styles.homeLeftBarText}>{homePageI18n.home.leftBarText}</span>
          <span className={styles.homeLeftBarIcon}>
            <span className="material-symbols-outlined">mail</span>
          </span>
        </aside>
        <div className={styles.homeContent}>
          <h1 className={styles.homeTitleWhite}>{homePageI18n.home.titleWhite}</h1>
          <h1 className={styles.homeTitleOrange}>{homePageI18n.home.titleOrange}</h1>
          <p className={styles.homeDesc}>
            {homePageI18n.home.desc}
          </p>
          <div className={styles.btnHomeSection} onClick={() => router.push("/services")}>
            <span className={styles.exploreCircle}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
            <div className={styles.exploreText}>{homePageI18n.home.explore}</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className={styles.aboutSection} visibleRef={aboutRef} showClass={styles.show}>
        <div className={styles.aboutImages}>
          <div className={styles.aboutImgLeft}>
            <Image src={about01} alt="Truck" width={360} height={440} className={styles.aboutImg} />
          </div>
          <div className={styles.aboutImgRight}>
            <Image src={about02} alt="Warehouse" width={360} height={440} className={styles.aboutImg} />
          </div>
        </div>
        <div className={styles.aboutContent}>
          <h2>
            <span className={styles.aboutTitleBold}>{homePageI18n.about.titleBold}</span>
            <span className={styles.aboutTitleColor}>{homePageI18n.about.titleColor}</span>
          </h2>
          <p className={styles.aboutDesc}>
            {homePageI18n.about.desc}
          </p>
          <div className={styles.aboutActions}>
            <ButtonV2 label={homePageI18n.about.more} />
            <a className={styles.aboutBtnLink} href="#">{homePageI18n.about.discover}</a>
          </div>
          <div className={styles.aboutRating}>
            <span className={styles.aboutScore}>
              {aboutVisible ? <GlitchNumber targetValue={4.6} /> : "0.0"}
            </span>
            <span className={styles.aboutStars}>
              <StarRating score={5} />
            </span>
            <span className={styles.aboutReview}>
              {aboutVisible ? <GlitchNumber targetValue={262} duration={2000} stepTime={50} /> : ""} {homePageI18n.about.genuine}
            </span>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>
          {homePageI18n.services.title} <span className={styles.servicesTitleAccent}>{homePageI18n.services.accent}</span>
        </h2>
        <Carousel cards={serviceCards} />
      </section>

      {/* Counter Section */}
      <section className={styles.counterSection} ref={counterRef}>
        <div className={styles.counterBg} />
        <div className={styles.counterGrid}>
          {counterData.map((item, idx) => (
            <CounterItem key={idx} {...item} visible={counterVisible} />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className={styles.feedbackSection}>
        <div className={styles.feedbackContainer}>
          <div className={styles.feedbackLeft}>
            <Image src={feedback01} alt="Customer Feedback" className={styles.feedbackImage} width={200} height={400} priority />
            <div className={styles.feedbackScoreCard}>
              <div className={styles.feedbackScore}>4.28</div>
              <div className={styles.feedbackStars}>★★★★★</div>
              <div className={styles.feedbackReviews}>2467 {homePageI18n.feedback.reviews}</div>
              <div className={styles.feedbackExcellent}>{homePageI18n.feedback.excellent}</div>
              <div className={styles.feedbackBrand}>Hipster</div>
            </div>
          </div>
          <div className={styles.feedbackRight}>
            <h2 className={styles.feedbackTitle}>
              {homePageI18n.feedback.title} <span className={styles.feedbackAccent}>{homePageI18n.feedback.accent}</span>
            </h2>
            <FeedbackSlider />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.chooseSection}>
        <div className={styles.chooseContainer}>
          <div className={styles.chooseLeft}>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="Driver with tablet"
              className={styles.chooseImage}
            />
            <button className={styles.choosePlayBtn} onClick={() => setShowVideo(true)}>
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
          </div>
          <div className={styles.chooseRight}>
            <h2 className={styles.chooseTitle}>
              {homePageI18n.choose.title} <span className={styles.chooseAccent}>{homePageI18n.choose.accent}</span>
            </h2>
            <p className={styles.chooseDesc}>
              {homePageI18n.choose.desc}
            </p>
            <ul className={styles.chooseList}>
              <li><span className={styles.chooseCheck}>✓</span> {homePageI18n.choose.l1}</li>
              <li><span className={styles.chooseCheck}>✓</span> {homePageI18n.choose.l2}</li>
              <li><span className={styles.chooseCheck}>✓</span> {homePageI18n.choose.l3}</li>
            </ul>
            <ButtonV2 label={homePageI18n.choose.viewAll} />
          </div>
        </div>
      </section>

      {/* Video Popup */}
      {showVideo && (
        <div className={styles.videoPopupOverlay} onClick={() => setShowVideo(false)}>
          <div className={styles.videoPopup} onClick={e => e.stopPropagation()}>
            <button className={styles.videoPopupClose} onClick={() => setShowVideo(false)}>×</button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ borderRadius: 12, width: "100%", height: 350 }}
            ></iframe>
          </div>
        </div>
      )}

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <h2 className={styles.pricingTitle}>
          {homePageI18n.pricing.title} <span className={styles.pricingAccent}>{homePageI18n.pricing.accent}</span>
        </h2>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, idx) => (
            <PricingCard plan={plan} key={idx} />
          ))}
        </div>
      </section>
    </>
  );
}
