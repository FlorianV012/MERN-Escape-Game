import { useState } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      coucou
      <Footer />
    </div>
  );
}

export default App;
