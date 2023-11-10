package com.example.simpledms.service.advanced;

import com.example.simpledms.model.entity.advanced.FileDb;
import com.example.simpledms.repository.advanced.FileDbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.advanced
 * fileName : FileDbService
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
@Service
public class FileDbService {

    @Autowired
    FileDbRepository fileDbRepository; // DI

//    전체 조회 + 페이징
    public Page<FileDb> findAll(Pageable pageable) {
        Page<FileDb> page = fileDbRepository.findAll(pageable);

        return page;
    };

//    title like 조회 + 페이징
    public Page<FileDb> findAllByFileTitleContaining(String fileTitle, Pageable pageable) {
        Page<FileDb> page
                = fileDbRepository.findAllByFileTitleContaining(fileTitle, pageable);

        return page;
    };

//    저장함수(수정함수)
    public FileDb save(FileDb fileDb) {

        FileDb fileDb2 = fileDbRepository.save(fileDb);

        return fileDb2;
    };

//    상세조회(1건조회)
    public Optional<FileDb> findById(int uuid) {
        Optional<FileDb> optionalFileDb
                = fileDbRepository.findById(uuid);

        return optionalFileDb;
    };

//    삭제함수
    public boolean removeById(int uuid) {
        if(fileDbRepository.existsById(uuid)) { // dno 있는지 확인
            fileDbRepository.deleteById(uuid); // 삭제 진행
            return true;
        }
        return false;
    };


}
