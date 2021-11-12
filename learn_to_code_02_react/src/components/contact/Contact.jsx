import React, { memo, useCallback, useState } from "react";

import Section from "../atoms/section/Section";
import styles from "./contact.module.css";

const Contact = memo(() => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      console.log(`
      Email: ${email}
      Name: ${name}
      Message: ${message}
    `);

      event.preventDefault();
    },
    [email, message, name]
  );

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
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id=""
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              name="email"
              id=""
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              className={styles.input}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
