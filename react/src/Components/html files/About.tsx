import { Link } from 'react-router-dom';
import '../css/main/About.css';

export default function AboutPage() {
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
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Islam Ahmed</h1>
            <h2 className="text-2xl text-indigo-700 mb-8">
              Senior English Language Instructor with over 20 years of experience
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              With over 20 years of experience in teaching English, Islam Ahmed has helped thousands of students improve their language skills. His engaging teaching style, deep linguistic knowledge, and passion for education make him a favorite among learners of all ages.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-10">
              {["IELTS Preparation", "Conversational English", "Business English", "Grammar & Writing"].map((item, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto bg-white p-12 rounded-3xl shadow-xl mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-10">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            {
              icon: "fa-book-reader",
              title: "Curriculum Design",
              desc: "Creating customized learning plans to meet the needs of all students."
            },
            {
              icon: "fa-comments",
              title: "Interactive Learning",
              desc: "Engaging students through conversation and interactive sessions."
            },
            {
              icon: "fa-pen",
              title: "Writing & Grammar",
              desc: "Improving writing skills and mastering English grammar."
            },
            {
              icon: "fa-briefcase",
              title: "Business English",
              desc: "Helping students develop professional English skills for the workplace."
            },
            {
              icon: "fa-laptop-code",
              title: "Online Teaching",
              desc: "Delivering flexible, interactive lessons through online platforms."
            },
            {
              icon: "fa-comments",
              title: "Interactive Learning",
              desc: "Engaging students through conversation and interactive sessions."
            }
          ].map((skill, i) => (
            <div key={i} className="text-center p-6 bg-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <i className={`fas ${skill.icon} text-4xl text-indigo-700 mb-4`}></i>
              <h3 className="text-xl font-semibold text-indigo-700">{skill.title}</h3>
              <p className="text-gray-600 mt-2">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center pt-20">
        {[
          { num: "20+", label: "Years of Experience" },
          { num: "3000+", label: "Students Taught" },
          { num: "50+", label: "Workshops Conducted" }
        ].map((stat, i) => (
          <div key={i} className="p-8 text-gray rounded-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-5xl font-bold">{stat.num}</p>
            <p className="text-xl">{stat.label}</p>
          </div>
        ))}
      </div>

      <Link to="/contact">
        <div className="mt-16">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-200 transition">
            Contact Islam Ahmed
          </button>
        </div>
      </Link>


      <div className="text-black py-6 mt-16 rounded-t-3xl">
        <p className="text-xl font-medium">Learn English with Islam Ahmed</p>
        <p className="mt-2 text-sm">Follow me on social media for tips and updates.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-2xl hover:text-indigo-300">Facebook</a>
          <a href="#" className="text-2xl hover:text-indigo-300">Twitter</a>
          <a href="#" className="text-2xl hover:text-indigo-300">Instagram</a>
        </div>
      </div>
    </div>
  );
}
