// FileDbList.tsx : rfce
import React, { useEffect, useState } from "react";
import TitleCom from "../../components/common/TitleCom";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import IFileDb from "../../types/advanced/IFileDb";
import FileDbService from "../../services/advanced/IFileDbService";

function FileDbList() {

    // todo : 변수 정의

    // fileDb 배열 변수
    const [fileDb, setFileDb] = useState<Array<IFileDb>>([]);

    // title 검색어 변수
    const [searchTitle, setSearchTitle] = useState<string>("");

    // 업로드 성공/실패 시 화면에 메세지 출력 변수
    const [message, setMessage] = useState<string>("");

    // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
    // todo: 공통 pageSizes : 배열 (셀렉트 박스 사용)
    const pageSizes = [3, 6, 9];


    // todo : 함수 정의

    useEffect(() => {
        retrieveFileDb(); // 전체 조회
    }, [page, pageSize]);

    // 전체 조회 함수
    const retrieveFileDb = () => {
        FileDbService.getFiles(searchTitle, page -1, pageSize) // 백엔드 전체조회요청
        .then((response: any)=>{
            const { fileDb, totalPages } = response.data;
            setFileDb(fileDb);
            setCount(totalPages);
            console.log("response", response.data);
        })
        .catch((e: Error)=>{
            console.log(e);
        })
    };

    //  검색어 수동 바인딩 함수
    const onChangeSearchTitle = (e: any) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    // todo: handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
    //  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
    const handlePageSizeChange = (event: any) => { 
        setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
        setPage(1); // 현재페이지번호 : 1로 강제설정
    };

    //  todo: Pagination 수동 바인딩(공통)
    //  페이지 번호를 누르면 => page 변수에 값 저장
    const handlePageChange = (event:any, value:number) => { 
        // value == 화면의 페이지번호
        setPage(value);
    };

    // todo : 삭제 함수
    const deleteImage = (uuid: any) => {
        FileDbService.deleteFile(uuid) // 백엔드로 삭제요청
        .then((response: any) => {
            console.log(response.data);
            setMessage("삭제되었습니다.")
            // 재조회
            retrieveFileDb();
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };



  return (
    <>
      {/* 제목 start */}
      <TitleCom title="FileDb List" />
      {/* 제목 end */}

      <div className="col-md-8">
        {/* 검색어 start */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveFileDb}
            >
              Search
            </button>
          </div>
        </div>
        {/* 검색어 end */}
      </div>

      <div className="col-md-12 mt-3">
        <h4>FileDb List</h4>
        {/* page start */}
        <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
        {/* page end */}

        {/* upload 성공/실패 메세지 출력 시작 */}
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        {/* upload 성공/실패 메세지 출력 끝 */}

        {/* 쇼핑카트 이미지 start */}
        <div className="row">
          {fileDb &&
            fileDb.map((data, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card">
                  <img src={data.fileUrl} className="card-img-top" alt="강의" />
                  <div className="card-body">
                    <h5 className="card-title">{data.fileTitle}</h5>
                    <p className="card-text">{data.fileContent}</p>
                    <Link to={"/fileDb/" + data.uuid}>
                      <span className="badge bg-warning">Edit</span>
                    </Link>
                    <a
                      style={{ color: "inherit" }}
                      className="ms-2"
                      onClick={() => {
                        deleteImage(data.uuid);
                      }}
                    >
                      <span className="badge bg-danger">Delete</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* 쇼핑카트 이미지 end */}
      </div>
    </>
  );
}

export default FileDbList;
