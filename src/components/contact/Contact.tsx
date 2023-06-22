import styles from "./Contact.module.css";
import { GrMail } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h3>Contact</h3>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <GrMail />
        </li>
        <li className={styles.contact}>
          <BsFacebook />
        </li>
        <li className={styles.contact}>
          <RiWhatsappFill />
        </li>
      </ul>
    </section>
  );
};

export default Contact;
