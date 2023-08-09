const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "React parent"),
    React.createElement("h2", {}, "React parent"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello welcome to React"
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
