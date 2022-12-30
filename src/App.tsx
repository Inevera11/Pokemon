import { Header } from "./features/Header";
import MyCards from "./Routes/MyCards";
import { Outlet, Route, Routes } from "react-router";
import Home from "./Routes/Home";
import { GetCoinsProvider } from "./context/GetCoinsProvider";
function App() {
  console.log("hello");
  return (
    <div>
      <GetCoinsProvider>
        <Header />
        <Outlet />
      </GetCoinsProvider>
    </div>
  );
}

export default App;
