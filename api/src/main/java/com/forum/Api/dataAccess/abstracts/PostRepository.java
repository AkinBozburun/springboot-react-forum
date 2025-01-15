package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    @Query("SELECT p FROM Post p WHERE p.categoryId = :id")
    public List<Post> getPostsByCategoryId(@Param("id") int id);
}
