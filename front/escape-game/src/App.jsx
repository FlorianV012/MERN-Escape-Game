import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RoomThumbNails from "./components/RoomThumbnails";
import Reservation from './routes/Reservation';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<RoomThumbNails />} />
        <Route path='/rooms/:id' element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
