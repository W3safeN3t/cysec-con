import React, { Component } from "react";
import classes from "./Sponsors.module.css";
import Slack from "../../assets/Slack.png";
import Corona from "../../assets/Corona.png";
import McDonald from "../../assets/McDonald.png";
import Tee from "../../assets/Tee.png";
import Google from "../../assets/Google.png";
import Slider from "react-slick";

export default class Autoplay extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 1000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 5,
          },
        },
      ],
    };
  return (
    <div className={classes.container}>
      <h5>Cysec-Con Sponsors</h5>
      <Slider {...settings} className={classes.wrap}>
        <div className={classes.logos}>
          <img src={Slack} alt="Slack" />
        </div>
        <div className={classes.logos}>
          <img src={Corona} alt="Corona" />
        </div>
        <div className={classes.logos}>
          <img src={McDonald} alt="McDonald" />
        </div>
        <div className={classes.logos}>
          <img src={Tee} alt="Tee" />
        </div>
        <div className={classes.logos}>
          <img src={Google} alt="Google" />
        </div>
      </Slider>
      </div>
  );
};
}
