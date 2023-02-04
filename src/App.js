import { useState, useEffect } from "react";

function Hello() {
  const [state, setState] = useState(false);
  const onClick = () => {
    setState((test) => !test);
  };
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);
  useEffect(() => {
    console.log("hi :) test");
    return () => {
      console.log("bye :( tset");
    };
  }, [state]);
  return (
    <>
      <h1>Hello</h1>
      <button onClick={onClick}>test</button>
    </>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
