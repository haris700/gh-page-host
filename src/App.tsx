import React from "react";
import "./App.css";
import logo from "./asset/haris.jpeg";
function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ maxWidth: "200px" }}
        />
        <h1>Haris vk</h1>
      </header>
      <main className="main-content">
        <section className="section">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I'm [Your Name], a passionate [Your
            Profession/Interests] based in [Your Location]. I love [Your
            Hobbies/Interests] and enjoy [Your Skills/Expertise]. Feel free to
            explore my work and get in touch!
          </p>
        </section>
        <section className="section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1...</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2...</p>
          </div>
          {/* Add more projects as needed */}
        </section>
        <section className="section">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out to me via email at [Your Email Address] or
            connect with me on [Social Media Platforms]. I look forward to
            hearing from you!
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
export default App;
