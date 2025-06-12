import Slider from "react-slick";
import { StarRating } from "./StarRating";

const testimonials = [
  {
    text: `It fits our needs perfectly. I am completely blown away. Very easy to use. Nice work on your cargo. Thanks Kargon! Kargon has got everything I need.`,
    avatar: "https://kargonhtml.websitelayout.net/img/avatar/avatar-05.jpg",
    name: "Dennis Bulger",
  },
  {
    text: `I love your system. I have gotten at least 50 times the value from cargo. We have no regrets! I will recommend you to my colleagues.`,
    avatar: "https://kargonhtml.websitelayout.net/img/avatar/avatar-06.jpg",
    name: "John Horrocks",
  },
  {
    text: `It really saves me time and effort. Kargon is exactly what our business has been lacking. I will let my mum know about this, she could really make use of cargo!`,
    avatar: "https://kargonhtml.websitelayout.net/img/avatar/avatar-07.jpg",
    name: "Kristin Dixon",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="testimonial-carousel-two">
      {testimonials.map(({ text, avatar, name }, idx) => (
        <div key={idx} className="mb-lg-2-5">
          <p className="w-lg-85 mb-1-6 lh-lg">{text}</p>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 me-3">
              <img src={avatar} alt={name} className="rounded-circle w-90px" />
            </div>
            <div className="flex-grow-1">
              <div className="display-27">
                <span className="font-weight-800">{name.split(" ")[0]} </span>{" "}
                {name.split(" ").slice(1).join(" ")}
              </div>
              <div>
                <StarRating score={4} size={12}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
