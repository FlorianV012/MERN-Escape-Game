import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import RoomDetail from '../components/RoomDetail'
// import RoomReservation from '../components/RoomReservation'

export default function Reservation() {

    const [room, setRoom] = useState([]);
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:5000/rooms/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setRoom(data);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <>
        <RoomDetail room={room} />
        {/* <RoomReservation /> */}
    </>
  )
}
