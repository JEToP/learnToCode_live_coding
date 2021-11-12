import React, { memo } from "react";

import styles from "./section.module.css";

const Section = memo(({ children, grid, className }) => {
  return (
    <div
      className={
        grid
          ? `${styles.section} ${styles.grid} ${className}`
          : `${styles.section} ${className}`
      }
    >
      {children}
    </div>
  );
});

export default Section;
