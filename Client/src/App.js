import {BrowserRouter ,Routes ,Route }from "react-router-dom"
import Home from "./componts/Home";
import Login from "./componts/login";
import Restration from "./componts/Restration";
import First from "./componts/First";
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
       /</Routes>
    </BrowserRouter>
  </div>
  
  );
}

export default App;

