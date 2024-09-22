import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../src/assets/shared/logo.svg";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
interface Props {
  number: number;
}
const NavBar = ({ number }: Props) => {
  const active = number;

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <section
          role="navigation"
          className="flex h-24	justify-between items-center	 mt-10 ml-40"
        >
          <Link to={"/"}>
            <img className="w-12 h-12" src={logo} alt="logo" />
          </Link>

          <nav className={` 	${styles.ul}`}>
            <Link to="/" className={`relative ${styles.Link}`}>
              <span className={styles.bold}>00</span> Home
              <span
                className={`${
                  active === 0 ? styles.selected : styles.hoverEffect
                }`}
              ></span>
            </Link>

            <Link to="/destination" className={`relative ${styles.Link}`}>
              <span className={styles.bold}>01</span> Destination
              <span
                className={`${
                  active === 1 ? styles.selected : styles.hoverEffect
                }`}
              ></span>
            </Link>

            <Link to="/crew" className={`relative ${styles.Link}`}>
              <span className={styles.bold}>02</span> Crew
              <span
                className={`${
                  active === 2 ? styles.selected : styles.hoverEffect
                }`}
              ></span>
            </Link>
            <Link to="/technology" className={`relative ${styles.Link}`}>
              <span className={styles.bold}>03</span> Technology
              <span
                className={`${
                  active === 3 ? styles.selected : styles.hoverEffect
                }`}
              ></span>
            </Link>
          </nav>
        </section>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" }, margin: "15px" }}>
        <div className="flex justify-between">
          <Link to={"/"}>
            <img className="w-12 h-12" src={logo} alt="logo" />
          </Link>
          <MenuIcon sx={{ fontSize: "50px", color: "#d6d3d1" }} />
        </div>
      </Box>
    </>
  );
};

export default NavBar;
