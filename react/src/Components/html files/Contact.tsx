import { useEffect } from "react";
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
      <section
        className="hero-wrap hero-wrap-2 "
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
      >
        <div className="overlay"></div>
        
      </section>

      <section className="ftco-section contact-section container ">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            {[
              {
                title: "Address",
                content: "207 Al-Zohor St. Mohamed Ali, Cairo, Egypt",
              },
              {
                title: "Email Address",
                content: (
                  <a href="mailto:info@yoursite.com">group.b@Teachhub.com</a>
                ),
              },
              {
                title: "Website",
                content: <a href="#">Teachhub.com</a>,
              },
            ].map((item, index) => (
              <div className="col-md-4 col-12 d-flex mb-4" key={index}>
                <div className="box-shadow-global text-center p-4 w-full">
                  <h3 className="mb-4">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ marginTop: "-150px" }}>
        <div className="heading-group" style={{ margin: "50px" }}>
          <img className="heading-image" src="/social .jpg" alt="" />
          <div className="heading-ser">
            <h2 className="all-heading-cont">Social Media</h2>
            <hr className="all-hr" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 px-4">
          {/* Facebook */}
          <div className="box-shadow-global text-center">
            <img
              src="/2021_Facebook_icon.svg.png"
              alt="Facebook"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Facebook Groups
            </h3>
            <div className="flex-container">
              {["Secondery One", "Secondery Two"].map((grade, index) => (
                <button
                  key={index}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  {grade}
                </button>
              ))}
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                Secondery Three
              </button>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="box-shadow-global text-center">
            <img
              src="/WhatsApp.svg.webp"
              alt="WhatsApp"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              WhatsApp Numbers
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex gap-4">
                {["0100 XXX XXXX", "0111 XXX XXXX"].map((phone, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/2${phone.replace(/\s+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" a-green border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300 no-underline"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <input
              type="hidden"
              name="access_key"
              value="c3257d43-02fb-4ff0-9a67-2128b8f8fc43"
            />
            <input
              type="text"
              className="name-text"
              name="text"
              id="taxt"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              className="message"
              name="massage"
              id="massage"
              cols={30}
              rows={10}
              placeholder="Massage"
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
          <img src="/images/contact-ph.avif" alt="" />
        </div>
      </div>

      <div className="footer-js"></div>

      {/* loader */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
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
