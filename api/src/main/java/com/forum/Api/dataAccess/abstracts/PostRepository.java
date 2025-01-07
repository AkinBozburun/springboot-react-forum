package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
