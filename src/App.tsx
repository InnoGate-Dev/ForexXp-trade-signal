import "./App.css";
import Loader from "./components/loader";
import Home from "./pages/home";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
