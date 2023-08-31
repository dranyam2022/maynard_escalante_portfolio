import cssLogo from "../../assets/svg/css.svg";
import htmlLogo from "../../assets/svg/html.svg";
import javascriptLogo from "../../assets/svg/javascript.svg";
import reactLogo from "../../assets/svg/react.svg";
import tailwindLogo from "../../assets/svg/tailwind.svg";
import typescriptLogo from "../../assets/svg/typescript.svg";
import nodeLogo from "../../assets/svg/node.svg";
import mysqlLogo from "../../assets/svg/mysql.svg";
import phpLogo from "../../assets/svg/php.svg";
import bootstrapLogo from "../../assets/svg/bootstrap.svg";
import mongodbLogo from "../../assets/svg/mongodb.svg";
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
