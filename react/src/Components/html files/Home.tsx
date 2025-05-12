import { Link } from "react-router-dom";
import "../css/main/Home.css";

export default function HomePage() {
  return (
    <div className="bg-white ">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Learn English with Confidence
            </h1>
            <p className="text-xl mb-8 text-gray-600 pb-8">
              Personalized lessons, expert guidance, and real-world practice to
              take your English to the next level.
            </p>
            <Link to="/about">
              <button className="bg-indigo-100 text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-200 transition">
                Contact Instructor <i className="fa fa-arrow-right "></i>
              </button>
            </Link>
          </div>

          <img
            src="https://images.pexels.com/photos/3183189/pexels-photo-3183189.jpeg"
            alt="English Learning"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6 bg-gray-50 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold pb-10 home-our-courses">
            Our Top Courses
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "IELTS Preparation" },
              { title: "Speaking Fluently" },
              { title: "Business English" },
              { title: "Grammar & Writing" },
              { title: "Kids English" },
              { title: "Pronunciation" },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-indigo-700">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  High-quality training & resources to boost your confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full h-[400px] overflow-hidden rounded-3xl mx-auto">
        <img
          src="/homePage.jpg"
          alt="Top Students"
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link to="/top-students">
            <button className="border border-white text-white font-medium text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg">
              View Top Students
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <img
            src="/why.jpg"
            alt="Why Choose Us"
            className="rounded-3xl shadow-2xl"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6 text-indigo-700">
              Why Choose Us?
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔️ Tailored learning paths for every student</li>
              <li>✔️ Experienced and certified instructors</li>
              <li>✔️ Interactive and engaging lessons</li>
              <li>✔️ Flexible schedules to suit your needs</li>
              <li>✔️ Supportive learning environment</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Read Blog Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-indigo-700">
              Discover Insights in Our Blog
            </h2>
            <p className="text-lg text-gray-700 mb-6  pb-2">
              Explore tips, strategies, and stories to improve your English
              learning journey. Explore tips, strategies, and stories to improve
              your English learning journey.
            </p>
            <Link to="/blog">
              <button className="bg-indigo-100 text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-200 transition">
                Read the Blog <i className="fa fa-arrow-right "></i>
              </button>
            </Link>
          </div>
          <img
            src="/blog.webp"
            alt="Read the Blog"
            className="rounded-3xl shadow-2xl w-full md:w-1/3"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
        <p className="text-lg mb-8 text-black-700 pb-2">
          Contact us now and take your English to the next level with Islam
          Ahmed.
        </p>
        <Link to="/contact">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-200 transition">
            Get in Touch <i className="fa fa-arrow-right "></i>
          </button>
        </Link>
      </section>
    </div>
  );
}
