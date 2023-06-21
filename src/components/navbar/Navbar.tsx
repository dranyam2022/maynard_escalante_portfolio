import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <a href="/">maynard.DEV</a>
      </div>
      <BiMenuAltRight className={styles.menu} />
    </nav>
  );
};

export default Navbar;
