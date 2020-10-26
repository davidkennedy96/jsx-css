import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/201/300?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img alt-text=" " className="food-img" src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
