import cssLogo from "../../assets/css.svg";
import htmlLogo from "../../assets/html.svg";
import javascriptLogo from "../../assets/javascript.svg";
import reactLogo from "../../assets/react.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import typescriptLogo from "../../assets/typescript.svg";
import nodeLogo from "../../assets/node.svg";
import mysqlLogo from "../../assets/mysql.svg";
import phpLogo from "../../assets/php.svg";
import bootstrapLogo from "../../assets/bootstrap.svg";
import mongodbLogo from "../../assets/mongodb.svg";
import styles from "./TechStack.module.css";

const TechStack = () => {
  const frontend = [
    { href: htmlLogo, name: "HTML5" },
    { href: cssLogo, name: "CSS3" },
    { href: tailwindLogo, name: "TAILWIND CSS" },
    { href: bootstrapLogo, name: "BOOTSTRAP" },
    { href: javascriptLogo, name: "JAVASCRIPT" },
    { href: reactLogo, name: "REACTJS" },
  ];
  const backend = [
    { href: typescriptLogo, name: "TYPESCRIPT" },
    { href: nodeLogo, name: "NODEJS" },
    { href: mongodbLogo, name: "MONGODB" },
    { href: phpLogo, name: "PHP" },
    { href: mysqlLogo, name: "MYSQL" },
  ];

  return (
    <>
      <ul className={styles.techStacks} id="frontend">
        {frontend.map((item, index) => (
          <li className={styles.techStack} key={index}>
            <img src={item.href} alt={`${item.name} Logo`} title={item.name} />
          </li>
        ))}
      </ul>
      <ul className={styles.techStacks} id="backend">
        {backend.map((item, index) => (
          <li className={styles.techStack} key={index}>
            <img src={item.href} alt={`${item.name} Logo`} title={item.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechStack;
