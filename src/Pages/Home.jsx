import profileImage from "../assets/Profile.jpeg";

function Home() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-text">

          <p className="small-title">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Muhammad Akram</span>
          </h1>

          <h2>React Developer</h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly web applications
            using React, JavaScript and modern web technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-circle">
            <img
              src={profileImage}
              alt="Muhammad Akram"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;