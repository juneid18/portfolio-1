"use client";
import React from "react";
import styles from "./style.module.css";
import Rounded from "../../common/RoundedButton";
import Image from "next/image";
import boy from "../../assets/boy.jpeg";

const index = () => {
  return (
    <main className={styles.contact_main} id="contact">
      <div className={styles.container}>
        <div className={styles.contact_title}>
          <p>Contact</p>
          <div></div>
        </div>
        <div className={styles.contact_one}>
          <div className={styles.contact_image}>
            <Image
              src={boy}
              alt="Profile avatar"
              className={styles.contact_main_img}
              sizes="80px"
            />
          </div>
          <h1>Let's work</h1>
        </div>
        <div className={styles.contact_two}>
          <h1>together</h1>
        </div>
        <div className={styles.contact_three}>
          <Rounded className={styles.contact_getintouch_circle}>
            <p>Get in touch</p>
          </Rounded>
        </div>
        <div className={styles.contact_bt_div}>
        <a href="mailto:prof.juneidshaikh18@gmail.com" style={{textDecoration:'none', color:'#000'}}>
          <Rounded>
            <p>Don't be shy!Hit me up!</p>
          </Rounded>
        </a>
          
        </div>
      </div>
    </main>
  );
};

export default index;
