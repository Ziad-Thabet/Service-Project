import {BrowserRouter ,Routes ,Route }from "react-router-dom"
import Home from "./componts/Home";
import Login from "./componts/login";
import Restration from "./componts/Restration";
import First from "./componts/First";
import Protien from "./componts/Protien";
import Creatien from "./componts/Creatien"
import Preworks from"./componts/Preworks"
import Fautemn from "./componts/Fautemn"
import SERVICES from"./componts/SERVICES"
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
       <Route index element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/Restration" element={<Restration />} />
       <Route path="/First" element={<First/>} />
       <Route path="/Protien" element={<Protien/>} />
       <Route path="/Creatien" element={<Creatien/>} />
       <Route path="/Preworks" element={<Preworks/>} />
       <Route path="/Fautemn" element={<Fautemn/>} />
       <Route path="/SERVICES" element={<SERVICES/>} />
       /</Routes>
    </BrowserRouter>
  </div>
  
  );
}

export default App;

