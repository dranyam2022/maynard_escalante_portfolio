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
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ab non debitis, error veniam assumenda nulla quod vitae
                quam distinctio aliquam repellat et exercitationem corrupti
                nobis eum a deserunt vero?
              </p>
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
