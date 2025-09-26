import React, { useContext } from "react";
import CountContext from "./CountContext";

const GrandChild = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h5>GrandChild</h5>
      <button onClick={() => setCount(count - 1)}>Dec Count (-)</button>
      <p>Count in GrandChild: {count}</p>
      <button onClick={() => setCount(count + 1)}>Inc Count (+)</button>
    </div>
  );
};

export default GrandChild;
