import React from "react";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero'
import About from "./Components/About";
import Support from "./Components/Support";
import AllInOne from "./Components/AllInOne";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
// import Login from "./Components/Login";
import Login2 from "./Components/Login2";
import Todo from "./Components/Todo";
// import Login3 from "./Components/Login3";

function App() {
  return (
    <div className="">
      {/* <Login />
      <Login2 />
      <Login3 /> */}
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Todo />
      <AllInOne />
      <Pricing />
      <Login2 />
      <Footer />
    </div>
  );
}

export default App;
