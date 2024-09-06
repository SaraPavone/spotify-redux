import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppMain from "./components/AppMain";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<AppMain/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
