import Header from "./features/Header";
import { Outlet } from "react-router";
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
