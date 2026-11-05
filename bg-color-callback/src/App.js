//Parent component
//data is flowing upwards from child to parent with the help of callback functions
//Remember: A component becomes a parent when it renders another component inside it

import React, {useState} from "react";
import Callback from "./Callback";
import "./App.css";

function App() {
  const [UIcolor, setUIcolor] = useState(null);

  //our callback function
  const getcolor = (color) => {
    setUIcolor(color);
  };
  return (
    <div className="App">
      <div className="App_color_container" style={{ background: `${UIcolor}`}} ></div>
      <Callback getcolor={getcolor} ></Callback>
    </div>
  );
}

export default App;


//<Callback getcolor={getcolor} ></Callback> //This is passing props, not destructuring. You're passing a prop named getcolor to the child component.