import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RoomThumbNails from "./components/RoomThumbnails";


import Home from "./routes/Home";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <RoomThumbNails />
      <Footer />
    </div>
  );
}

export default App;
