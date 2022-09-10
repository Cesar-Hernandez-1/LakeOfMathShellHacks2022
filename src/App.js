import { BrowserRouter as Router, Routes,
  Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import MyButton from "./MyButton";
import Kindergarten from "./Kindergarten";
import A from "./firstToFourth";
import B from "./fifthToEighth";
import C from "./ninthToTwelfth";

const App = () => {
  return (
      <div className="app">
        <Router>
          <MyButton to="" />

          <MyButton to="about" />

          <MyButton to="Kindergarten" />

          <MyButton to="A" />

          <MyButton to="B" />

          <MyButton to="C" />


          <Routes>
            <Route path="/"
                   element={<Home />} />

            <Route path="/about"
                   element={<About />} />

            <Route path="/Kindergarten"
                   element={<Kindergarten />} />

            <Route path="/A"
                   element={<A />} />

            <Route path="/B"
                   element={<B />} />

            <Route path="/C"
                   element={<C />} />

          </Routes>
        </Router>
      </div>
  )
}

export default App;