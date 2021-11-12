import React, { memo } from "react";

import arrow from "../../../assets/arrow.svg";
import styles from "./card.module.css";

const Card = memo(({ image, heading, desc }) => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} alt="" />
      <div className={styles.desc}>
        <h3>{heading}</h3>
        <p>{desc}</p>
        <div className={styles.arrow}>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
});

export default Card;
