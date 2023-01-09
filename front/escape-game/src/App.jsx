import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      coucou
      <Footer className='footer'/>
    </div>
  );
}

export default App;
