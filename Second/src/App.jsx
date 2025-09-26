import React, { useContext } from "react";
import CountContext from "./CountContext";
import ParentComponent from "./ParentComponent";

function App() {
  const { count } = useContext(CountContext);

  return (
    <div className="container">
      <h2>App Component</h2>
      <p>Count in App: {count}</p>
      <ParentComponent />
    </div>
  );
}

export default App;
