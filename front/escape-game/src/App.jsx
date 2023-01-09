import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import Home from "./routes/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
