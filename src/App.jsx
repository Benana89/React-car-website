import { useState } from "react";
import mainCar from "./assets/main_car.png";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="home">
        <div className="main-section">
        <img src={mainCar} className="main-car" />
        <div className="circle"></div>
        <h1 className="main-title">Mercedes-Benz SL55 AMG </h1>
        </div>
        
      </section>

      <section id="about">
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
      </section>
    </>
  );
}
