import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./routes/AppRoutes";
import FallbackRoutes from "./routes/FallbackRoutes";
import { BrowserRouter, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {AppRoutes()}
          {FallbackRoutes()}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
