"use client";
import { useSectionVisible } from "@/hooks/useSectionVisible";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import about01 from "@/public/images/about-01.jpg";
import about02 from "@/public/images/about-02.jpg";
import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";
import { GlitchNumber } from "@/components/ui/GlitchNumber";
import { Section } from "@/components/SectionRef";
import FadeInSection from "@/components/FadeInSection";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import service01 from "@/public/images/service-01.jpg";
import service02 from "@/public/images/service-02.jpg";
import service03 from "@/public/images/service-03.jpg";
import service04 from "@/public/images/service-04.jpg";
import service05 from "@/public/images/service-05.jpg";
import CounterItem from "@/components/CounterItem";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { IoIosPlay } from "react-icons/io";
import PricingCard from "@/components/ui/cards/PricingCard";

const serviceCards = [
  { src: service01, alt: "Warehousing", name: "service.warehousing" },
  { src: service02, alt: "Air Freight", name: "service.air" },
  { src: service03, alt: "Ocean Freight", name: "service.ocean" },
  { src: service04, alt: "Road Freight", name: "service.road" },
  { src: service05, alt: "Extra Service", name: "service.extra" },
];

const counterData = [
  {
    icon: "https://kargonhtml.websitelayout.net/img/icons/icon-14.png",
    value: 35,
    label: "+ Years of Experience",
    delay: 200,
  },
  {
    icon: "https://kargonhtml.websitelayout.net/img/icons/icon-15.png",
    value: 528,
    label: "+ Cities Served Worldwide",
    delay: 350,
  },
  {
    icon: "https://kargonhtml.websitelayout.net/img/icons/icon-16.png",
    value: 475,
    label: "+ Satisfied Clients",
    delay: 500,
  },
  {
    icon: "https://kargonhtml.websitelayout.net/img/icons/icon-17.png",
    value: 45,
    label: "+ Company We Help",
    delay: 650,
  },
];

const pricingData = [
  {
    iconUrl: "https://kargonhtml.websitelayout.net/img/icons/icon-1.png",
    title: "Basic",
    price: 149,
    priceSuffix: "/ mo",
    description: "Our best professional rates",
    features: [
      "1 Warehouse",
      "Custom Business Rules",
      "Realtime Rate Shopping",
      <del key="d1">50 Freight Shipments</del>,
      <del key="d2">Not Included Insurance</del>,
    ],
    buttonUrl: "https://kargonhtml.websitelayout.net/contact.html",
    buttonText: "Choose Plans",
    wowDelay: "200ms",
  },
  {
    iconUrl: "https://kargonhtml.websitelayout.net/img/icons/icon-2.png",
    title: "Premium",
    price: 169,
    priceSuffix: "/ mo",
    description: "Our best professional rates",
    features: [
      "1 Warehouse",
      "Custom Business Rules",
      "Realtime Rate Shopping",
      "75 Freight Shipments",
      <del key="d1">Included Insurance</del>,
    ],
    buttonUrl: "https://kargonhtml.websitelayout.net/contact.html",
    buttonText: "Choose Plans",
    wowDelay: "350ms",
  },
  {
    iconUrl: "https://kargonhtml.websitelayout.net/img/icons/icon-3.png",
    title: "Gold",
    price: 199,
    priceSuffix: "/ mo",
    description: "Our best professional rates",
    features: [
      "2 Warehouse",
      "Custom Business Rules",
      "Realtime Rate Shopping",
      "10 Freight Shipments",
      "Included Insurance",
    ],
    buttonUrl: "https://kargonhtml.websitelayout.net/contact.html",
    buttonText: "Choose Plans",
    wowDelay: "500ms",
  },
];

