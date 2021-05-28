import { useState } from "react";
import MainCarousel from "../components/Carousel";
import RoomText from "../components/RoomText";
import NavBar from "../components/NavBar";
import styles from "../styles/Main.module.scss";

interface MainProps {
  items: Array<Object>;
}

interface Object {
  name?: string;
  desc?: string;
}

function Main(props: MainProps) {
  // Current carousel slide state
  const [slide, setSlide] = useState(0);
  // Target slide for Navbar
  const [targetSlide, setTargetSlide] = useState(0);

  // Set custom consts to assign type
  const items: Array<Object> = props.items;

  // Current selection in content allows RoomText to update
  let current: Object = items[slide];

  return (
    <>
      <NavBar items={items} slideSetter={setSlide} />
      <main className={styles.mainBody}>
        <MainCarousel items={items} setSlide={setSlide} slide={slide} />
        <RoomText name={current.name} desc={current.desc} />
      </main>
    </>
  );
}

export default Main;
