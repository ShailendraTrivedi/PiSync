import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DevicesPage from "./pages/DevicesPage";
import ErrorsPage from "./pages/ErrorsPage";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Navbar />

      <div className="w-full px-10 ">
        <Router />
      </div>
    </>
  );
}

export default App;
