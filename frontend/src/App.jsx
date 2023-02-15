import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;