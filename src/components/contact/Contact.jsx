import { BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <h3>Contact</h3>
        <h4>I want to help you! Contact me below!</h4>

        <ul className={styles.contacts}>
          <li className={styles.contact_container}>
            <div className={styles.contact}>
              <a href="mailto:maynardescalante2015@gmail.com" title="mail">
                <GrMail />
              </a>
            </div>
            <div>
              <h5>email</h5>
              <p>maynardescalante@gmail.com</p>
            </div>
          </li>
          <li className={styles.contact_container}>
            <div className={styles.contact}>
              <a
                href="https://www.facebook.com/maynard.escalante"
                target="_blank"
                title="facebook"
              >
                <BsFacebook />
              </a>
            </div>
            <div>
              <h5>facebook</h5>
              <p>facebook.com/maynard.escalante</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
