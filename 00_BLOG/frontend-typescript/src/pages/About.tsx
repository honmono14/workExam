// About.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/main";

function About() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <p>
                기본 설명
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                {/* 이미지 변경 안됌 */}
                <img src="assets/img/about2.jpg" className="img-fluid" alt="" />
                {/* 이미지 변경 안됌 */}
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                {/* &amp; -> & */}
                <h3>자바 개발자</h3>
                <br/>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>생년월일 :</strong> 1999.02.23
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>휴대폰 :</strong> 010 3941 2065
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>거주지 :</strong> 부산광역시 동래구 낙민동
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>나이 :</strong> 25세 (만 24세)
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>E-Mail :</strong> wmnm1150@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Skills Section ======= --> */}
        <section id="skills" className="skills">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                기술
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    React <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    SQL <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JSP <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Skills Section --> */}

        {/* 공백용 br태그 */}
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        {/* 공백용 br태그 */}

        
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default About;