export default function HomePage() {
  const { t } = useTranslation("common");
  const homePageI18n = t("homePage", { returnObjects: true }) as any;
  const router = useRouter();
  const aboutRef = useRef<any>(null);
  const counterRef = useRef<any>(null);
  const aboutVisible = useSectionVisible(aboutRef, 0.2);
  const counterVisible = useSectionVisible(counterRef, 0.3);
  const [showVideo, setShowVideo] = useState(false);
  const allCards = [...serviceCards, ...serviceCards];

  return (
    <>
      {/* Home Section */}
      <section
        className="p-0 bg-img cover-background full-screen banner-style01 left-overlay-secondary"
        data-overlay-dark="95"
        style={{
          backgroundImage: `url(/images/bg-home.jpg)`,
        }}
      >
        <div className="container d-flex flex-column position-relative z-index-9">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-10 col-xl-8 col-xxl-7 mt-5 mt-sm-0">
              <div className="section-title01">
                <h1
                  className="display-1 font-weight-800 text-shadow text-white ls-minus-2px lh-1 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <FadeInSection>
                    <span>Fast and Safe </span>
                    <span className="text-primary">Transportation.</span>
                  </FadeInSection>
                </h1>
                <FadeInSection transition={{ duration: 1.2 }}>
                  <p
                    className="w-80 w-lg-70 font-weight-500 display-27 mb-4 text-white opacity5 d-none d-sm-block wow fadeInUp"
                    data-wow-delay="350ms"
                  >
                    We pride ourselves on providing the best transport services
                    currently available allover the world.
                  </p>
                </FadeInSection>
              </div>
              <div
                className="banner-button wow fadeInUp"
                data-wow-delay="500ms"
              >
                <FadeInSection
                  className="d-flex align-items-center"
                  transition={{ duration: 1.8 }}
                >
                  <span className="button-arrow">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </span>
                  <div className="button-text">
                    <span className="text-white text-primary-hover">
                      Explore services
                    </span>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
        <div className="left-text d-none d-xxl-block">
          <span className="d-flex align-items-center justify-content-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            Get our service - Send a message
          </span>
        </div>
      </section>

      {/* <!-- ABOUT US ================================================== --> */}
      <Section
        className="about-style01"
        visibleRef={aboutRef}
        showClass="showSection"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 mb-2-6 mb-sm-12 mb-lg-0 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <FadeInSection>
                <div className="position-relative">
                  <Image src={about01} alt="" />
                  <div className="left-img d-none d-sm-block">
                    <Image src={about02} alt="" />
                  </div>
                </div>
              </FadeInSection>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div
                className="section-title01 mb-md-1-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <FadeInSection>
                  <h2 className="display-5 font-weight-800 mb-md-0">
                    <span>About</span>
                    <span className="text-primary">Company</span>
                  </h2>
                </FadeInSection>
              </div>
              <FadeInSection transition={{ duration: 1.2 }}>
                <p
                  className="mb-1-9 w-xl-80 wow fadeInUp"
                  data-wow-delay="350ms"
                >
                  We pride ourselves on providing the best transport and
                  shipping services available allover the world. Our skilled
                  personnel.
                </p>
              </FadeInSection>
              <FadeInSection transition={{ duration: 2 }}>
                <div
                  className="mb-2 mb-sm-5 d-sm-flex align-items-center wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <a
                    href="https://kargonhtml.websitelayout.net/about.html"
                    className="butn-style2 me-1-6 mb-3 mb-sm-0"
                  >
                    More About Us
                  </a>
                  <div className="button-text mb-3 mb-sm-0 d-block d-sm-inline-block">
                    <a
                      href="https://kargonhtml.websitelayout.net/about.html"
                      className="text-secondary text-primary-hover"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div
                    className="col-sm-4 col-md-3 col-lg-6 col-xl-4 wow fadeInUp"
                    data-wow-delay="650ms"
                  >
                    <div className="mb-0 text-start text-sm-center border-sm-end mb-3 mb-sm-0">
                      <div className="display-2 font-weight-800 mb-0 text-secondary">
                        <div className="odometer odometer-auto-theme">
                          {aboutVisible ? (
                            <GlitchNumber targetValue={4.6} />
                          ) : (
                            "0.0"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-xl-7 wow fadeInUp"
                    data-wow-delay="800ms"
                  >
                    <div className="ms-sm-2">
                      <StarRating score={5} />
                      <div className="display-28 font-weight-500">
                        <div className="odometer odometer-auto-theme">
                          {aboutVisible ? (
                            <GlitchNumber
                              targetValue={262}
                              duration={2000}
                              stepTime={50}
                            />
                          ) : (
                            "0.0"
                          )}
                        </div>
                        + Genuine Ratings
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </Section>

      {/* <!-- SERVICES================================================== --> */}
      <section>
        <div className="processHeader">
          <h2>
            <span>Logistics </span>
            <span className="text-primary">Service</span>
          </h2>
        </div>
        <div className="processSliderWrapper">
          <div className="processSlider">
            {allCards.map((card, idx) => (
              <ServiceCard
                src={card.src}
                alt={card.alt}
                name={card.name}
                key={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- COUNTER ================================================== --> */}
      <section
        className="bg-img cover-background secondary-overlay"
        data-overlay-dark="8"
        data-background="https://kargonhtml.websitelayout.net/img/bg/bg-06.jpg"
        ref={counterRef}
      >
        <div className="container">
          <div className="row mt-n1-9">
            {counterData.map((item, idx) => (
              <CounterItem
                key={idx}
                icon={item.icon}
                value={item.value}
                label={item.label}
                visible={counterVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIALS ================================================== --> */}
      <section className="testimonials-style01">
        <div className="container">
          <div className="row align-items-xxl-center position-relative z-index-9 mt-n1-9">
            <div className="col-lg-6 mt-1-9">
              <div className="ps-xl-14 position-relative">
                <img
                  src="https://kargonhtml.websitelayout.net/img/content/testimonial-01.jpg"
                  alt="..."
                />
                <div className="left-box d-none d-sm-block">
                  <div className="inner-box">
                    <h1>4.28</h1>
                    <div className="d-flex align-items-center justify-content-center">
                      <StarRating score={4.5} />
                    </div>
                    <span className="text-dark font-weight-700 lh-lg">
                      2467 Reviews
                    </span>
                    <div className="box-tag">Excellent score</div>
                  </div>
                  <img
                    src="https://kargonhtml.websitelayout.net/img/clients/11.png"
                    alt="..."
                    className="mb-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 mt-1-9">
              <FadeInSection>
                <div className="section-title01 mb-1-6 mb-md-2-6">
                  <h2 className="display-5 font-weight-800 mb-md-0">
                    <span>Customers</span>
                    <span className="text-primary">Feedback</span>
                  </h2>
                </div>
                <TestimonialCarousel />
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- WHY CHOOSE US ================================================== --> */}
      <section className="py-0 why-choose-style2">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 col-xl-7 d-none d-lg-block">
              <div
                className="bg-img cover-background h-100 overflow-visible"
                style={{
                  backgroundImage: `url(https://kargonhtml.websitelayout.net/img/content/why-choose-us-02.jpg)`,
                }}
              >
                <div className="story-video position-absolute top-50 start-100 translate-middle d-none d-lg-block">
                  <a
                    className="video"
                    href="https://www.youtube.com/watch?v=KEFt2quibkg"
                  >
                    <IoIosPlay fontSize={50} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="right-content">
                <div
                  className="section-title01 mb-1-6 mb-md-2-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <h2 className="display-5 font-weight-800 mb-md-0">
                    <span>Why You</span>
                    <span className="text-primary">Choose Us</span>
                  </h2>
                </div>
                <p
                  className="w-lg-95 mb-1-9 mb-md-2-2 wow fadeInUp"
                  data-wow-delay="350ms"
                >
                  You can know the price for your transportation in advance. We
                  offers intellgent concepts for road and tail and well as
                  complex special transport services.We provide excellent
                  service across the country.
                </p>
                <ul
                  className="list-unstyled list-style9 mb-2-1 mb-md-2-8 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <li>Supply Chain Solutions.</li>
                  <li> End-to-End Transportation.</li>
                  <li>Warehousing & Distribution.</li>
                </ul>
                <div className="wow fadeInUp" data-wow-delay="650ms">
                  <a
                    href="https://kargonhtml.websitelayout.net/services.html"
                    className="butn-style2"
                  >
                    View All Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PRICING ================================================== --> */}
      <section>
        <div className="container">
          <div
            className="section-title01 mb-1-6 mb-md-2-6 text-center wow fadeInUp"
            data-wow-delay="200ms"
          >
            <h2 className="display-5 font-weight-800 mb-md-0">
              <span>Choose</span>
              <span className="text-primary">Perfect Plan</span>
            </h2>
          </div>
          <div className="row g-lg-5 mt-n2-9">
            {pricingData.map((plan, idx) => (
              <PricingCard key={idx} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
