package com.forum.Api.business.abstracts;

import com.forum.Api.business.requests.CreatePostRequest;
import com.forum.Api.business.requests.DeletePostRequest;
import com.forum.Api.business.requests.UpdatePostRequest;
import com.forum.Api.business.responses.GetAllPostResponse;
import com.forum.Api.entities.concretes.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<GetAllPostResponse> getAll();
    Post getPostById(int id);
    void createPost(CreatePostRequest createPostRequest);
    void deletePost(DeletePostRequest deletePostRequest);
    void updatePost(UpdatePostRequest updatePostRequest);
}
