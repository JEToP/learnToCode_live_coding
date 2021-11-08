import React, { memo } from "react";

import Section from "../atoms/section/Section";
import styles from "./hero.module.css";

const Hero = memo(() => {
  return (
    <div className={styles.hero}>
      <Section grid>
        <div className={styles.img} />
        <div className={styles.bg} />
        <div className={styles.content}>
          <h1 className={styles.heading}>
            I’m Robin Williams.
            <br />A product designer <br />
            <span>based in Italy.</span>
          </h1>
          <p className={styles.copy}>
            I’m probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>
      </Section>
    </div>
  );
});

export default Hero;
