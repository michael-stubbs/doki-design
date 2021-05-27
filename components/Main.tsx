import { useState } from "react";
import Carousel from "../components/Carousel";
import RoomText from "../components/RoomText";
import styles from "../styles/Main.module.scss";

interface MainProps {
  items: Array<Object>;
}

function Main(props: MainProps) {
  const items: Array<Object> = props.items;

  const [slide, setSlide] = useState(0);

  let current: any = items[slide];

  return (
    <main>
      <Carousel items={items} setSlide={setSlide} />
      <RoomText name={current.name} desc={current.desc} />
    </main>
  );
}

export default Main;
