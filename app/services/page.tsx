"use client";

import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import service01 from "@/public/images/service-01.jpg";
import service02 from "@/public/images/service-02.jpg";
import service03 from "@/public/images/service-03.jpg";
import service04 from "@/public/images/service-04.jpg";
import service05 from "@/public/images/service-05.jpg";
import service06 from "@/public/images/service-06.jpg";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import PricingCard from "@/components/ui/cards/PricingCard";
import ContactForm from "@/components/ui/contactForm/ContactForm";
import FadeInSection from "@/components/FadeInSection";
import { toastCustom } from "@/configs/toastCustom";
import { createContactMessage } from "@/services/contact.service";

const services = [
  {
    src: service01,
    name: "Warehousing",
    link: "/services/warehousing",
  },
  {
    src: service02,
    name: "Air Freight",
    link: "/services/air-freight",
  },
  {
    src: service03,
    name: "Ocean Freight",
    link: "/services/ocean-freight",
  },
  {
    src: service04,
    name: "Road Freight",
    link: "/services/road-freight",
  },
  {
    src: service05,
    name: "Rail Freight",
    link: "/services/rail-freight",
  },
  {
    src: service06,
    name: "Logistic Solution",
    link: "/services/solution",
  },
];

const pricing = [
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

const faqs = [
  {
    question: "Can I specify a delivery date when ordering?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
  {
    question: "How can I track my shipments?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
  {
    question: "What is included in your services?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
  {
    question: "How can I safely use files?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Order Processing",
    desc: "The logistics process begins with the receipt of customer...",
  },
  {
    step: "02",
    title: "Warehousing",
    desc: "Goods that are ready for shipment are stored in warehouses or...",
  },
  {
    step: "03",
    title: "Order Tracking",
    desc: "Real-time tracking systems are used to monitor the...",
  },
  {
    step: "04",
    title: "Product Delivery",
    desc: "In the final stage of logistics services.",
  },
];

const ServicePage = () => {
  const { t } = useTranslation("common");
  const [openIdx, setOpenIdx] = useState<number>(0);

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: "",
    captcha: "",
  });

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createContactMessage(data);
    if (res.status) {
      toastCustom({ type: "success" });
      setData({
        name: "",
        email: "",
        subject: "",
        contactNumber: "",
        message: "",
        captcha: "",
      });
    }
  };

  return (
    <div>
      {/* PAGE TITLE */}
      <section
        className="page-title-section bg-img cover-background left-overlay-secondary"
        data-overlay-dark="9"
        data-background="https://kargonhtml.websitelayout.net/img/bg/bg-01.jpg"
        style={{
          backgroundImage: `url(/images/bg-contact.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-start">
                <div className="position-relative">
                  <h1>Services</h1>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="container">
          <FadeInSection>
            <div className="mb-1-9 mb-md-5 text-center">
              <span className="text-primary display-30 pb-3 text-uppercase lh-1 font-weight-700 mb-1 d-block">
                01 _ Our Services
              </span>
              <h2 className="ls-minus-2px display-5 font-weight-800 lh-1 mb-0">
                Logistics services
              </h2>
            </div>
          </FadeInSection>
          <div className="row mt-n2-9">
            {services.map((s, idx) => (
              <div className="col-lg-4 mt-2-9" key={idx}>
                <ServiceCard src={s.src} alt={s.name} name={s.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA */}
      <section
        className="bg-img cover-background secondary-overlay"
        data-overlay-dark="85"
        data-background="https://kargonhtml.websitelayout.net/img/bg/bg-07.jpg"
      >
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-11 col-xxl-9">
              <FadeInSection>
                <h2 className="display-4 font-weight-800 lh-1 mb-1-9 mb-md-5 text-white">
                  Looking for the best logistics transport service?
                </h2>
                <a href="/contact" className="butn-style3">
                  <span>Contact Us</span>
                </a>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-light">
        <div className="container">
          <div className="mb-1-9 mb-md-5 text-center">
            <span className="text-primary display-30 pb-3 text-uppercase lh-1 font-weight-700 mb-1 d-block">
              02 _ Our Process
            </span>
            <h2 className="ls-minus-2px display-5 font-weight-800 lh-1 mb-0 w-sm-80 w-md-70 w-md-60 w-lg-50 w-xl-40 mx-auto">
              Easy steps to receive your cargo
            </h2>
          </div>
          <div className="processSliderV2">
            <div className="slider-track">
              {[...processSteps, ...processSteps].map((step, idx) => (
                <div className="slider-item" key={idx}>
                  <div className="process-style01 text-center mb-4">
                    <span>Step {step.step}</span>
                    <h5 className="process-no">{step.step}</h5>
                    <h3 className="h5">{step.title}</h3>
                    <p className="w-90 mx-auto mb-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PRICING ================================================== --> */}
      <section className="d-none">
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
            {pricing.map((plan, idx) => (
              <PricingCard key={idx} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CONTACT */}
      <section className="position-relative bg-light">
        <div className="container">
          <div className="row mt-n1-9">
            <div className="col-lg-7 mt-1-9">
              <div className="pe-xl-6">
                <FadeInSection>
                  <div className="mb-1-9 mb-md-5">
                    <span className="text-primary display-30 pb-3 text-uppercase lh-1 font-weight-700 mb-1 d-block">
                      04 _ Experts in Technology Fields
                    </span>
                    <h2 className="ls-minus-2px display-5 font-weight-800 lh-1 mb-0">
                      Leading global logistic and transport agency
                    </h2>
                  </div>
                  <div id="accordion" className="accordion-style">
                    {faqs.map((faq, idx) => (
                      <div
                        className="card mb-4"
                        key={idx}
                        onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                      >
                        <h5 className="mb-0">
                          <button
                            className={`btn btn-link${
                              openIdx === idx ? "" : " collapsed"
                            }`}
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${idx}`}
                            aria-expanded={idx === 0}
                            aria-controls={`collapse${idx}`}
                          >
                            {faq.question}
                          </button>
                        </h5>
                        {openIdx === idx && (
                          <div className="card-body">{faq.answer}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div className="col-lg-5 mt-1-9">
              <FadeInSection transition={{ duration: 1.2 }}>
                <ContactForm
                  onSubmit={submitForm}
                  form={data}
                  setForm={setData}
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
