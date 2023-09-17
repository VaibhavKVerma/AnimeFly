import { Outlet } from "react-router-dom";
import Footer from "./utils/Footer";
import Header from "./utils/Header";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
