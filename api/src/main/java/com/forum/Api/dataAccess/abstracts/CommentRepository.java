package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Comment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
//    @Query("SELECT c FROM Comment c WHERE c.postId = :id")
//    public List<Comment> getCommentsByPostId(@Param("id") int id);
     List<Comment> getCommentByPostId(int postId, Pageable pageable);
}
