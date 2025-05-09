import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevicesPage from "../pages/DevicesPage";
import ErrorsPage from "../pages/ErrorsPage";

const Router = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<DevicesPage />} />
          <Route path="/errors-page" element={<ErrorsPage />} />
        </Routes>
    </>
  );
};

export default Router;
