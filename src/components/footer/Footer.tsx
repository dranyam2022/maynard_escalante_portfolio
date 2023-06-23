import styles from "./Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h3>Copyright @ 2023. All rights resserved</h3>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/maynard-escalante-3033ab1a3/"
          target="_blank"
          title="linkedin"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/dranyam2022" target="_blank" title="github">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
