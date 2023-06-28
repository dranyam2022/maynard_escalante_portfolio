import { BsGithub, BsLinkedin } from "react-icons/bs";
import cssLogo from "../../assets/css.svg";
import htmlLogo from "../../assets/html.svg";
import javascriptLogo from "../../assets/javascript.svg";
import reactLogo from "../../assets/react.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import typescriptLogo from "../../assets/typescript.svg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="#home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero_main}>
            <div className={styles.hero_image}></div>
            <div className={styles.hero_text}>
              <h1>Front-End React Developer</h1>
              <p>
                Hi, I'm Maynard Escalante. A passionate Front-end React
                Developer based in Cebu, Philippines.
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
        </div>
      </div>
    </section>
  );
};

export default Home;
