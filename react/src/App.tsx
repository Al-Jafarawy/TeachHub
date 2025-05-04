import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Header from "./Components/HTML COMPO/header.tsx";
import Profile from "./Components/HTML COMPO/Profile.tsx";
import Reports from "./Components/HTML COMPO/Report .tsx";
import Video from "./Components/HTML COMPO/Vid.tsx";
import Works from "./Components/HTML COMPO/Works.tsx";
import About from "./Components/HTML COMPO/About.tsx";
import TopStudents from "./Components/HTML COMPO/TopStudents.tsx";
import Courses from "./Components/HTML COMPO/Courses.tsx";
import Pricing from "./Components/HTML COMPO/Pricing.tsx";
import Blog from "./Components/HTML COMPO/Blog.tsx";
import Contact from "./Components/HTML COMPO/Contact.tsx";
import Login from "./Components/HTML COMPO/Login.tsx";
import SignUp from "./Components/HTML COMPO/SignUp.tsx";
import Footer from "./Components/Footer/Footer.tsx";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/video" element={<Video />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/top-students" element={<TopStudents />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;