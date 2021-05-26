import { useState } from "react";
import Carousel from "../components/Carousel";
import RoomText from "../components/RoomText";

interface MProps {
  items: Array<Object>;
}

function Main(props: MProps) {
  const items = props.items;

  const [slide, setSlide] = useState(0);

  return (
    <main>
      <Carousel items={items} setSlide={setSlide} />
      <RoomText name={items[slide].name} desc={items[slide].desc} />
    </main>
  );
}

export default Main;
