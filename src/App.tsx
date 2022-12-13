import { Header } from "./components/Header";
import MyCards from "./components/Routes/MyCards";
import { Route, Routes } from "react-router";
import Home from "./components/Routes/Home";
function App() {
  console.log("hello");
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myCards" element={<MyCards />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
