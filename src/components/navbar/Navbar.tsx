import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Navbar.module.css";
import Mobilenav from "./mobileNav/Mobilenav";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navClickHandler = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <a href="/">maynard.DEV</a>
        </div>
        <div className={styles.menu} onClick={navClickHandler}>
          <BiMenuAltRight />
        </div>
      </nav>
      <Mobilenav navState={isNavOpen} navClick={navClickHandler} />
    </>
  );
};

export default Navbar;
