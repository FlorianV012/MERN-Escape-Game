import React, { useState, useEffect } from "react";

export default function RoomThumbNails() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/rooms`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);


  const cards = rooms.map((room, index) => (
      <div className="card" key={index}>
        <img
          className="card-header"
          src={room.img}
          style={{ width: "100%", height: "" }}
        />
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
  ))
  return (
    <div className="home">
      {cards}
    </div>
  )

}
