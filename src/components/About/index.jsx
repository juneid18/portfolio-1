"use client";
import styles from "./style.module.css";
import Rounded from "../../common/RoundedButton";
import Image from "next/image";
import computer from "../../assets/computer.jpeg";
const index = () => {
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className={styles.about} id="about">
      <h1 className={styles.about_big_text}>ABOUT</h1>
      <div className={styles.container}>
        <div className={styles.about_img}>
          <div className={styles.about_img_div}>
            <Image
              src={computer}
              alt="Desk setup with computer representing About section"
              className={styles.about_main_img}
              sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, 350px"
            />
          </div>
        </div>
        <div className={styles.about_text}>
          <p className={styles.about_small}>Let me introduce myself.</p>
          <h1 className={styles.about_h1}>ABOUT ME</h1>
          <p className={styles.about_p}>
            Hi, I’m Juneid Shaikh, a passionate Full-Stack Developer from India. I specialize in building modern, scalable, and user-friendly applications with clean design and efficient code. Always curious and eager to learn, I love exploring new technologies and turning ideas into impactful digital solutions.
          </p>
          <br />
          <p className={styles.second_p}>
            When I’m not coding, you’ll find me learning, experimenting with new tools, or brainstorming innovative ideas to bring into reality.
          </p>
          <Rounded>
            <p
              onClick={() => {
                smoothScrollTo("contact");
              }}
            >
              CONTACT ME
            </p>
          </Rounded>
        </div>
      </div>
    </main>
  );
};

export default index;
