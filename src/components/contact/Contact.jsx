import React, { memo } from "react";

import Section from "../atoms/section/Section";
import styles from "./contact.module.css";

const Contact = memo(() => {
  return (
    <div className={styles.wrapper}>
      <Section grid className={styles.section}>
        <div>
          <h2 className={styles.heading}>Let's talk about business</h2>
          <p className={styles.desc}>
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
        </div>
        <div className={styles.form}>
          <form action="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name=""
              id=""
              className={styles.input}
              required
            />
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              className={styles.input}
              required
            />
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={styles.input}
              required
            />
            <input
              type="submit"
              value="LET'S GET STARTED"
              className={styles.button}
            />
          </form>
        </div>
      </Section>
    </div>
  );
});

export default Contact;
