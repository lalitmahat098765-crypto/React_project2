import { useState } from "react";

function IncreaseDecrease() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default IncreaseDecrease;
