import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-white">
        Password Generator
      </h1>
    </>
  );
}

export default App;
