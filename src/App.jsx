import { useState } from "react";
import mainCar from "./assets/main_car.png";
import mainCarFront from "./assets/main-car-front.png";
import side from "./assets/side.png";
import sideWheel from "./assets/side_wheel.png";
import sideFront from "./assets/side_front.png";
import sideBack from "./assets/side_back.png";
import porche from "./assets/porche.png";
import carLeft from "./assets/car_left.png";
import carRight from "./assets/car_right.png";
import "./App.css";
import { Carousel } from "./Carousel";

export default function App() {
  return (
    <>
      <section id="home">
        <div className="main-section">
          <img src={mainCar} className="main-car" />
          <div className="gradient-box"></div>
          <img src={mainCarFront} className="main-car-front" />

          <div className="circle"></div>
          <h1 className="main-title">Mercedes Benz SL55 AMG </h1>
        </div>
      </section>

      <section id="about">
        <div className="detail">
          <div>
            <span className="title pr-1">TEXT</span>
            <span className="sub-title pr-2">JEREMY CHUA</span>

            <span className="title pr-1">DESIGN</span>
            <span className="sub-title">CJ. FOO</span>
          </div>
          <div className="published">PUBLISHED ON 03 APRIL 2023, 3:37 PM</div>
        </div>
        <div className="description">
          <p>
            The iconic SL has been transformed from 'super-light' to 'superb
            luxurious', and in SL55 form, packs plenty of firepower, too.
          </p>
          <p>
            Electric cars, EVs, zero emissions, sustainability,
            eco-friendliness. We're constantly bombarded with terms like these
            that we're literally drowning in eco-consciousness. Internal
            combustion engines and fossil fuels are bad and must be phased out.
          </p>
          <p>
            The intentions are good, but they are becoming suffocating.
            Ever-tightening emission regulations have quietened the voices of
            high-performance machines. Driving and admiring 'traditional' sports
            cars feels like a crime. But every now and then, a car like the
            Mercedes-Benz SL comes along.
          </p>
          <p>
            Yes, it goes fast, attracts attention, and takes a big chunk out of
            your savings. In SL55 form, it is the first brand-new SL in
            Singapore that costs over $1 million ($1,002,888 to be exact), its
            price inflated by the heftier taxes levied on super-luxury cars.
          </p>
          <p>
            Price tag and vehicle dynamics are just the tip of the iceberg,
            though. It is no ordinary sports car, for the SL's true purpose is
            to refresh a petrolhead's soul.
          </p>
        </div>
        <Carousel></Carousel>
        {/* <div className="carousel-container">
          <div className="carousel">
            <img src={sideFront} alt="Image 1" className="carousel-image" />
            <img src={sideBack} alt="Image 2" className="carousel-image" />
            <img src={sideWheel} alt="Image 3" className="carousel-image" />
            <img src={side} alt="Image 3" className="carousel-image" />
          </div>
          <button className="carousel-button prev">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="carousel-button next">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div> */}
      </section>

      <section id="pedigree" className="pedigree-section">
        <h1 className="pedigree-title">Pedigree</h1>
        <div className="pedigree-detail">
          <div>
            <p>
              When one thinks of a German sports car with heritage, chances are
              the Porsche 911 , which was first launched in 1963, immediately
              pops into mind.
            </p>
            <p>
              There's another model with an even longer history though: It's the
              Mercedes-Benz SL, which first debuted as a racecar in 1952.
            </p>
            <p>
              The SL has racecar heritage, but over seven decades, its
              sportiness was blended with cruising ability. SL, which stands for
              'sport-light', continually evolved into a topless grand tourer.
            </p>
          </div>
          <div>
            <div className="rounded-image">
              <div className="image-title">Porsche 911</div>
              <img src={porche} />
            </div>
          </div>
        </div>
      </section>

      <section id="interior" className="interior-section">
        <div className="header-right"></div>
        <div className="header-left">
          <h1>Different interior approach</h1>
        </div>
        <div className="header-right-text">
          Modern Mercedes models have interiors designed to elicit wows from the
          moment you lay eyes on the cockpit, but the SL is going with a
          'hyperanalogue' approach.
        </div>
        <div className="interior-content">
          <p>
            Yes, there are still screens. But instead of the usual MBUX
            (Mercedes-Benz User Experience) setup, the 12.3-inch instrument
            panel is housed under a cowl, reflecting the SL's sporty roots.
          </p>
          <p>
            Dominating the dashboard is the tablet-like 11.9-inch infotainment
            display, whose tilt angle can be adjusted from 12 degrees to 32
            degrees at a touch of a button. It helps minimise screen glare when
            driving with the top down.
          </p>
        </div>
      </section>

      <section id="video" className="video-section">
        <h1 className="video-title">Time to dance </h1>
        <p>
          Are you tired of hearing about how silent EVs are? Do you crave drama
          and emotion? Then you must want a car like the SL55, whose powertrain
          is unashamedly unadulterated.
        </p>
        <p>
          Thumb the starter button and the twin-turbocharged, 3,982cc V8 comes
          alive with a deep bark. Petrolheads within earshot can immediately
          tell that an eight-cylinder was just fired up. There's no mistaking
          this for any other type of engine.
        </p>
        <p>
          The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the latter
          figure from just 2,250rpm. Power is transferred to both axles through
          the 4Matic+ system with fully variable torque distribution, making
          this the first all-wheel drive SL.
        </p>
        <div className="video-responsive">
          <iframe
            width="600"
            height="226"
            src={`https://www.youtube.com/embed/I8CygBDUIBs`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <p>
          Time seems to slow down in the SL55, despite its ability to get from
          rest to 100km/h in 3.9 seconds. The acceleration is great, but losing
          yourself in the drive is even better. Here, I momentarily forget about
          the outside world. Savouring the car's soul-stirring abilities are
          more important than meetings and deadlines.
        </p>
        <p>
          Show the SL a series of corners and it obliges your whims, with the
          steering wheel unexpectedly feeding back road undulations. The car's
          movements are progressive and natural. The ride, even in Sport, is
          pliant, yet accords enough body control on twistier paths.
        </p>
      </section>
      <div className="footer">
        <div className="left-pill">
          <img src={carLeft} />
          <div dir="rtl" className="pill-area">
            <span className="pill-title left-pill-title"> What We Like</span>

            <ul className="circle-bullet">
              <li>
                Rapid performance<div className="bullet"></div>
              </li>
              <li>Loud V8 and throaty exhaust</li>
              <li>Pliant ride</li>
              <li>Cruising ability</li>
              <li>Might be the last SL with a V8</li>
              <li>Still feels special</li>
            </ul>
          </div>
        </div>
        <div className="right-pill">
          <div className="pill-area">
            <span className="pill-title right-pill-title">What We Dislike</span>

            <ul className="circle-bullet">
              <li>Ridiculous $1 million price tag</li>
              <li>Non-existent rear-wheel </li>
              <li>steering</li>
              <li>No soft-closing doors</li>
              <li>Seriously overpriced</li>
            </ul>
          </div>
          <img src={carRight} />
        </div>
      </div>
    </>
  );
}
