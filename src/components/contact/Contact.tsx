import styles from "./Contact.module.css";
import { GrMail } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h3>Contact</h3>
      <h4>I want to help you! Contact me below!</h4>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <a href="mailto:maynardescalante2015@gmail.com" title="mail">
            <GrMail />
          </a>
        </li>
        <li className={styles.contact}>
          <a href="https://www.facebook.com/maynard.escalante" target="_blank" title="facebook">
            <BsFacebook />
          </a>
        </li>
        <li className={styles.contact}>
          <a href="https://wa.me/+639959706655" target="_blank" title="whatsapp">
            <RiWhatsappFill />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
