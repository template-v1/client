"use client";

import FadeInSection from "@/components/FadeInSection";
import { useTranslation } from "next-i18next";
import { FaSearch } from "react-icons/fa";
import {
  FaCalendar,
  FaComment,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Sidebar from "../sidebar";

// CommentItem component
type CommentItemProps = {
  avatar: string;
  name: string;
  text: string;
};

const BlogPage = () => {
  const { t } = useTranslation("common");
  const blogPage = t("blogPage", { returnObjects: true }) as any;

  return (
    <div>
      {/* PAGE TITLE
        ================================================== */}
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

      {/* BLOG DETAILS
        ================================================== */}
      <section>
        <div className="container">
          <div className="row mt-n2-9">
            <div className="col-lg-8 mt-2-9">
              <div className="row">
                <div className="col-lg-12 mb-6">
                  <article>
                    <FadeInSection>
                      <img
                        src="https://kargonhtml.websitelayout.net/img/blog/blog-01.jpg"
                        alt="..."
                        className="mb-2-6 wow fadeInUp"
                        data-wow-delay="200ms"
                      />
                    </FadeInSection>
                    <div>
                      <FadeInSection>
                        <ul
                          className="list-unstyled d-flex align-items-center border-bottom pb-3 mb-4 gap-4 wow fadeInUp"
                          data-wow-delay="200ms"
                        >
                          <li className="d-flex align-items-center text-capitalize">
                            <a
                              href="#"
                              title="Posts by admin"
                              rel="author"
                              className="d-flex align-items-center text-decoration-none text-dark"
                            >
                              <FaUser className="text-primary me-2" />
                              admin
                            </a>
                          </li>
                          <li className="d-flex align-items-center text-capitalize">
                            <FaCalendar className="text-primary me-2" />
                            May 25, 2025
                          </li>
                          <li className="d-flex align-items-center text-capitalize">
                            <a
                              href="#"
                              className="d-flex align-items-center text-decoration-none text-dark"
                            >
                              <FaComment className="text-primary me-2" />
                              10 Comment
                            </a>
                          </li>
                        </ul>
                      </FadeInSection>

                      <FadeInSection>
                        <p className="mb-4 wow fadeInUp" data-wow-delay="200ms">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop.
                        </p>
                        <p className="mb-4 wow fadeInUp" data-wow-delay="200ms">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries.
                        </p>
                      </FadeInSection>

                      <FadeInSection>
                        <blockquote
                          className="mb-4 bg-light fst-italic font-weight-600 px-5 py-4 position-relative wow fadeInu"
                          data-wow-delay="100ms"
                        >
                          {/* Có thể thêm icon quote nếu muốn */}
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                          <h6
                            className="mb-0 mt-4 wow fadeInUp"
                            data-wow-delay="200ms"
                          >
                            – Victoria Fawsitt
                          </h6>
                        </blockquote>
                      </FadeInSection>
                      <FadeInSection>
                        <p className="mb-4 wow fadeInUp" data-wow-delay="200ms">
                          consectetur adipisicing elit sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. ut enim
                          ad minim veniam quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. duis
                          aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. excepteur
                          sint occaecat cupidatat non proident minim veniam.
                        </p>
                        <p className="mb-4 wow fadeInUp" data-wow-delay="200ms">
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur, adipisci velit, sed
                          quia non numquam eius.
                        </p>
                      </FadeInSection>
                      <FadeInSection>
                        <div
                          className="row mt-n4 mb-4 wow fadeInUp"
                          data-wow-delay="200ms"
                        >
                          <div className="col-md-4 mt-4">
                            <img
                              src="https://kargonhtml.websitelayout.net/img/blog/blog-detail-01.jpg"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-4 mt-4">
                            <img
                              src="https://kargonhtml.websitelayout.net/img/blog/blog-detail-02.jpg"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-4 mt-4">
                            <img
                              src="https://kargonhtml.websitelayout.net/img/blog/blog-detail-03.jpg"
                              alt="..."
                            />
                          </div>
                        </div>
                      </FadeInSection>
                      <FadeInSection>
                        <p className="mb-4 wow fadeInUp" data-wow-delay="200ms">
                          If you are going to use a passage of Lorem Ipsum, you
                          need to be sure there isn't anything embarrassing
                          hidden in the middle of text. All the Lorem Ipsum
                          generators on the Internet tend to repeat predefined
                          chunks as necessary, making this the first true
                          generator on the Internet.
                        </p>
                      </FadeInSection>
                      <div className="border-top border-color-light-black pt-5 g-0 d-md-flex align-items-center entry-footer float-start w-100">
                        <div className="tags flex-grow-1 mb-4 mb-md-0 pe-md-3">
                          <label className="h6 me-3 mb-0">Tags:</label>
                          <a href="#" rel="tag">
                            Logistic
                          </a>
                        </div>
                        <FadeInSection>
                          <div
                            className="blog-share-icon wow fadeInUp"
                            data-wow-delay="200ms"
                          >
                            <label className="h6 me-1 mb-0">Share:</label>
                            <ul className="share-post social-icon-style2-v2">
                              <li>
                                <a
                                  title="Facebook"
                                  href="#"
                                  aria-label="Share on Facebook"
                                >
                                  <FaFacebookF />
                                </a>
                              </li>
                              <li>
                                <a
                                  title="Twitter"
                                  href="#"
                                  aria-label="Share on Twitter"
                                >
                                  <FaXTwitter />
                                </a>
                              </li>
                              <li>
                                <a
                                  title="Pinterest"
                                  href="#"
                                  aria-label="Share on Instagram"
                                >
                                  <FaInstagram />
                                </a>
                              </li>
                              <li>
                                <a
                                  title="LinkedIn"
                                  href="#"
                                  aria-label="Share on LinkedIn"
                                >
                                  <FaLinkedinIn />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </FadeInSection>
                      </div>
                    </div>
                  </article>
                </div>
                <div
                  className="col-lg-12 mb-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="blog-comment primary-shadow border-radius-5 p-4 p-md-5 p-sm-6 position-relative">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img
                          src="https://kargonhtml.websitelayout.net/img/avatar/avatar-01.jpg"
                          alt="..."
                          className="border-radius-5"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="mb-3">
                          <h4 className="h5 mb-0">Josef Massey</h4>
                          <span className="small text-muted">12 May 2025</span>
                        </div>
                        <p>
                          But must explain to you how all this mistaken idea
                          denouncing pleasure and praising pain was born and I
                          will give you a complete account of the system, and
                          expound the actual teachings
                        </p>
                        <ul className="list-unstyled ps-0 mb-0">
                          <li className="d-inline-block me-3">
                            <a href="#">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li className="d-inline-block me-3">
                            <a href="#">
                              <FaXTwitter />
                            </a>
                          </li>
                          <li className="d-inline-block me-3">
                            <a href="#">
                              <FaInstagram />
                            </a>
                          </li>
                          <li className="d-inline-block">
                            <a href="#">
                              <FaLinkedinIn />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* comment */}
                <div
                  className="col-12 mb-5 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="primary-shadow p-1-9 p-md-5">
                    <span className="text-primary fw-bold display-25 d-block mb-4">
                      #Comments
                    </span>
                    <div className="d-flex border-bottom pb-4 mb-5">
                      <div className="flex-shrink-0">
                        <img
                          src="https://kargonhtml.websitelayout.net/img/avatar/avatar-02.jpg"
                          className="border-radius-5"
                          alt="..."
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h5 mb-2">Denis Irwin</h4>
                        <p className="mb-1">
                          xcepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a className="text-primary  small" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="d-flex border-bottom pb-4 mb-5">
                      <div className="flex-shrink-0">
                        <img
                          src="https://kargonhtml.websitelayout.net/img/avatar/avatar-03.jpg"
                          className="border-radius-5"
                          alt="..."
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h5 mb-2">Bruno Roach</h4>
                        <p className="mb-1">
                          xcepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a className="text-primary  small" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img
                          src="https://kargonhtml.websitelayout.net/img/avatar/avatar-04.jpg"
                          className="border-radius-5"
                          alt="..."
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h5 mb-2">John Martin</h4>
                        <p className="mb-1">
                          xcepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a className="text-primary  small" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end comment*/}

                <div className="col-12 wow fadeInUp" data-wow-delay="200ms">
                  <span className="text-primary fw-bold display-25 d-block mb-4">
                    #Leave a reply
                  </span>

                  {/* Form */}
                  <form>
                    <div className="row">
                      <div className="form-group">
                        <textarea
                          name="reply"
                          rows={6}
                          className="form-control h-100"
                          placeholder="Your Reply"
                        ></textarea>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="butn-style1 medium" type="submit">
                        Leave a Reply
                      </button>
                    </div>
                  </form>
                  {/* End Form */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-2-9">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
