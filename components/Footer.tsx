import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.col}>
          <h2 className={styles.title}>About Kargon</h2>
          <p className={styles.desc}>
            We pride ourselves on providing the best transport and shipping services.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn}>
              {/* <span className="material-symbols-outlined">facebook</span> */}
            </a>
            <a href="#" className={styles.socialBtn}>
              {/* <span className="material-symbols-outlined">close</span> */}
            </a>
            <a href="#" className={styles.socialBtn}>
              {/* <span className="material-symbols-outlined">linkedin</span> */}
            </a>
            <a href="#" className={styles.socialBtn}>
              {/* <span className="material-symbols-outlined">instagram</span> */}
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.contact}>
            <div>
              <b>ADDRESS:</b> 66 Guild Street 512B, Great North Town.
            </div>
            <div>
              <b>MAIL:</b> addyour@email
            </div>
            <div>
              <b>PHONE:</b> (+44) 123 456 789
            </div>
            <div>
              <b>FAX ID:</b> (+1) 523-567-987
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <h2 className={styles.title}>Our Newsletter</h2>
          <form className={styles.newsletter}>
            <div className={styles.inputWrap}>
              <input
                type="email"
                placeholder="Subscribe with us"
                className={styles.input}
              />
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>person</span>
            </div>
            <button className={styles.subscribeBtn} type="submit">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.logoWrap}>
          <img src="/logo.svg" alt="Kargon Logo" className={styles.logo} />
          <div>
            <div className={styles.brand}>KARGON</div>
            <div className={styles.slogan}>LOGISTIC SERVICE</div>
          </div>
        </div>
        <nav className={styles.nav}>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Get In Touch</a>
        </nav>
      </div>
    </footer>
  );
}
