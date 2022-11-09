import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/index.scss";
import Home from "./Pages/Home";
import HeroesPage from "./Pages/HeroesPage";
import MapsPage from "./Pages/MapsPage";
import Error from "./Pages/Error";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/heroes' element={<HeroesPage/>}/>
      <Route path='/maps' element={<MapsPage/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
