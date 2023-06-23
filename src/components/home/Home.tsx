import styles from "./Home.module.css";
import myProfile from "../../assets/profile.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import javascriptLogo from "../../assets/javascript.svg";
import typescriptLogo from "../../assets/typescript.svg";
import reactLogo from "../../assets/react.svg";

const Home = () => {
  return (
    <section className={styles.container} id="home">
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
            <img src={htmlLogo} alt="HTML5 logo" title="HTML5" />
          </li>
          <li className={styles.techStack}>
            <img src={cssLogo} alt="CSS3 logo" title="CSS3" />
          </li>
          <li className={styles.techStack}>
            <img src={tailwindLogo} alt="TAILWIND logo" title="TAILWIND" />
          </li>
          <li className={styles.techStack}>
            <img
              src={javascriptLogo}
              alt="JAVASCRIPT logo"
              title="JAVASCRIPT"
            />
          </li>
          <li className={styles.techStack}>
            <img
              src={typescriptLogo}
              alt="TYPESCRIPT logo"
              title="TYPESCRIPT"
            />
          </li>
          <li className={styles.techStack}>
            <img src={reactLogo} alt="REACTJS logo" title="REACTJS" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
