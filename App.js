import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = (
  <h1 className="heading" tabIndex={5}>
    Hello from JSX 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);
