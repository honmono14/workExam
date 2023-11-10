package com.example.simpledms.repository;

import com.example.simpledms.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * packageName : com.example.simpledms.repository
 * fileName : EmpRepository
 * author : GGG
 * date : 2023-10-20
 * description : Emp 레포(CRUD)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-20         GGG          최초 생성
 */
public interface EmpRepository extends JpaRepository<Emp,Integer> {
//    ename like 함수
    List<Emp> findAllByEnameContaining(String ename);
}
