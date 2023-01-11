import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { envConfig } from "../config/config";

export default function RoomThumbNails() {
  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    fetch(`${envConfig.URL}/rooms`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => console.log(err));
  }, []);


  const cards = rooms.map((room) => (
      <div className="card" key={room._id}>
        <div className="card-header"
          style={{backgroundImage:`url(${room.img})`}}>
        </div>
        <div className="card-body">
          <h3>{room.name}</h3>
          <p>{room.description}</p>
        </div>
        <div className="card-footer">
          <div className="card-footer-link">
          < Link className="card-link" to={`/rooms/${room._id}`} >RESERVER</Link>
          </div>
          <img src={`./assets/PEGI_${room.age}.png`} />
        </div>
      </div>
  ))
  return (
    <div className="home">
      {cards}
    </div>
  )

}
