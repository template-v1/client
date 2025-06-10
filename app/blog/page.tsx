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

// CommentItem component dùng chung cho phần bình luận
type CommentItemProps = {
  avatar: string;
  name: string;
  text: string;
};

const CommentItem: React.FC<CommentItemProps> = ({ avatar, name, text }) => (
  <div className={styles.commentItem}>
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
            <h1 className={styles.bannerTitle}>{blogPage.banner?.title}</h1>
            <div className={styles.breadcrumb}>
              <span>{blogPage.banner?.breadcrumbHome}</span>
              <span className={styles.breadcrumbDivider}></span>
              <span className={styles.breadcrumbCurrent}>
                {blogPage.banner?.breadcrumbCurrent}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blogLayout}>
        {/* Main Content */}
        <FadeInSection className={styles.mainContent}>
          <FadeInSection>
            <Image
              src={blogImg}
              alt="Blog"
              width={900}
              height={400}
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </FadeInSection>

          <FadeInSection>
            <div className={styles.metaInfo}>
              <span className={styles.metaItem}>
                <FaUser /> {blogPage.meta?.author}
              </span>
              <span className={styles.metaItem}>
                <FaCalendar /> {blogPage.meta?.date}
              </span>
              <span className={styles.metaItem}>
                <FaComment /> {blogPage.meta?.comments}
              </span>
            </div>
            <hr className={styles.hr} />
            <div className={styles.blogText}>
              <p>{blogPage.content?.p1}</p>
              <p>{blogPage.content?.p2}</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className={styles.quoteBox}>
              <div className={styles.quoteMark}>{blogPage.quote?.mark}</div>
              <div className={styles.quoteContent}>
                <em>{blogPage.quote?.text}</em>
                <div className={styles.quoteAuthor}>
                  – <b>{blogPage.quote?.author}</b>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <p className={styles.blogParagraph}>{blogPage.content?.p3}</p>
            <p className={styles.blogParagraph}>{blogPage.content?.p4}</p>
          </FadeInSection>

          <FadeInSection>
            <div className={styles.imgRow}>
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
            <p className={styles.blogParagraph}>{blogPage.content?.p5}</p>
          </FadeInSection>

          <FadeInSection>
            <div className={styles.bottomRow}>
              <div className={styles.bottomTags}>
                <b>{blogPage.tags?.label}</b>
                {blogPage.tags?.items?.map((tag: string) => (
                  <span key={tag} className={styles.tagItem}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.bottomShare}>
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
            <div className={styles.authorBox}>
              <div className={styles.authorAvatar}>
                <img
                  src="https://kargonhtml.websitelayout.net/img/avatar/avatar-01.jpg"
                  alt="Author"
                />
              </div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{blogPage.author?.name}</div>
                <div className={styles.authorDate}>{blogPage.author?.date}</div>
                <div className={styles.authorDesc}>{blogPage.author?.desc}</div>
                <div className={styles.authorSocials}>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className={styles.commentsBox}>
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
            <div className={styles.replyBox}>
              <div className={styles.replyTitle}>{blogPage.reply?.title}</div>
              <form className={styles.replyForm}>
                <textarea
                  className={styles.replyTextarea}
                  placeholder={blogPage.reply?.placeholder}
                  required
                />
                <div className={styles.replyInputs}>
                  <input
                    type="text"
                    className={styles.replyInput}
                    placeholder={blogPage.reply?.name}
                    required
                  />
                  <input
                    type="email"
                    className={styles.replyInput}
                    placeholder={blogPage.reply?.email}
                    required
                  />
                </div>
                <button type="submit" className={styles.replyBtn}>
                  {blogPage.reply?.button}
                </button>
              </form>
            </div>
          </FadeInSection>
        </FadeInSection>

        {/* Sidebar */}
        <FadeInSection className={styles.sidebar}>
          {/* Search box */}
          <FadeInSection>
            <div className={styles.sidebarBox}>
              <form className={styles.searchForm}>
                <input
                  type="text"
                  placeholder={blogPage.sidebar?.search}
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchBtn}>
                  <span className={styles.searchIcon}>🔍</span>
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
                  <div className={styles.recentPost} key={idx}>
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
                  <div key={cat.name} className={styles.categoryItem}>
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
              <div className={styles.tagsWrap}>
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
              <div className={styles.socialWrap}>
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
  );
};

export default BlogPage;
