import React from "react";
import "./index.scss";

const App = () => {
  let variable: string;

  variable = "Hello World!";
  return (
    <div>
      <h1>{variable}</h1>
    </div>
  );
};

export default App;
