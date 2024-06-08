import p1 from "../src/assets/home/background-home-desktop.jpg";
import p2 from "../src/assets/destination/background-destination-desktop.jpg";
import p3 from "../src/assets/crew/background-crew-desktop.jpg";
import p4 from "../src/assets/technology/background-technology-desktop.jpg";
const pics = [p1, p2, p3, p4];
export default function getData(n: number) {
  return {
    backgroundImage: `url(${pics[n - 1]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    overflow: "hidden",
  };
}
