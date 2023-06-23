import { GrClose } from "react-icons/gr";
import styles from "./Mobilenav.module.css";

type navStateProps = {
  navState: boolean;
  navClick: () => void;
};

const mobileNav = (props: navStateProps) => {
  const mobileNavClasses = `${styles.container} ${
    props.navState ? styles.navOpen : styles.navClose
  }`;

  const navClickHandler = () => {
    props.navClick();
  };
  return (
    <div className={mobileNavClasses}>
      <GrClose className={styles.closeBtn} onClick={navClickHandler} />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default mobileNav;
