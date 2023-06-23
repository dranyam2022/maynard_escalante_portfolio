import styles from "./About.module.css";
import programming from "../../assets/programming.svg";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.program}>
        <img src={programming} alt="illustration of someone programming" />
      </div>
      <div className={styles.about}>
        <h3>ABOUT ME</h3>
        <h2>A dedicated Front-end Developer based in Cebu, Philippines.</h2>
        <p>
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
