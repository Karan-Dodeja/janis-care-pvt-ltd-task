import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
