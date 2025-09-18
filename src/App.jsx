import './App.css';

export default function App() {
  return (
    <div className="container text-center py-5">
      {/* Your name stays in Pine font */}
      <h1 className="display-4 pine-font mb-5 animate-jump delay-1">
        Gardar Solvi Kjartansson
      </h1>

      {/* About Me + Experience */}
      <div className="row justify-content-center g-4 mb-5 align-items-stretch">
        <div className="col-12 col-md-5 d-flex">
          <div className="card custom-card w-100 animate-jump delay-2">
            <div className="card-body d-flex flex-column">
              <h5 className="title-font fatfrank" style={{ fontSize: '2rem' }}>About me</h5>
              <p className="card-text">
                My name is Gardar, I am from Iceland and am currently studying computer science at Wentworth Institute of Technology.
                I have always had a fascination with technology and that has led me to where I am today.
                I started programming when I was 14 years old and haven't stopped since.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 d-flex">
          <div className="card custom-card w-100 animate-jump delay-3">
            <div className="card-body d-flex flex-column">
              <h5 className="title-font fatfrank" style={{ fontSize: '2rem' }}>Experience</h5>
              <p className="card-text">
                COLUMBIA UNIVERSITY – Summer 2023<br />
                Summer program in entrepreneurial studies<br /><br />
                Reykjavik University – 2023–2024<br />
                One year in BSc Computer Science<br /><br />
                2024–<br />
                Wentworth Institute of Technology<br />
                BSc Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Finn sprite */}
      <div className="finn-wrapper">
        <div className="finn-runner"></div>
      </div>

      {/* Projects */}
      <h5 className="title-font animate-jump delay-4" style={{ fontSize: '2rem' }}>Projects</h5>

      <div className="row justify-content-center g-4">
        <div className="col-6 col-md-3 d-flex">
          <div className="card project-card w-100 animate-jump delay-1">
            <div className="card-body d-flex flex-column">
              <h5 className="title-font">Discord bots</h5>
              <p className="card-text">
                I have been making Discord bots in Python for myself and my friends to use in our servers, and I’ve learned a lot from it.
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex">
          <div className="card project-card w-100 animate-jump delay-2">
            <div className="card-body d-flex flex-column">
              <h5 className="title-font">Video Games</h5>
              <p className="card-text">
                I’ve made a few small video games. None are released yet, but working on them taught me a lot about logic and design.
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex">
          <div className="card project-card w-100 animate-jump delay-3">
            <div className="card-body d-flex flex-column">
              <h5 className="title-font">Airline system</h5>
              <p className="card-text">
                In my first three-week project at RU, I worked with three other teammates to create a system for an airline. I learned a lot — not just about programming, but about teamwork.
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex">
          <div className="card project-card w-100 animate-jump delay-4">
            <div className="card-body d-flex flex-column">
              <h5 className="title-font">Job Search Website</h5>
              <p className="bisbee">
                In our second three-week project at RU, we built a job search website with many features — including a chat system between employers and applicants. I’m very proud of what we achieved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5 py-4 text-center">
        <div className="container">
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a href="mailto:gardarsolvi@gmail.com" className="footer-link" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/gardar-kjartansson-6b3a6b280/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/CoolSmurf27" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
          </div>
          <a href="CV.pdf" download className="btn btn-primary">Download CV</a>
        </div>
      </footer>
    </div>
  );
}
