import { Header } from "./components/Header";
import { Cards } from "./features/Cards";
import Button from "./components/Button";

function App() {
  console.log("hello");
  return (
    <div>
      <Header />
      <Button onClick={() => console.log("data")} />
      <Cards />
    </div>
  );
}

export default App;
