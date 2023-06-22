import styles from "./Home.module.css";
import myProfile from "../../assets/profile.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image_container}>
        <img src={myProfile} alt="my profile picture" />
      </div>
      <div className={styles.profile}>
        <h1>Front-End React Developer</h1>
        <p>
          Hi, I'm Maynard Escalante. A passionate Front-end React Developer
          based in Cebu, Philippines.
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/maynard-escalante-3033ab1a3/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/dranyam2022" target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className={styles.techStack_container}>
        <h3>Tech Stack</h3>
        <ul className={styles.techStacks}>
          <li className={styles.techStack}>
            <img src="src/assets/html.svg" alt="HTML5 logo" title="HTML5" />
          </li>
          <li className={styles.techStack}>
            <img src="src/assets/css.svg" alt="CSS3 logo" title="CSS3" />
          </li>
          <li className={styles.techStack}>
            <img
              src="src/assets/tailwind.svg"
              alt="TAILWIND logo"
              title="TAILWIND"
            />
          </li>
          <li className={styles.techStack}>
            <img
              src="src/assets/javascript.svg"
              alt="JAVASCRIPT logo"
              title="JAVASCRIPT"
            />
          </li>
          <li className={styles.techStack}>
            <img
              src="src/assets/typescript.svg"
              alt="TYPESCRIPT logo"
              title="TYPESCRIPT"
            />
          </li>
          <li className={styles.techStack}>
            <img
              src="src/assets/react.svg"
              alt="REACTJS logo"
              title="REACTJS"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
