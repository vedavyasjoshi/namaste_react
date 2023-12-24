import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  return (
    <h1 className="heading" tabIndex={5}>
      Hello from JSX 🚀
    </h1>
  );
};

const HeadingComponent = () => <h1>Functional Component</h1>;
const HeadingComponent2 = () => (
  <h1 className="heading">Functional Component2</h1>
);

const number=1000;
const HeadingComponent3 = () => {
  return (
    <div>
      {number}
      {Title()}
      <Title />
      <Title></Title>
      {console.log("Hey there")}
      <h1 className="heading">Functional Component3 {number+100}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />);
