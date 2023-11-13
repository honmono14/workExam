// Resume.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/main";

function Resume() {
    useEffect(() => {
        initMain();
      }, []);
  return (
    <>
      <main id="main">
        {/* <!-- ======= Resume Section ======= --> */}
        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>사회활동 및 경험</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">최종 학력</h3>
                <div className="resume-item pb-0">
                  <h4>예원고등학교 미용과</h4>
                  <br/>
                    <ul>
                      <li>부산 금정구 회천로13번길 60 부산예원고등학교</li>
                      <li>051-529-4441</li>
                      <li><a href="http://yewon.hs.kr/">홈페이지</a></li>
                    </ul>
                  
                </div>

                <h3 className="resume-title">자바 개발자 교육과정</h3>
                <div className="resume-item">
                  <h4>부산 그린 컴퓨터 아카데미</h4>
                  <h5>2023.07 ~ 2023.12</h5>
                  <p>
                  <br/>1. 다양한 기기의 융합, 네트워크의 융합, 콘텐츠의 융합을 통한 4차 산업시대에 걸맞는 새로운 형태의 융합 서비스를 창출하기 위한 능력 함양.
                  <br/>
                  <br/>2. 디지털 환경이 요구하는 업무 영역 및 운영 환경에 맞는 소프트웨어를 설계, 구현, 테스트를 수행하고, 융합하여 서비스를 개선하는 업무능력 함양.
                  <br/>
                  <br/>3. 관계형데이터베이스에서 SQL을 사용하여 응용 SW의 기능에 적합한 데이터를 정의하고, 조작하며, 제어하는 능력을 함양.
                  <br/>
                  <br/>4. 자바(Java)를 활용하여 객체지향 프로그래밍 능력을 함양하고 공통모듈을 구현 및 통합하여 웹 애플리케이션을 개발 능력 함양.
                  <br/>
                  <br/>
                  </p>
                  <ul>
                      <li>부산 부산진구 중앙대로 749</li>
                      <li>051-715-6224</li>
                      <li><a href="https://green-bs.step.or.kr/main.do">홈페이지</a></li>
                    </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">사회 경험</h3>
                <div className="resume-item">
                  <h4>바로고</h4>
                  <h5>2015.05 ~ 2019.12</h5>
                    <ul>
                      <li>
                        Lead in the design, development, and implementation of
                        the graphic, layout, and production communication
                        materials
                      </li>
                      <li>
                        Delegate tasks to the 7 members of the design team and
                        provide counsel on all aspects of the project.{" "}
                      </li>
                      <li>
                        Supervise the assessment of all graphic materials in
                        order to ensure quality and accuracy of the design
                      </li>
                      <li>
                        Oversee the efficient use of production project budgets
                        ranging from $2,000 - $25,000
                      </li>
                    </ul>
                  
                </div>
                <div className="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  
                    <ul>
                      <li>
                        Developed numerous marketing programs (logos,
                        brochures,infographics, presentations, and
                        advertisements).
                      </li>
                      <li>
                        Managed up to 5 projects or tasks at a given time while
                        under pressure
                      </li>
                      <li>
                        Recommended and consulted with clients on the most
                        appropriate graphic design
                      </li>
                      <li>
                        Created 4+ design presentations and proposals a month
                        for clients and account managers
                      </li>
                    </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Resume Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Resume;
