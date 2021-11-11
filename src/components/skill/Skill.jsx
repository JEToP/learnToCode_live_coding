import React, { memo } from "react";

import Section from "../atoms/section/Section";
import camera from "../../assets/camera.svg";
import pen from "../../assets/pen.svg";
import play from "../../assets/play.svg";
import squares from "../../assets/squares.svg";
import styles from "./skill.module.css";

const Skill = memo(() => {
  return (
    <div className={styles.skill_wrapper} id="skill">
      <Section grid className={styles.section}>
        <div className={styles.desc}>
          <h2>Skillset</h2>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className={styles.skill}>
          <img src={squares} alt="" />
          <h3>Product Design</h3>
          <p>
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
        <div className={styles.skill}>
          <img src={pen} alt="" />
          <h3>Visual Design</h3>
          <p>
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
        <div className={styles.skill}>
          <img src={play} alt="" />
          <h3>Motion Design</h3>
          <p>
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
        <div className={styles.skill}>
          <img src={camera} alt="" />
          <h3>Photography</h3>
          <p>
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
      </Section>
    </div>
  );
});

export default Skill;
