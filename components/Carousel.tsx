import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
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
    <div className={styles.carousel}>
      <Carousel
        activeIndex={props.slide}
        onSelect={handleSelect}
        interval={null}
      >
        {items.map((i: Items) => {
          return (
            <Carousel.Item>
              <img src={i.image} className={i.name} key={i.count} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

// pass current slide up tree with setSlide
// Use target slide to update the current slide onclick (already set up)
