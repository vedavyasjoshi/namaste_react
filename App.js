const heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello from React 1"
);
const heading2 = React.createElement(
    "h1",
    { id: "heading2" },
    "Hello from React 2"
  );
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [heading1, heading2])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
