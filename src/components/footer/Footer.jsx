import React, { memo } from "react";

import Section from "../atoms/section/Section";
import dribble from "../../assets/dribble.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/logo.svg";
import styles from "./footer.module.css";
import twitter from "../../assets/twitter.svg";

const Footer = memo(() => {
  return (
    <footer className={styles.footer} id="contact">
      <Section grid className={styles.section}>
        <div className={styles.column}>
          <div>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="" height="40" />
            </a>
            <div>
              <a href="" className={styles.social_link}>
                <img src={twitter} alt="" className={styles.social_icons} />
              </a>
              <a href="" className={styles.social_link}>
                <img src={dribble} alt="" className={styles.social_icons} />
              </a>
              <a href="" className={styles.social_link}>
                <img src={linkedin} alt="" className={styles.social_icons} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.link_column}>
            <a href="" className={styles.footer_link}>
              Home
            </a>
            <a href="" className={styles.footer_link}>
              About
            </a>
            <a href="" className={styles.footer_link}>
              Work
            </a>
            <a href="" className={styles.footer_link}>
              Process
            </a>
          </div>
          <div className={styles.link_column}>
            <a href="" className={styles.footer_link}>
              Store
            </a>{" "}
            <a href="" className={styles.footer_link}>
              Blog
            </a>{" "}
            <a href="" className={styles.footer_link}>
              Reading list
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>No Copyright 2020 • Robin Williams. Webflow cloneable</p>
          <a href="https://chethankvs.design/">Created by Chethan KVS</a>
        </div>
      </Section>
    </footer>
  );
});

export default Footer;
