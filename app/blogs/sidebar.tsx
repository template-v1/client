import React from 'react'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import FadeInSection from '@/components/FadeInSection'
import { FaSearch } from 'react-icons/fa'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar ps-xl-4">
      {/* Search Widget */}
      <div className="widget mb-1-9 p-4 widget_search wow fadeInUp">
        <FadeInSection>
          <form>
            <div className="input-group rounded-0">
              <input
                type="search"
                className="form-control rounded-0 border-end-0 search-input-v2"
                placeholder="Search..."
                name="s"
              />
              <div className="input-group-append">
                <button
                  className="butn-style1 rounded-0"
                  type="button"
                  style={{ height: '100%' }}
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
        </FadeInSection>
      </div>
      {/* Recent Posts */}
      <div className="widget wow" data-wow-delay="200ms">
        <FadeInSection>
          <h4 className="widget-title text-white">Recent Posts</h4>
          <div className="widget-body">
            <div className="d-flex recent-post align-items-start align-items-sm-center align-items-lg-start">
              <div className="flex-shrink-0 image-hover me-3">
                <a href="#">
                  <img
                    src="https://kargonhtml.websitelayout.net/img/blog/blog-thumb-01.jpg"
                    alt="The advantages of a digital supply strategy"
                  />
                </a>
              </div>
              <div className="flex-grow-1">
                <span className="display-30 d-block mb-2 font-weight-500">
                  January 20, 2025
                </span>
                <h4 className="h6 mb-0">
                  <a href="blog-details.html">
                    The advantages of a digital supply strategy
                  </a>
                </h4>
              </div>
            </div>
            <div className="d-flex mt-4 recent-post align-items-start align-items-sm-center align-items-lg-start">
              <div className="flex-shrink-0 image-hover me-3">
                <a href="#">
                  <img
                    src="https://kargonhtml.websitelayout.net/img/blog/blog-thumb-02.jpg"
                    alt="We very careful handling the valuable goods"
                  />
                </a>
              </div>
              <div className="flex-grow-1">
                <span className="display-30 d-block mb-2 font-weight-500">
                  January 20, 2025
                </span>
                <h4 className="h6 mb-0">
                  <a href="blog-details.html">
                    We very careful handling the valuable goods
                  </a>
                </h4>
              </div>
            </div>
            <div className="d-flex mt-4 recent-post align-items-start align-items-sm-center align-items-lg-start">
              <div className="flex-shrink-0 image-hover me-3">
                <a href="#">
                  <img
                    src="https://kargonhtml.websitelayout.net/img/blog/blog-thumb-03.jpg"
                    alt="Choosing the best logistics for your business"
                  />
                </a>
              </div>
              <div className="flex-grow-1">
                <span className="display-30 d-block mb-2 font-weight-500">
                  January 20, 2025
                </span>
                <h4 className="h6 mb-0">
                  <a href="blog-details.html">
                    Choosing the best logistics for your business
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* Categories */}
      <div className="widget widget_categories wow fadeInUp" data-wow-delay="200ms">
        <FadeInSection>
          <h4 className="widget-title text-white">Categories</h4>
          <div className="widget-body">
            <ul>
              <li className="cat-item">
                <a href="#">
                  <span className="cat-name">Business</span>
                  <span className="float-end cat-count">(2)</span>
                </a>
              </li>
              <li className="cat-item">
                <a href="#">
                  <span className="cat-name">Corporate</span>
                  <span className="float-end cat-count">(1)</span>
                </a>
              </li>
              <li className="cat-item">
                <a href="#">
                  <span className="cat-name">Warehousing</span>
                  <span className="float-end cat-count">(4)</span>
                </a>
              </li>
              <li className="cat-item">
                <a href="#">
                  <span className="cat-name">Logistic</span>
                  <span className="float-end cat-count">(1)</span>
                </a>
              </li>
              <li className="cat-item">
                <a href="#">
                  <span className="cat-name">Delivery</span>
                  <span className="float-end cat-count">(8)</span>
                </a>
              </li>
            </ul>
          </div>
        </FadeInSection>
      </div>
      {/* Tags */}
      <div className="widget widget_tag_cloud wow fadeInUp" data-wow-delay="200ms">
        <FadeInSection>
          <h4 className="widget-title text-white">Tags</h4>
          <div className="widget-body">
            <div className="tagcloud">
              <ul className="wp-tag-cloud">
                <li><a href="#">Agency</a></li>
                <li><a href="#">Goods</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Logistic</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Cargo</a></li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* Social Links */}
      <div className="widget wow fadeInUp" data-wow-delay="200ms">
        <FadeInSection>
          <h4 className="widget-title text-white">Follow Us</h4>
          <div className="widget-body">
            <ul className="share-post social-icon-style2-v2">
              <li>
                <a title="Facebook" href="#" aria-label="Share on Facebook">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a title="Twitter" href="#" aria-label="Share on Twitter">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a title="Instagram" href="#" aria-label="Share on Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a title="LinkedIn" href="#" aria-label="Share on LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

export default Sidebar