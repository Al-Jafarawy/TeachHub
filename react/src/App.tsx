import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import Header from "./Components/html files/nav.tsx";
import Profile from "./Components/html files/Profile.tsx";
import Reports from "./Components/html files/Report .tsx";
import Works from "./Components/html files/Works.tsx";
import About from "./Components/html files/About.tsx";
import TopStudents from "./Components/html files/TopStudents.tsx";
import Courses from "./Components/html files/Course.tsx";
import Blog from "./Components/html files/Blog.tsx";
import Contact from "./Components/html files/Contact.tsx";
import Login from "./Components/html files/Login.tsx";
import SignUp from "./Components/html files/SignUp.tsx";
import Footer from "./Components/html files/Footer.tsx";
import AdminEdiUser from "./Components/html files/admin-edit-user.tsx";
import HomePage from "./Components/html files/Home.tsx";
import ScrollToTop from './Components/ScrollToTop.tsx';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* إضافة مكون ScrollToTop هنا */}
        <div className="app-container">
          <Header />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/works" element={<Works />} />
              <Route path="/about" element={<About />} />
              <Route path="/top-students" element={<TopStudents />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin-edit-user" element={<AdminEdiUser />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
