package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Post;

import java.util.List;

public interface PostRepository {
    List<Post> getAll();
}
