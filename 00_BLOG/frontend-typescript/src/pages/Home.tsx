import React, { useEffect } from "react";
import "../assets/js/main.js";
import initMain from "../assets/js/main";

function Home() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <div>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>Honmono의 Blog</h1>
          <h2></h2>
          <a href="/about" className="btn-about">
            About Me
          </a>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </div>
  );
}

export default Home;
