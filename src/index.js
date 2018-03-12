import React from "react";
import { render } from "react-dom";
import MiniPie from "./MiniPie";

let data = [
  { text: "COMEDY", value: 10, color: "darkred" },
  { text: "THRILLER", value: 7, color: "red" },
  {
    text: "DRAMA THAT NEEDS TO BE CONTRACTED",
    value: 3,
    color: "orange"
  }
];

// change dims to see effect
let width = 400;
let height = 300;

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          width: width + "px",
          fontFamily: "sans-serif",
          outline: "2px dashed blue"
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            borderBottom: "2px solid darkred"
          }}
        >
          GENRE AFFINITY
        </div>
        <MiniPie width={width} height={height} data={data} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
