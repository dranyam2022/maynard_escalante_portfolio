import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./Home.module.css";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero_main}>
            <div className={styles.hero_image}></div>
            <div className={styles.hero_text}>
              <h1>Full Stack Web Developer</h1>
              <p>
                Hi, I'm Maynard Escalante. A passionate Full Stack Web Developer
                based in Cebu, Philippines.
              </p>
              <span>
                <a
                  href="https://www.linkedin.com/in/maynard-escalante-3033ab1a3/"
                  target="_blank"
                  title="linkedin"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/dranyam2022"
                  target="_blank"
                  title="github"
                >
                  <BsGithub />
                </a>
              </span>
            </div>
          </div>
          <div className={styles.skills}>
            <h3>Tech Stack</h3>
            <div className={styles.techStackContainer}>
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
