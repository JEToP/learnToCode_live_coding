import React, { memo } from "react";

import Card from "../molecules/card/Card";
import Section from "../atoms/section/Section";
import closeup from "../../assets/closeup.jpeg";
import hand1 from "../../assets/hand1.jpeg";
import hand2 from "../../assets/hand2.jpeg";
import pc from "../../assets/pc.jpeg";
import styles from "./work.module.css";

const Work = memo(() => {
  return (
    <div className={styles.work_wrapper} id="work">
      <Section grid className={styles.section}>
        <div>
          <div className={styles.heading}>
            <h4>MY PROJECTS</h4>
            <h2>Work that I’ve done for the past 8 years</h2>
          </div>
          <Card
            image={pc}
            heading="Restaurant Website Design"
            desc="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
          />
          <Card
            image={hand2}
            heading="Restaurant Website Design"
            desc="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
          />
        </div>
        <div>
          <Card
            image={hand1}
            heading="Restaurant Website Design"
            desc="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
          />
          <Card
            image={closeup}
            heading="Restaurant Website Design"
            desc="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
          />
          <div className={styles.button_wrapper}>
            <a href="/" className={styles.cta}>
              VIEW ALL PROJECTS
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
});

export default Work;
