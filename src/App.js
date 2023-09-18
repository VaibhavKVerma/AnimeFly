import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoveToTop from "./components/MoveToTop";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
      <MoveToTop />
    </div>
  );
}

export default App;
