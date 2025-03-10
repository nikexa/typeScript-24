import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import ErrorPage from "./Pages/ErrorPage";
import Country from "./Pages/Country";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:countryName" element={<Country/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
