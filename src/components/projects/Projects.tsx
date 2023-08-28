import styles from "./Projects.module.css";
import { projects } from "../../assets/seeds/projects";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <ul className={styles["card-container"]}>
        {projects.map((project, index) => (
          <li className={styles.card} key={index}>
            <div className={styles["card-thumbnail"]}>
              <a href={project.url} target="_blank">
                <img src={project.img} alt="" className={styles.image} />
              </a>
            </div>
            <div className={styles["card-body"]}>
              <div className={styles["card-text"]}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
              <div className={styles["button-container"]}>
                <div className={styles.button}>
                  <a href={project.url} target="_blank">
                    View Project
                  </a>
                </div>
                <div className={styles.button}>
                  <a href={project.github} target="_blank">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
