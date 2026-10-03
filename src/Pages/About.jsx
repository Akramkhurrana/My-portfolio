function About() {
  return (
    <section className="section about" id="about">

      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-card">

        <div>
          <h3>I'm a Computer Science Student & Developer</h3>

          <p>
            I am a Computer Science student interested in web development
            and modern technologies. I enjoy building responsive websites
            and useful applications.
          </p>

          <p>
            My main focus is creating clean interfaces, learning new
            technologies and improving my programming skills.
          </p>
        </div>

        <div className="about-info">

          <div className="info-box">
            <h3>Education</h3>
            <p>BS Computer Science</p>
          </div>

          <div className="info-box">
            <h3>Focus</h3>
            <p>Web Development</p>
          </div>

          <div className="info-box">
            <h3>Technology</h3>
            <p>React.js</p>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <p>Gilgit-Baltistan</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;