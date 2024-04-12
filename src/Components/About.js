import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './All.css';
import shahid from './img/shahid.png';
import mustafa from './img/muutafa.jpg';
import ali from './img/ali.jpg';

function About() {
  return (
    <div>
        <Header />
      <main>
        <div className="profile">
          <img
            src={shahid}
            alt="Your Name"
            height="200px"
            width="200px"
          />
          <h2 className="nam">MAHAR SHAHID IQBAL JHAWARI</h2>
          <strong>
            <p>
              WEB DESIGNER, DEVELOPER, FREELANCER YOUTUBER AND GRAPHIC DESIGNER.
            </p>
          </strong>
          <p>
            Phone: <a href="tel:+123456789">+92 3447014153</a>
          </p>
        </div>
      </main>
      <main>
        <div className="profile">
          <img src={ali} alt="Your Name" height="200px" width="200px" />
          <h2 className="nam">ALI JAN</h2>
          <strong>
            <p>
              WEB DESIGNER, DEVELOPER, FREELANCER YOUTUBER AND GRAPHIC DESIGNER.
            </p>
          </strong>
          <p>
            Phone: <a href="tel:+123456789">+92 3260340578</a>
          </p>
        </div>
      </main>
      <main>
        <div className="profile">
          <img
            src={shahid}
            alt="Your Name"
            height="200px"
            width="200px"
          />
          <h2 className="nam">MUSTAFA</h2>
          <strong>
            <p>
              WEB DESIGNER, DEVELOPER, FREELANCER YOUTUBER AND GRAPHIC DESIGNER.
            </p>
          </strong>
          <p>
            Phone: <a href="tel:+123456789">+92 3496807311</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
