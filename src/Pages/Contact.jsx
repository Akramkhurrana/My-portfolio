import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Message from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Contact Number: ${formData.phone}

Message:
${formData.message}
    `;

    window.location.href =
      `mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section contact" id="contact">

      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-card">

        <h3>Let's Work Together</h3>

        <p>
          Have a project or idea? Feel free to contact me.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="contact-info">

            {/* Name */}
            <div>
              <strong>👤 Name</strong>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <strong>📧 Email</strong>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <strong>📱 Contact Number</strong>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div>
              <strong>💬 Message</strong>

              <textarea
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

          </div>

          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;