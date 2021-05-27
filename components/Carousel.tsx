import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Main.module.scss";

interface Content {
  setSlide: any;
  items: Object[];
  target: number;
}

interface Items {
  image?: string;
  name?: string;
  count?: string;
  desc?: string;
}

export default function Carousel(props: Content) {
  const items: Object[] = props.items;
  let target = props.target;

  //   Slick Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => {
      {
        props.setSlide(next);
      }
    },
  };

  //   Map images to carousel slides
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {items.map((i: Items) => {
          return <img src={i.image} className={i.name} key={i.count} />;
        })}
      </Slider>
    </div>
  );
}
