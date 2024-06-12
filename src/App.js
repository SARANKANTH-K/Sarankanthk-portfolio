import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { Toaster, toast } from "sonner";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   toast.success("Welcome to my portfolio!");
  // }, []);

  return (
    <div className="App">
      {/* <Toaster richColors expand={true} /> */}
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <TopButton /> */}
    </div>
  );
}

export default App;
