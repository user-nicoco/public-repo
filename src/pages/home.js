import React from "react";
import "../styles//pages/Home.css";
import PictureProfil from "../assets/images/photos/ProfilPicture.webp";

const Home = () => {
  return (
    <div className="home-div">
      <div className="home-info">
        <h1>Portfolio</h1>
        <h2>
          Bienvenue <br /> dans mon portfolio. <br />
          <br /> Merci !
        </h2>
        <ul>
          <li>Name : Nicolas </li>
          <li>Pseudo : Brrs, NclsBrrs </li>
          <li>Birth Year : 1995 </li>
          <li>Birth Month: Janvier</li>
        </ul>
     <br />
        <p>N'hésitez pas à prendre contact avec moi.</p>
      </div>

      <div className="home-ael">
        <div className="home-img">
          <img className="home-pp" src={PictureProfil} alt="AeLBuS" />
        </div>
      </div>
    </div>
  );
};
export default Home;
