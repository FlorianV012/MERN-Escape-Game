import React from "react";

export default function RoomThumbNails() {
  const room = {
    name: "Scooby-Doo & Batman",
    age: 7,
    capacity: 8,
    img: "https://www.france.tv/image/vignette_16x9/800/450/5/u/a/08bcadbf-phpu17au5_png.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, exercitationem inventore voluptatum distinctio dicta in fuga repellat iusto saepe architecto porro necessitatibus error sit quod cum nisi? Reprehenderit, rerum veritatis!",
    price: 99,
    minplayers: 4,
  };

  return (
    <div className="card">
      <img className="card-header" src={room.img} style={{ width: "100%", height: "" }} />
      <div className="card-body">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-link">
          <p className="card-link">DETAIL</p>
          <p className="card-link">RESERVER</p>
        </div>
        <img src={`../../public/assets/PEGI_${room.age}.png`} />
      </div>
    </div>
  );
}
