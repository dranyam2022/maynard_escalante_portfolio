import styles from "./Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const copywrite = `© 2023 MAYNARD ESCALANTE. All rights reserved.
Unauthorized use of any materials on this site is prohibited.
For permissions, contact maynardescalante@gmail.com.
`;

  return (
    <footer className={styles.container}>
      <h3 className={styles.copywrite}>
        {typeof copywrite === "string" ? copywrite : ""}
      </h3>
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
