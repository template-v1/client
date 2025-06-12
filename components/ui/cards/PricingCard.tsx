import React from "react";

interface PricingCardProps {
  iconUrl: string;
  title: string;
  price: number;
  priceSuffix: string;
  description: string;
  features: (string | React.ReactNode)[];
  buttonUrl: string;
  buttonText: string;
  wowDelay: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  iconUrl,
  title,
  price,
  priceSuffix,
  description,
  features,
  buttonUrl,
  buttonText,
  wowDelay,
}) => {
  return (
    <div
      className="col-md-6 col-xl-4 mt-2-9 wow fadeInUp"
      data-wow-delay={wowDelay}
    >
      <div className="card card-style06 rounded-0 border-0">
        <div className="d-flex align-items-center border-bottom border-primary px-1-9 px-md-2-6 py-1-9 py-md-2-3">
          <div className="flex-shrink-0 card-icon mb-4">
            <img src={iconUrl} alt={`${title} icon`} className="w-65px" />
          </div>
          <div className="flex-grow-1 ms-3 ms-sm-5 ms-md-3 ms-xxl-4">
            <h4>{title}</h4>
            <h2>
              ${price} <span className="display-30 font-weight-400">{priceSuffix}</span>
            </h2>
            <p className="mb-0">{description}</p>
          </div>
        </div>
        <div className="pb-1-9 pb-md-2-3 pt-2-6 px-1-9 px-md-2-6">
          <ul className="list-unstyled list-style5 mb-2-9">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <div className="position-relative z-index-9 text-center">
            <a href={buttonUrl} className="butn-style2 w-100">
              <span className="text-white">{buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
