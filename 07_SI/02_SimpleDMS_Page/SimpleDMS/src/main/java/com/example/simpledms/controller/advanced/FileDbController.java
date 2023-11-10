package com.example.simpledms.controller.advanced;

import com.example.simpledms.model.entity.advanced.FileDb;
import com.example.simpledms.service.advanced.FileDbService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.advanced
 * fileName : FileDbController
 * author : GGG
 * date : 2023-11-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-10         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/advanced")
public class FileDbController {

    @Autowired
    FileDbService fileDbService; // DI

//    전체 조회 + title like 검색
    @GetMapping("/fileDb")
    public ResponseEntity<Object> findAllByTitleContaining(
            @RequestParam(defaultValue = "") String fileTitle,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<FileDb> fileDbPage
                    = fileDbService.findAllByFileTitleContaining(fileTitle, pageable);

//          리액트 전송 : fileDb 배열 , 페이징 정보 [자료 구조 : Map<키이름, 값>]
            Map<String , Object> response = new HashMap<>();
            response.put("fileDb", fileDbPage.getContent()); // fileDb 배열
            response.put("currentPage", fileDbPage.getNumber()); // 현재 페이지 번호
            response.put("totalItems", fileDbPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", fileDbPage.getTotalPages()); // 총 페이지 수

            if (fileDbPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

//    저장 함수
    @PostMapping("/fileDb")
    public ResponseEntity<Object> create(@RequestBody FileDb fileDb) {
        try {
            FileDb fileDb2 = fileDbService.save(fileDb); // db 저장

            return new ResponseEntity<>(fileDb2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

//    수정 함수
    @PutMapping("/fileDb/{uuid}")
    public ResponseEntity<Object> update(
            @PathVariable int uuid,
            @RequestBody FileDb fileDb) {
        try {
            FileDb fileDb2 = fileDbService.save(fileDb); // db 수정

            return new ResponseEntity<>(fileDb2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

//    상세조회
    @GetMapping("/fileDb/{uuid}")
    public ResponseEntity<Object> findById(@PathVariable int uuid) {
        try {
//            상세조회 실행
            Optional<FileDb> optionalFileDb = fileDbService.findById(uuid);

            if (optionalFileDb.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalFileDb.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

//    삭제함수
    @DeleteMapping("/fileDb/deletion/{uuid}")
    public ResponseEntity<Object> delete(@PathVariable int uuid) {
        try {
//            삭제함수 호출
            boolean bSuccess = fileDbService.removeById(uuid);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
}
