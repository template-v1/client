"use client";

import blog1 from "@/public/images/blog-01.jpg";
import blog2 from "@/public/images/blog-02.jpg";
import blog3 from "@/public/images/blog-03.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";

// BlogArticle component dùng chung
const BlogArticle = ({
  id,
  image,
  date,
  month,
  author,
  comments,
  title,
  description,
}: {
  id: string;
  image: any;
  date: string;
  month: string;
  author: string;
  comments: string;
  title: string;
  link: string;
  description: string;
}) => {
  const router = useRouter();
  const handalClick = () => {
    router.push(`blogs/${id}`);
  };

  return (
    <article className={`card card-style05 mt-2-2 wow`}>
      <div className="blog-img position-relative overflow-hidden">
        {typeof image === "string" ? (
          <img src={image} className="radius-top" alt="..." />
        ) : (
          <Image src={image} alt="" />
        )}
      </div>
      <div className="card-body position-relative pt-2-6 pb-1-9 pb-xl-2-6 px-1-9 px-xl-2-4">
        <div className="post-date">
          <span className="mb-0 d-block lh-1 display-17">{date}</span>
          <span className="d-block month">{month}</span>
        </div>
        <div className="text-uppercase fw-bold display-31 blog-tag me-4 position-relative">
          {author}
        </div>
        <div className="display-31">{comments}</div>
        <h3 className="h2 mb-3 mt-3">
          <div className="blog-title-hover" onClick={handalClick}>
            {title}
          </div>
        </h3>
        <p className="mb-0">{description}</p>
      </div>
    </article>
  );
};

const blogArticles = [
  {
    id: "1",
    image: blog1,
    date: "24",
    month: "Sep",
    author: "Admin",
    comments: "13 Comments",
    title: "The advantages of a digital supply strategy",
    link: "blog-details.html",
    description:
      "Jump into get refreshingly clear protection data and brilliant, straightforward plans to assist you with securing what makes a difference. It is a long established...",
    wowClass: "",
    wowDelay: "",
  },
  {
    id: "2",
    image: blog2,
    date: "21",
    month: "Sep",
    author: "Admin",
    comments: "08 Comments",
    title: "How will you know success when it show up?",
    link: "blog-details.html",
    description:
      "Jump into get refreshingly clear protection data and brilliant, straightforward plans to assist you with securing what makes a difference. It is a long established...",
  },
  {
    id: "3",
    image: blog3,
    date: "17",
    month: "Sep",
    author: "Admin",
    comments: "01 Comments",
    title: "We carefully handle the valueable goods",
    link: "blog-details.html",
    description:
      "Jump into get refreshingly clear protection data and brilliant, straightforward plans to assist you with securing what makes a difference. It is a long established...",
  },
];

const Page = () => {
  return (
    <div>
      {/* PAGE TITLE */}
      <section
        className="page-title-section bg-img cover-background left-overlay-secondary"
        data-overlay-dark="9"
        style={{
          backgroundImage: `url(/images/bg-contact.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-start">
                <div className="position-relative">
                  <h1>Blog Details</h1>
                </div>
                <ul>
                  <li>
                    <a href="https://kargonhtml.websitelayout.net/index.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">Blog Details</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {/* Blog Posts */}
            <div className="col-lg-8 mb-5 mb-lg-0 mt-n2-2">
              {blogArticles.map((item, idx) => (
                <BlogArticle key={idx} {...item} />
              ))}
              {/* Pagination */}
              <ul
                className="pagination justify-content-center d-sm-flex text-center mb-0 mt-6 mt-lg-7 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <li>
                  <a href="#">
                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
