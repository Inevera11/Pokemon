import { Header } from "./features/Header";
import MyCards from "./Routes/MyCards";
import { Outlet, Route, Routes } from "react-router";
import Home from "./Routes/Home";
function App() {
  console.log("hello");
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
