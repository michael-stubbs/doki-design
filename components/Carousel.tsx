import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Main.module.scss";

interface Content {
  setSlide: any;
  items: Object[];
}

interface Items {
  i: Object;
  image?: string;
  name?: string;
  count?: string;
  desc?: string;
}

export default function Carousel(props: Content) {
  const items: any = props.items;

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
