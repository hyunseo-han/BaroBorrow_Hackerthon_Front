import React from "react";
import Todo from "./components/Todo";
import Introduce from "./components/Introduce";
import Alert from "./components/Alert";
import Schedule from "./components/Schedule";
function Home() {
  const headername = {
    fontWeight: "bold",
    fontSize: "33px",
    marginTop: "-10vh",
    marginLeft: "32vh",
  };
  return (
    <>
      <p style={headername}>홈</p>
      <Todo />
      <Introduce />
      <Alert />
      <Schedule />
    </>
  );
}

export default Home;
