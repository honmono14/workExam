// QnaListPage.tsx : rfce
import React, { useEffect } from "react";
import QnaList from "../../components/basic/qna/QnaList";
import initMain from "../../assets/js/main";

function QnaListPage() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    <>
      {/* 여기 */}
      {/* 제목 시작 */}
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Q & A 조회</h2>
          <p>Q & A 조회는 여기서 할 수 있습니다.</p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      {/* 제목 끝 */}

      {/* <!-- ======= Q & A 조회 Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            {/* 여기 */}
            <QnaList />
          </div>
        </div>
      </section>
      {/* <!-- End Q & A 조회 Section --> */}
    </>
  );
}

export default QnaListPage;
