import logo from "./logo.svg";
import "./App.css";
import CurrencyConvertor from "./Small Projects/CurrencyConverter/CurrencyConvertor";
import OTP from "./Small Projects/OTPlogin/LoginOTP";
import Quiz from "./Small Projects/Quiz/Quiz";
import Stepper from "./Small Projects/Stepper/Stepper";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Todo from "./Small Projects/Todo/Todo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RBG from "./Small Projects/SetColor/RBG";
import Projects from "./Screens/Projects";
import Password from "./Small Projects/PasswordGenerator/Password";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Weather from "./Small Projects/WeatherPrediction/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Projects />}>
            <Route path="todo" element={<Todo />}></Route>
            <Route path="OTPLogin" element={<OTP />}></Route>
            <Route path="weather" element={<Weather />}></Route>
            <Route
              path="currencyConverter"
              element={<CurrencyConvertor />}
            ></Route>
            <Route path="passwordGenerator" element={<Password />}></Route>
            <Route path="quiz" element={<Quiz />}></Route>
            <Route path="RBG" element={<RBG />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
