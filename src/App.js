import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
// import About from "./components/about";
import Alert from "./components/alert";
import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [btntext, setBtnText] = useState("dark mode");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => setalert(null), 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      setBtnText("dark mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("dark mode on!", "warning");
    } else {
      setmode("dark");
      setBtnText("light mode");
      document.body.style.backgroundColor = "#393939ff";
      document.body.style.color = "white";
      showalert("light mode on!", "success");
    }
  };

  return (
    <>
      <Navbar
        title="NoteUtils"
        aboutus="About Us"
        mode={mode}
        toggleMode={toggleMode}
        btntext={btntext}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route */}
            {/* exact path="/" */}
            {/* element={ */}
              <TextForm
                showalert={showalert}
                heading="Enter the text to analyze below"
              />
            {/* }
          />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
