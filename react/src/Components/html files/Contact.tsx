<<<<<<< HEAD:react/src/Components/HTML COMPO/Contact.tsx
const ContactUS = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C89934' }}>تواصل معنا</h2>

                <div className="max-w-4xl mx-auto">
                    {/* Facebook Section */}
                    <div className="mb-10">
                        <div className="flex justify-center mb-6">
                            <img src="/2021_Facebook_icon.svg.png" alt="Facebook" className="w-16 h-16" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300">
                                    الصف الأول الثانوي
                                </button>
                            </div>

                            <div className="text-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300">
                                    الصف الثالث الاعدادي
                                </button>
                            </div>

                            <div className="text-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300">
                                    الصف الثالث الثانوي
                                </button>
                            </div>

                            <div className="text-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300">
                                    الصف الثاني الثانوي
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Section */}
                    <div>
                        <div className="flex justify-center mb-6">
                            <img src="/WhatsApp.svg.webp" alt="WhatsApp" className="w-16 h-16" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-center">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300 flex items-center justify-center">
                                    <span className="mr-2">01224277241</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-center">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300 flex items-center justify-center">
                                    <span className="mr-2">01224277241</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <h3 className="text-xl font-semibold mb-4 text-[#C89934]">تواصل معنا عبر البريد الإلكتروني</h3>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <form className="space-y-4">
                                    <div className="flex flex-col text-right">
                                        <label htmlFor="name" className="mb-1 text-gray-700 font-medium">الاسم</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="أدخل اسمك الكامل"
                                        />
                                    </div>

                                    <div className="flex flex-col text-right">
                                        <label htmlFor="email" className="mb-1 text-gray-700 font-medium">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="أدخل بريدك الإلكتروني"
                                        />
                                    </div>

                                    <div className="flex flex-col text-right">
                                        <label htmlFor="message" className="mb-1 text-gray-700 font-medium">الرسالة</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="اكتب رسالتك هنا"
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="bg-[#C89934] hover:bg-[#a67b28] text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                                        >
                                            إرسال الرسالة
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactUS
=======

import { useEffect } from 'react';

import "../css/style.css";
import "../css/main/contact.css";

import "../css/style.css";  
import "../css/main/contact.css";


const ContactUS = () => {
  useEffect(() => {
    setTimeout(() => {
      const loader = document.getElementById("ftco-loader");
      if (loader) loader.style.display = "none"; 
    }, 1000); 
  }, []);

  return (
    <>
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread">Contact Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>Contact</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Address</h3>
                <p>207 Al-Zohor St. Mohamed Ali, cairo, Egypt</p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a href="tel://+201007189296">+20 100 XXX XXXX</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a href="mailto:info@yoursite.com">group.b@Teachhub.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Website</h3>
                <p>
                  <a href="#">Teachhub.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="container-contact">
          <div className="heading-group">
            <img className="heading-image" src="/images/call-center.png" alt="" />
            <div className="heading-ser">
              <h2 className="all-heading-cont">Contact</h2>
              <hr className="all-hr" />
            </div>
          </div>
          <div className="contact-content">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="c3257d43-02fb-4ff0-9a67-2128b8f8fc43" />
              <input type="text" className="name-text" name="text" id="taxt" placeholder="Name" required />
              <input type="email" className="email" name="email" id="email" placeholder="Email" required />
              <textarea className="message" name="massage" id="massage" cols={30} rows={10} placeholder="Massage" />
              <button type="submit" className="button">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-js"></div>

      {/* loader */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div>

      <script src="./js/utils/footer.js" type="module"></script>
      <script src="https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.js"></script>
      <script src="js/main.js" type="module"></script>
    </>
  );
};

export default ContactUS;
>>>>>>> a9758cea2150a7133cfc578c0e48f4a2d6f49051:react/src/Components/html files/Contact.tsx
