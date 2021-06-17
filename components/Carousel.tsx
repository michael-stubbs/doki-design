import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FHBtnGrp from "./FHBtnGrp";
import BohBtnGrp from "./BohBtnGrp";
import EclBtnGrp from "./EclBtnGrp";
import styles from "../styles/Main.module.scss";

interface Content {
  setSlide: any;
  items: Object[];
  slide: number;
}

interface Items {
  image?: string;
  name?: string;
  count?: string;
  desc?: string;
}

export default function CarouselMain(props: Content) {
  const items: Object[] = props.items;

  const handleSelect = (selectedIndex: number, e: any) => {
    props.setSlide(selectedIndex);
  };

  //   Map images to carousel slides
  return (
    <div className={styles.carouselMain}>
      <Carousel
        activeIndex={props.slide}
        onSelect={handleSelect}
        interval={null}
      >
        {items.map((i: Items) => {
          let srcUrl: string = "/" + i.image;
          return (
            <Carousel.Item>
              <img src={srcUrl} className={i.name} key={i.count} alt={i.name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <FHBtnGrp slide={props.slide} items={items[1]} />
      <BohBtnGrp slide={props.slide} items={items[3]} />
      <EclBtnGrp slide={props.slide} items={items[4]} />
    </div>
  );
}
