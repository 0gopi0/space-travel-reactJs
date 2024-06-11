import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../src/assets/shared/logo.svg";
interface Props {
  number: number;
}
const NavBar = ({ number }: Props) => {
  const active = number;

  return (
    <section
      role="header"
      className="flex h-24	justify-between items-center	 mt-10 ml-40"
    >
      <Link to={"/"}>
        <img className="w-12 h-12" src={logo} alt="logo" />
      </Link>
      <span className={styles.span}></span>
      <nav className={` 	${styles.ul}`}>
        <Link to="/" className={`relative ${styles.Link}`}>
          <span className={styles.bold}>00</span> Home
          <span
            className={`${active === 0 ? styles.selected : styles.hoverEffect}`}
          ></span>
        </Link>

        <Link to="/destination" className={`relative ${styles.Link}`}>
          <span className={styles.bold}>01</span> Destination
          <span
            className={`${active === 1 ? styles.selected : styles.hoverEffect}`}
          ></span>
        </Link>

        <Link to="/crew" className={`relative ${styles.Link}`}>
          <span className={styles.bold}>02</span> Crew
          <span
            className={`${active === 2 ? styles.selected : styles.hoverEffect}`}
          ></span>
        </Link>
        <Link to="/technology" className={`relative ${styles.Link}`}>
          <span className={styles.bold}>03</span> Technology
          <span
            className={`${active === 3 ? styles.selected : styles.hoverEffect}`}
          ></span>
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;
