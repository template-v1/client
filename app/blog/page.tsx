"use client";

import FadeInSection from "@/components/FadeInSection";
import bgContact from "@/public/images/bg-contact.jpg";
import blogImg from "@/public/images/blog-01.jpg";
import styles from "@/styles/BlogPage.module.css";
import Image from "next/image";
import React from "react";
import {
  FaCalendar,
  FaComment,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useTranslation } from "next-i18next";

// CommentItem component
type CommentItemProps = {
  avatar: string;
  name: string;
  text: string;
};

const CommentItem: React.FC<CommentItemProps> = ({ avatar, name, text }) => (
  <div className="d-flex align-items-start mb-3">
    <img src={avatar} alt={name} className={styles.commentAvatar} />
    <div>
      <div className={styles.commentName}>{name}</div>
      <div className={styles.commentText}>{text}</div>
      <div className={styles.commentReply}>Reply</div>
    </div>
  </div>
);

const BlogPage = () => {
  const { t } = useTranslation("common");
  const blogPage = t("blogPage", { returnObjects: true }) as any;

  return (
    <div>
      {/* Banner */}
      <div className="position-relative" style={{ height: "50vh", overflow: "hidden" }}>
        <Image
          src={bgContact}
          alt="Contact Banner"
          className="position-absolute w-100 h-100"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className="container py-4 px-4 px-md-5">
            <div className="w-100 text-center text-md-start">
              <h1 className="text-white fw-bold display-4 mb-2">{blogPage.banner?.title}</h1>
              <div className="d-flex align-items-center gap-2 gap-md-3 justify-content-center justify-content-md-start text-white fs-5">
                <span>{blogPage.banner?.breadcrumbHome}</span>
                <span className={styles.breadcrumbDivider}></span>
                <span className={styles.breadcrumbCurrent}>
                  {blogPage.banner?.breadcrumbCurrent}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive layout: main left, sidebar right, sidebar xuống dưới ở mobile */}
      <div className="container my-5">
        <div className="row gx-4 gy-5">
          {/* Main Content */}
          <div className="col-12 col-lg-8">
            <FadeInSection className="bg-white rounded-3 shadow p-4 p-lg-5">
              <FadeInSection>
                <Image
                  src={blogImg}
                  alt="Blog"
                  width={900}
                  height={400}
                  className="rounded-3 w-100 mb-4"
                  style={{ objectFit: "cover" }}
                />
              </FadeInSection>

              <FadeInSection>
                <div className="d-flex align-items-center gap-4 mb-3">
                  <span className="d-flex align-items-center gap-2">
                    <FaUser /> {blogPage.meta?.author}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <FaCalendar /> {blogPage.meta?.date}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <FaComment /> {blogPage.meta?.comments}
                  </span>
                </div>
                <hr />
                <div className="text-secondary fs-5 lh-lg">
                  <p>{blogPage.content?.p1}</p>
                  <p>{blogPage.content?.p2}</p>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className={styles.quoteBox}>
                  <span className={styles.quoteMark}>{blogPage.quote?.mark}</span>
                  <span>
                    <em>{blogPage.quote?.text}</em>
                    <div className={styles.quoteAuthor}>
                      – <b>{blogPage.quote?.author}</b>
                    </div>
                  </span>
                </div>
              </FadeInSection>

              <FadeInSection>
                <p className="mb-3 text-secondary">{blogPage.content?.p3}</p>
                <p className="mb-3 text-secondary">{blogPage.content?.p4}</p>
              </FadeInSection>

              <FadeInSection>
                <div className="d-flex gap-3 mb-3 flex-wrap">
                  <img
                    src="/images/truck.jpg"
                    alt="Truck"
                    className={styles.imgRowItem}
                  />
                  <img
                    src="/images/container.jpg"
                    alt="Container"
                    className={styles.imgRowItem}
                  />
                  <img
                    src="/images/ship.jpg"
                    alt="Ship"
                    className={styles.imgRowItem}
                  />
                </div>
                <p className="mb-3 text-secondary">{blogPage.content?.p5}</p>
              </FadeInSection>

              <FadeInSection>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mt-4 pt-3 border-top">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <b>{blogPage.tags?.label}</b>
                    {blogPage.tags?.items?.map((tag: string) => (
                      <span key={tag} className={styles.tagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <b>{blogPage.share?.label}</b>
                    <a href="#" className={styles.socialBtn}>
                      <FaFacebookF />
                    </a>
                    <a href="#" className={styles.socialBtn}>
                      <FaXTwitter />
                    </a>
                    <a href="#" className={styles.socialBtn}>
                      <FaYoutube />
                    </a>
                    <a href="#" className={styles.socialBtn}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Author Box */}
                <div className={`${styles.authorBox} d-flex align-items-start mt-4`}>
                  <img
                    src="https://kargonhtml.websitelayout.net/img/avatar/avatar-01.jpg"
                    alt="Author"
                    className={styles.commentAvatar}
                  />
                  <div>
                    <div className={styles.authorName}>{blogPage.author?.name}</div>
                    <div className={styles.authorDate}>{blogPage.author?.date}</div>
                    <div className={styles.authorDesc}>{blogPage.author?.desc}</div>
                    <div className="d-flex gap-2">
                      <a href="#"><FaFacebookF /></a>
                      <a href="#"><FaXTwitter /></a>
                      <a href="#"><FaInstagram /></a>
                      <a href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className={`${styles.commentsBox} mt-4`}>
                  <div className={styles.commentsTitle}>
                    {blogPage.comments?.title}
                  </div>
                  {blogPage.comments?.items?.map((c: any, idx: number) => (
                    <CommentItem
                      key={idx}
                      avatar={c.avatar}
                      name={c.name}
                      text={c.text}
                    />
                  ))}
                </div>

                {/* Leave a Reply Form */}
                <div className={`${styles.replyBox} mt-4`}>
                  <div className={styles.replyTitle}>{blogPage.reply?.title}</div>
                  <form>
                    <textarea
                      className={styles.replyTextarea}
                      placeholder={blogPage.reply?.placeholder}
                      required
                    />
                    <div className="row g-2 mt-2">
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          className={styles.replyInput}
                          placeholder={blogPage.reply?.name}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="email"
                          className={styles.replyInput}
                          placeholder={blogPage.reply?.email}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className={styles.replyBtn}>
                      {blogPage.reply?.button}
                    </button>
                  </form>
                </div>
              </FadeInSection>
            </FadeInSection>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <FadeInSection className="d-flex flex-column gap-4">
              {/* Search box */}
              <FadeInSection>
                <div className={styles.sidebarBox}>
                  <form className="d-flex">
                    <input
                      type="text"
                      placeholder={blogPage.sidebar?.search}
                      className="form-control rounded-start"
                    />
                    <button type="submit" className="btn btn-danger rounded-end">
                      <span>🔍</span>
                    </button>
                  </form>
                </div>
              </FadeInSection>

              {/* Recent Posts */}
              <FadeInSection>
                <div className={styles.sidebarBox}>
                  <div className={styles.sidebarTitle}>
                    {blogPage.sidebar?.recentTitle}
                  </div>
                  <div className={styles.sidebarContent}>
                    {blogPage.sidebar?.recentPosts?.map((post: any, idx: number) => (
                      <div className="d-flex gap-2 mb-3 align-items-start" key={idx}>
                        <img
                          src={post.img}
                          alt=""
                          className={styles.recentPostImg}
                        />
                        <div>
                          <div className={styles.recentPostDate}>{post.date}</div>
                          <div className={styles.recentPostTitle}>{post.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Categories */}
              <FadeInSection>
                <div className={styles.sidebarBox}>
                  <div className={styles.sidebarTitle}>
                    {blogPage.sidebar?.categoriesTitle}
                  </div>
                  <div className={styles.sidebarContent}>
                    {blogPage.sidebar?.categories?.map((cat: any, idx: number) => (
                      <div key={cat.name} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className={styles.categoryName}>{cat.name}</span>
                        <span className={styles.categoryCount}>({cat.count})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Tags */}
              <FadeInSection>
                <div className={styles.sidebarBox}>
                  <div className={styles.sidebarTitle}>
                    {blogPage.sidebar?.tagsTitle}
                  </div>
                  <div className="d-flex flex-wrap gap-2 p-3">
                    {blogPage.sidebar?.tags?.map((tag: string) => (
                      <span key={tag} className={styles.tagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Follow Us */}
              <FadeInSection>
                <div className={styles.sidebarBox}>
                  <div className={styles.sidebarTitle}>
                    {blogPage.sidebar?.followTitle}
                  </div>
                  <div className="d-flex gap-2 p-3">
                    <a href="#" className={styles.socialBtn}>
                      <FaFacebookF />
                    </a>
                    <a href="#" className={styles.socialBtn}>
                      <FaXTwitter />
                    </a>
                    <a href="#" className={styles.socialBtn}>
                      <FaYoutube />
                    </a>
                    <a href="#" className={styles.socialBtn}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </FadeInSection>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
