import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import About from "./Screens/About";
import Home from "./Screens/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  CurrencyConvertor,
  LoginOTP,
  PasswordGenerator,
  Quiz,
  RBG,
  Stepper,
  Todo,
  Weather,
} from "./Small_Projects/React_JavaScript/index.js";
import {
  TicTacToe,
  StickyNotesTracker,
  A2048,
  RockPaperScissors,
} from "./Small_Projects/React_TypeScript/index.ts";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />}>
            <Route
              path="quiz"
              component={() => {
                window.location.href = "/quiz.html";
                return;
              }}
            />
            <Route path="todo" element={<Todo />}></Route>
            <Route path="OTPLogin" element={<LoginOTP />}></Route>
            <Route path="weather" element={<Weather />}></Route>
            <Route
              path="currencyConverter"
              element={<CurrencyConvertor />}
            ></Route>
            <Route path="stickyNotes" element={<StickyNotesTracker />}></Route>
            <Route
              path="passwordGenerator"
              element={<PasswordGenerator />}
            ></Route>
            <Route path="quiz" element={<Quiz />}></Route>
            <Route path="TicTacToe" element={<TicTacToe />}></Route>
            <Route path="A2048" element={<A2048 />}></Route>
            <Route
              path="RockPaperScissors"
              element={<RockPaperScissors />}
            ></Route>
            <Route path="RBG" element={<RBG />}></Route>
          </Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
