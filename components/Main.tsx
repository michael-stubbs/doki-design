import { useState } from "react";
import Carousel from "../components/Carousel";
import RoomText from "../components/RoomText";
import styles from "../styles/Main.module.scss";

interface MainProps {
  items: Array<Object>;
}

interface Object {
  name?: string;
  desc?: string;
}

function Main(props: MainProps) {
  const [slide, setSlide] = useState(0);

  // Set custom consts to assign type
  const items: Array<Object> = props.items;
  let current: Object = items[slide];

  return (
    <main>
      <Carousel items={items} setSlide={setSlide} />
      <RoomText name={current.name} desc={current.desc} />
    </main>
  );
}

export default Main;
