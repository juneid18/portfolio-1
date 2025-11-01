"use client";
import styles from "./style.module.css";

const SKILLS = [
  // Core foundations
  "HTML5 & CSS3",
  "JavaScript",
  "TypeScript",

  // Frontend frameworks/libraries
  "React",
  "Next.js",
  "React Native",
  "Sass",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",

  // Backend
  "Node.js",
  "Express",
  "API Development",

  // Databases
  "MongoDB",
  "PostgreSQL",
  "Database Design",

  // Tools & DevOps
  "Git & GitHub",
  "Docker",

  // Extra
  "Python",
  "UI/UX Design",
];


const index = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <p>Skills</p>
          <div></div>
        </div>
        <ul className={styles.list}>
          {SKILLS.map((skill) => (
            <li key={skill} className={styles.badge}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default index;


