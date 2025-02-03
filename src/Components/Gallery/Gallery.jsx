import React, { Component } from "react";
import classes from "./Gallery.module.css";
import Gallery1 from "../../assets/Gallery1.png";
import Gallery2 from "../../assets/Gallery2.png";
import Gallery3 from "../../assets/Gallery3.png";
import Gallery4 from "../../assets/Gallery4.png";
import Gallery5 from "../../assets/Gallery5.png";
import Gallery6 from "../../assets/Gallery6.png";
import Gallery7 from "../../assets/Gallery7.png";
import Gallery8 from "../../assets/Gallery8.png";
import Gallery9 from "../../assets/Gallery9.png";
import Gallery10 from "../../assets/Gallery10.png";
import Slider from "react-slick";

export default class Autoplay extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 5,
      autoplay: true,
      speed: 20000,
      autoplaySpeed: 1000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 5,
          },
        },
      ],
    };
    return (
      <div className={classes.container}>
      <div className={classes.containerText}>
        <p>Events Gallery</p>
        <h5>Past Event Memories</h5>
      </div>
        <Slider {...settings} className={classes.wrap}>
          <div className={classes.logos}>
            <img src={Gallery1} alt="Gallery1" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery2} alt="Gallery2" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery3} alt="Gallery3" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery4} alt="Gallery4" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery5} alt="Gallery5" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery6} alt="Gallery6" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery7} alt="Gallery7" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery8} alt="Gallery8" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery9} alt="Gallery9" />
          </div>
          <div className={classes.logos}>
            <img src={Gallery10} alt="Gallery10" />
          </div>
        </Slider>
      </div>
    );
  }
}
