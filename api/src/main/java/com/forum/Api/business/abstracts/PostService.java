package com.forum.Api.business.abstracts;

import com.forum.Api.entities.concretes.Post;

import java.util.List;

public interface PostService {
    List<Post> getAll();
}
