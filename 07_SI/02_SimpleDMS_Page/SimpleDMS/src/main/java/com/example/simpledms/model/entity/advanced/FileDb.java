package com.example.simpledms.model.entity.advanced;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.advanced
 * fileName : FileDb
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
@Entity
@Table(name="TB_FILE_DB")
@SequenceGenerator(
        name = "SQ_FILE_DB_GENERATOR"
        , sequenceName = "SQ_FILE_DB"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_FILE_DB SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE UUID = ?")
public class FileDb extends BaseTimeEntity {

    @Id
    private Integer uuid;       // 기본키

    private String fileTitle;   // 파일 제목

    private String fileContent; // 파일 내용

    private String fileName;    // 파일 이름

//    @Lob : BLOB -> 첨부파일을 위한 제네릭
    @Lob
    private String fileData;    // 첨부 파일

    private String fileUrl;     // 파일 다운 url
}
