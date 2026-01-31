import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Catagories from "./pages/Categories";
import Contact from "./pages/Contact";
export default function App() {
  // /* ===============================
  //    LEARNING: useState + Events
  //    =============================== */

  // // const [a, setA] = useState(10);

  // // function incremet() {
  // //   setA(a + 10);
  // // }

  // // function decrement() {
  // //   setA(a - 10);
  // // }

  // /* ===============================
  //    LEARNING: Form Handling
  //    =============================== */

  // // const [username, setUsername] = useState("");

  // // const submitHandler = (e) => {
  // //   e.preventDefault();
  // //   console.log(username);
  // //   setUsername("");
  // // };
  return (
    <div className="app">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/categories" element={<Catagories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
      <Footer />
    </div>
  );
}
