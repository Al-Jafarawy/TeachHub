import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Header from "./Components/Header/header.tsx";
import Profile from "./Components/Profile/Profile.tsx";
import Reports from "./Components/Report/Report .tsx";
import Video from "./Components/Vid/Vid.tsx";
import Works from "./Components/Works/Works.tsx";
import About from "./Components/About/About.tsx";
import TopStudents from "./Components/TopStudents/TopStudents.tsx";
import Courses from "./Components/Courses/Courses.tsx";
import Pricing from "./Components/Pricing/Pricing.tsx";
import Blog from "./Components/Blog/Blog.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import Login from "./Components/Login/Login.tsx";
import SignUp from "./Components/SignUp/SignUp.tsx";
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