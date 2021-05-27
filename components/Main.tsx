import { useState } from "react";
import Carousel from "../components/Carousel";
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
  const [targetSlide, setTargetSlide] = useState(slide);

  // Set custom consts to assign type
  const items: Array<Object> = props.items;
  let current: Object = items[slide];

  return (
    <>
      <NavBar items={items} slideSetter={setTargetSlide} />
      <main className={styles.mainBody}>
        <Carousel items={items} setSlide={setSlide} target={targetSlide} />
        <RoomText name={current.name} desc={current.desc} />
      </main>
    </>
  );
}

export default Main;
