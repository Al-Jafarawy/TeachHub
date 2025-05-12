import "../css/style.css";
import "../css/main/top-stud.css";

const TopStudents = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url('/homePage.jpg')` }}
      >
        <div className="overlay"></div>
      </section>

      <section className="container">
        <div className="about-this-page">
          <h2>What This Page Is About</h2>
          <p className="about-top-students-page">
            Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet
            consectetur adipisicing eldif Lorem ipsum dolor sit amet consectetur
            adipLorem ipsum dolor sit amet consectetur adipisicing eli Lorem
            ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor
            sit amet consectetur adipisicing eldfi Lorem ipsum dolor sit amet
            consectetur adipis Lorem ipsum dolor sit amet consectetur
            adipisidfcing elji Lorem ipsum dolor sit amet consectetur
            adipisicing eli Lorem ipsum dolor sit amet consectetur df Lorem
            ipsum dolor sit amet consectetur adipisicing elsih Lorem ipsum dolor
            sit amet consectetur adipis
          </p>
        </div>

        <div className="all-groups">
          {[
            {
              grade: "Three",
              students: [
                {
                  name: "Ahmed Gensh",
                  img: "std-grad-3-1st.jpg",
                  pos: "First",
                  className: "postion-1",
                },
                {
                  name: "Ibrahim Salama",
                  img: "std-grad-3-2nd.jpg",
                  pos: "Second",
                  className: "postion-2",
                },
                {
                  name: "Habiba Mohamed",
                  img: "std-grad-3-3rd.jpg",
                  pos: "Third",
                  className: "postion-3",
                },
              ],
            },
            {
              grade: "Two",
              students: [
                {
                  name: "Arwa Ramy",
                  img: "std-grad-2-1st.jpg",
                  pos: "First",
                  className: "postion-1",
                },
                {
                  name: "Mustafa Sayed",
                  img: "std-grad-2-2nd.jpg",
                  pos: "Second",
                  className: "postion-2",
                },
                {
                  name: "Alaa Samy",
                  img: "std-grad-2-3rd.jpg",
                  pos: "Third",
                  className: "postion-3",
                },
              ],
            },
            {
              grade: "One",
              students: [
                {
                  name: "Ahmed Ashraf",
                  img: "std-grad-1-1st.jpg",
                  pos: "First",
                  className: "postion-1",
                },
                {
                  name: "Islam Sameh",
                  img: "std-grad-1-2nd.jpg",
                  pos: "Second",
                  className: "postion-2",
                },
                {
                  name: "Ragab Mahmoud",
                  img: "std-grad-1-3rd.jpg",
                  pos: "Third",
                  className: "postion-3",
                },
              ],
            },
          ].map((group, index) => (
            <div key={index} className={`secondary-grade-${3 - index}`}>
              <h2 className="group-header">
                Top Secondary {group.grade} Students
              </h2>
              <div className="same-grade">
                {group.students.map((stud, i) => (
                  <div key={i} className="stud-card">
                    <img
                      className="card-img"
                      src={`/images/${stud.img}`}
                      alt={stud.name}
                    />
                    <div className="card-info">
                      <h3 className="card-h3">{stud.name}</h3>
                      <div className={stud.className}>
                        <span className="card-span">{stud.pos} </span>
                        <i className="fa-solid fa-medal"></i>
                      </div>
                      <p className="card-para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat, quibusdam.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopStudents;
