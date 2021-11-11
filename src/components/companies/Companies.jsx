import React, { memo } from "react";

import Section from "../atoms/section/Section";
import styles from "./companies.module.css";

const Companies = memo(() => {
  return (
    <div className={styles.comp}>
      <Section>
        <div className={styles.heading} id="experience">
          <h4>WORK EXPERIENCE</h4>
          <h2>Companies I have worked for in the past.</h2>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1>01</h1>
            <h3>
              <span className={styles.green}>Google</span>, Interaction Designer
            </h3>
            <p>
              I currently am the lead designer on the interaction design team
              for Google Play.
            </p>
          </div>
          <div className={styles.column}>
            <h1>02</h1>
            <h3>
              <span className={styles.blue}>Facebook</span>, Product Designer
            </h3>
            <p>
              I’ve worked on a wide variety of internal tools for facebook over
              the past 6 years.
            </p>
          </div>
          <div className={styles.column}>
            <h1>03</h1>
            <h3>
              <span className={styles.pink}>Dribbble</span>, Graphic Designer
            </h3>
            <p>
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
});

export default Companies;
