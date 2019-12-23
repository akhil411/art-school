import React from "react";

function Jumbotron(props) {
  console.log(props.condition);
  if(props.condition){
    return (
      <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        <h1>Go Back</h1>
      </div>
    );
  } else {
    return (
      <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        <h1>Come Back</h1>
      </div>
    );
  }
 
}

export default Jumbotron;
