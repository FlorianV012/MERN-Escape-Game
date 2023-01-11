import React, { useState, useEffect } from "react";

export default function RoomDetail({ room }) {
  return (
    <div className="detail">
      <div
        className="detail-header"
        style={{ backgroundImage: `url(${room.img})` }}
      >
        <img
          src={`../public/assets/PEGI_${room.age}.png`}
          className="detail-pegi"
        />
      </div>
      <div className="detail-body">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
      </div>
    </div>
  );
}
