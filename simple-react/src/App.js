import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    userName: "Bikash",
    age: 28,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Bikash Yamphu Rai
      </h1>
      <Card username="Bikash Yamphu Rai" />
      <Card username="Makalu Barun National Park" />
    </>
  );
}

export default App;
