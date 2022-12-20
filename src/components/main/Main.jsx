import React, { useState } from "react";
import "../main/Main.css";
import Black from "../images/Black.png";
import Caralluma from "../images/Caralluma.png";
import Fenugreek from "../images/Fenugreek.png";
import Garcinia from "../images/Garcinia.png";
import Green from "../images/Green.png";
import Button from "../images/Button.svg";
const Main = () => {
  const [clicked, setClicked] = useState(null);

  const data = [
    {
      id: "1",
      img: Black,
      title: "Garcinia Cambodia 60%",
      image: Button,
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis non veniam error, praesentium harum nisi commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis",
    },
    {
      id: "2",
      img: Caralluma,
      title: "Caralluma Fimbirata Extract",
      image: Button,
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis ",
    },
    {
      id: "3",
      img: Fenugreek,
      title: "Fenugreek Seed Extract",
      image: Button,
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. Ipsa veritatis non veniam error,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis ",
    },
    {
      id: "4",
      img: Garcinia,
      title: "Black Pepper Fruit Extract",
      image: Button,
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis ",
    },
    {
      id: "5",
      img: Green,
      title: "Green Coffee Extract",
      image: Button,
      name: ". Ipsa veritatis non veniam error, praesentium harum nisi commodi. Autem, accusantium vel!consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis ",
    },
  ];

  const clickHandler = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="main-headingOfImage">
          <div className="heading-style">
            <h2>Only Natural Ingredients</h2>
          </div>
        </div>
        <div className="image-listStyle-container">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={clicked === index ? "image-expand" : "image"}
              style={{
                backgroundImage: "url(" + item.img + ")",
                backgroundSize: "cover",
              }}
            >
              <button onClick={() => clickHandler(index)} className="btn-style">
                <img src={item.image} alt="error" />
              </button>
              <div
                className={
                  clicked === index ? "image-content-show" : "image-content"
                }
              >
                <p>{item.name}</p>
              </div>
              <div className="image-title">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
