import { Link } from "react-router-dom";
import React, { userState } from 'react';
import Footer from "./Footer";

const Test = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick = {setCounter(counter ++)}>
      Increment
    </button>
  );
};

export default Test;
