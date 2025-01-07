package com.forum.Api.business.abstracts;

import com.forum.Api.business.responses.GetAllPostResponse;
import com.forum.Api.entities.concretes.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<GetAllPostResponse> getAll();
    Post getPostById(int id);
}
