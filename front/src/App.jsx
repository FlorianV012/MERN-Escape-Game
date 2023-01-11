import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RoomThumbNails from "./components/RoomThumbnails";
import Login from './routes/Login';
import Reservation from './routes/Reservation';
import SignUp from './routes/SignUp';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<RoomThumbNails />} />
        <Route path='/rooms/:id' element={<Reservation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
