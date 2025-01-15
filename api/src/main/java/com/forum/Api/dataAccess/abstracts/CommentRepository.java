package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
