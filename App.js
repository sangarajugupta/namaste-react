import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "React parent"),
//     React.createElement("h2", {}, "React parent rocket jump 12"),
//   ])
// );



const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste12 React using JSdsadX 🚀
  </h1>
);


//jsx babel transpiles the code
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello welcome to React"
// );

// //JSX converts the code to react Element
// const jsxHeading = <h1 id="heading">hello react by 1Sanga</h1>
// console.log(jsxHeading);

const HeadingComponent = () => {
  return (
    <>
      <div id="container">
        <Title />
        <h1>namsate react functional component1</h1>
      </div>{" "}
      <div id="conatainer-2"></div>
    </>
  );
};

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
