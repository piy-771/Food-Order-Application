//import DynamicInputs from "./DynamicInputs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Order from "./Order";
import YourOrder from "./YourOrder";
import './css/App.css'
import Menu from "./Menu";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="menu" element={<Menu/>} />
      <Route path="order" element={<Order/>} />
      <Route path="yourorder" element={<YourOrder/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
      
    
    </>
  )
}

export default App;