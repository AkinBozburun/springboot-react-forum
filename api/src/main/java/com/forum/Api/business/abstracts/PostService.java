package com.forum.Api.business.abstracts;

import com.forum.Api.business.requests.Post.CreatePostRequest;
import com.forum.Api.business.requests.Post.DeletePostRequest;
import com.forum.Api.business.requests.Post.UpdatePostRequest;
import com.forum.Api.business.responses.Post.GetAllPostResponse;
import com.forum.Api.business.responses.Post.GetPostsByCategoryResponse;
import com.forum.Api.entities.concretes.Post;

import java.util.List;

public interface PostService {
    List<GetAllPostResponse> getAll();
    List<GetPostsByCategoryResponse> getPostsByCategoryId(int categoryId, int skip, int limit);
    Post getPostById(int id);
    void createPost(CreatePostRequest createPostRequest);
    void deletePost(DeletePostRequest deletePostRequest);
    void updatePost(UpdatePostRequest updatePostRequest);
}
