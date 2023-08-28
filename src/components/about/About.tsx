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
        <h2>
          A dedicated Full Stack Web Developer based in Cebu, Philippines.
        </h2>
        <p>
          I am a self-taught Full Stack Web Developer with a strong foundation
          built through Udemy courses and further honed by completing the Zuitt
          Full Stack Bootcamp. My passion for web development is matched only by
          my eagerness to continually enhance my skills. I am a certified
          problem solver with valuable experience in technical support for
          mobile and electronic companies, bringing a unique blend of technical
          expertise and problem-solving acumen to any project.
        </p>
      </div>
    </section>
  );
};

export default About;
