import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  var [currTime, setcurrTime] = React.useState(time);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setcurrTime(time);
  }

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
