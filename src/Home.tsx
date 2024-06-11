import NavBar from "./NavBar";
import getData from "./data";
import styles from "./Home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [parentColor, setParentColor] = useState<string>("");
  const handleMouseOver = () => {
    setParentColor("rgba(255, 255, 255, 0.264)");
  };
  const handleMouseOut = () => {
    setParentColor("");
  };
  const Styles = getData(1);
  return (
    <div style={Styles} className="	min-h-screen	">
      <div>
        <NavBar number={0} />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyText}>
          <h2 className={styles.bodyTextH2}>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className={styles.bodyTextH1}>SPACE</h1>
          <p className={styles.bodyTextP}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className={`${styles.bodyImageTransparent} `}
          style={{ backgroundColor: parentColor }}
        >
          <Link to="/destination">
            <div
              className={styles.bodyImage}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              EXPLORE
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
