import '/Users/koushikpillalamarri/Desktop/Blinkpad/my-react-app/src/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about";
import Business from "./business";
import Faq from "./faq";
import Login from "./login";
import SignUp from "./signup";
import Header from "./header";
import Home from "./Home";

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
        
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;




