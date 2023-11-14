// Contect.tsx : rfce
import React, { useEffect } from 'react'
import initMain from '../assets/js/main';

function Contact() {
    useEffect(() => {
        initMain();
      }, []);
  return (
    <>
          <main id="main">

{/* <!-- ======= Contact Section ======= --> */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>Contact</h2>
      <p></p>
    </div>

    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>주소지</h4>
            <p>부산 광역시 동래구 낙민동</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email</h4>
            <p>wmnm1150@gmail.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call</h4>
            <p>+82 010-3941-2065</p>
          </div>

        </div>

      </div>

      <div className="col-lg-8 mt-5 mt-lg-0">
        <h2>팀원</h2>
        <p> 강상민   권진욱   남희현   박유빈   이주영</p>

      </div>

    </div>

  </div>
</section>
{/* <!-- End Contact Section --> */}

</main>
{/* <!-- End #main --> */}
    </>
  )
}

export default Contact