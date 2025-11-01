import styles from "./style.module.css";

const index = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>© {new Date().getFullYear()} Juneid Shaikh 💖</p>
        <div className={styles.socials}>
          <a href="https://github.com/juneid18" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/juneid18" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:prof.juneidshaikh18@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default index;


