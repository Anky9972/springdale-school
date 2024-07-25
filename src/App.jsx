
import ContactUs from "./components/contact-us";
import './App.css'
import HomePage from './pages/Home'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </div>
  )
}

export default App
