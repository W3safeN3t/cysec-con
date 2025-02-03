import React from "react";
import classes from "./About.module.css";
import Star from "../../assets/Star.png";
import Award from "../../assets/Award.png";
import Career from "../../assets/Career.png";
import Challenge from "../../assets/Challenge.png";
import Expert from "../../assets/Expert.png";
import Networking from "../../assets/Networking.png";
import Workshop from "../../assets/Workshop.png";
import Side from "../../assets/Side.png";
import Swag from "../../assets/Swag.png";
import Half from "../../assets/HalfStar.png";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <div className={classes.aboutCard}>
          <h5>About Us</h5>
          <p>
            CYSEC CON is not just another conference, it is an experience. 
            CYSEC-CON is designed for both cybersecurity professionals and
            individuals from other fields. While cybersecurity experts will gain
            hands-on technical skills, professionals from diverse industries can
            benefit from some of our Career Village sessions, which focus on
            enhancing soft skills, refining job application strategies, and
            unlocking new career opportunities
          </p>
        </div>
        <div className={classes.star}>
          <img src={Star} alt="Star" />
        </div>
      </div>
      
      <div className={classes.expect}>
        <h5>What to expect</h5>
        <div className={classes.expectCard}>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Award} alt="Award" />
            </div>
            <div className={classes.cardText}>
              <h6>Awards & Recognitions</h6>
              <p>
                Celebrate outstanding achievements in cybersecurity with
                exclusive awards.
              </p>
            </div>
          </div>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Career} alt="Career" />
            </div>
            <div className={classes.cardText}>
              <h6>Career Villages</h6>
              <p>
                Connect with mentors, polish your skills, and unlock pathways to
                your dream cybersecurity career.
              </p>
            </div>
          </div>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Challenge} alt="CTF" />
            </div>
            <div className={classes.cardText}>
              <h6>CTF Challenge</h6>
              <p>
                Put your skills to the test in thrilling cybersecurity
                challenges.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.expectCard}>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Expert} alt="Expert" />
            </div>
            <div className={classes.cardText}>
              <h6>Experts Talks</h6>
              <p>Learn from top cybersecurity leaders and innovators.</p>
            </div>
          </div>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Networking} alt="Networking" />
            </div>
            <div className={classes.cardText}>
              <h6>Networking</h6>
              <p>Build valuable connections with industry professionals.</p>
            </div>
          </div>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Workshop} alt="Workshop" />
            </div>
            <div className={classes.cardText}>
              <h6>Workshop</h6>
              <p>Master practical techniques through hands-on training.</p>
            </div>
          </div>
        </div>
        <div className={classes.expectCard}>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Side} alt="Attraction" />
            </div>
            <div className={classes.cardText}>
              <h6>Side Attraction</h6>
              <p>
                Fun hands-on activities that explore real-world hacking
                techniques.
              </p>
            </div>
          </div>
          <div className={classes.cardWrap}>
            <div className={classes.cardImage}>
              <img src={Swag} alt="Swag" />
            </div>
            <div className={classes.cardText}>
              <h6>Swag & Merchandise</h6>
              <p>Take home exclusive event-themed goodies.</p>
            </div>
          </div>
          <div className={classes.cardWrap}></div>
        </div>
      </div>
      <div className={classes.halfStar}>
        <img src={Half} alt="Star" />
      </div>
    </div>
  );
};

export default About;
