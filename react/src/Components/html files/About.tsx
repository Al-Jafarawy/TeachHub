import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../css/main/About.css'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { isLoggedIn, setCheckAdmin, authLoading } = useAuth();
  const navigate = useNavigate();

  // Show the "scroll to top" button when the user scrolls
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const checkAdmin = async () => {
      await setCheckAdmin(false);
      if (!isLoggedIn && !authLoading) {
        navigate("/login");
      }
    };
    checkAdmin();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [ isLoggedIn, authLoading ]);
  return (
    <div className="via-pink-500 to-red-500 py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* About Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-16 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <img
              src="images/teacher.jpg"
              alt="Islam Ahmed - English Teacher"
              className="w-full h-96 rounded-3xl object-cover shadow-xl transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
              Islam Ahmed
            </h1>
            <h2 className="text-2xl text-indigo-700 mb-8">
              Senior English Language Instructor with over 20 years of
              experience
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              With over 20 years of experience in teaching English, Islam Ahmed
              has helped thousands of students improve their language skills.
              His engaging teaching style, deep linguistic knowledge, and
              passion for education make him a favorite among learners of all
              ages.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-10">
              <span className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                IELTS Preparation
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                Conversational English
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                Business English
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                Grammar & Writing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto bg-white p-12 rounded-3xl shadow-xl mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-10 ">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-book-reader text-4xl text-indigo-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-indigo-700">
              Curriculum Design
            </h3>
            <p className="text-gray-600 mt-2">
              Creating customized learning plans to meet the needs of all
              students.
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-comments text-4xl text-indigo-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-indigo-700">
              Interactive Learning
            </h3>
            <p className="text-gray-600 mt-2">
              Engaging students through conversation and interactive sessions.
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-pen text-4xl text-indigo-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-indigo-700">
              Writing & Grammar
            </h3>
            <p className="text-gray-600 mt-2">
              Improving writing skills and mastering English grammar.
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-briefcase text-4xl text-indigo-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-indigo-700">
              Business English
            </h3>
            <p className="text-gray-600 mt-2">
              Helping students develop professional English skills for the
              workplace.
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-laptop-code text-4xl text-indigo-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-indigo-700">
              Online Teaching
            </h3>
            <p className="text-gray-600 mt-2">
              Delivering flexible, interactive lessons through online platforms.
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-comments text-4xl text-indigo-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-indigo-700">
              Interactive Learning
            </h3>
            <p className="text-gray-600 mt-2">
              Engaging students through conversation and interactive sessions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        <div className="p-8 text-gray rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <p className="text-5xl font-bold">20+</p>
          <p className="text-xl">Years of Experience</p>
        </div>
        <div className="p-8 text-gray rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <p className="text-5xl font-bold">3000+</p>
          <p className="text-xl">Students Taught</p>
        </div>
        <div className="p-8  text-gray rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <p className="text-5xl font-bold">50+</p>
          <p className="text-xl">Workshops Conducted</p>
        </div>
      </div>

      <Link to="/contact">
        <div className="mt-16">
          <button className="contact-about-page bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105">
            Contact Islam Ahmed
          </button>
        </div>
      </Link>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            ↑
          </button>
        </div>
      )}

      {/* Footer Section */}
      <div className=" text-black py-6 mt-16 rounded-t-3xl">
        <p className="text-xl font-medium">Learn English with Islam Ahmed</p>
        <p className="mt-2 text-sm">
          Follow me on social media for tips and updates.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className=" text-2xl hover:text-indigo-300">
            Facebook
          </a>
          <a href="#" className=" text-2xl hover:text-indigo-300">
            Twitter
          </a>
          <a href="#" className=" text-2xl hover:text-indigo-300">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
