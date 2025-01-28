package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.PostService;
import com.forum.Api.business.requests.Post.CreatePostRequest;
import com.forum.Api.business.requests.Post.DeletePostRequest;
import com.forum.Api.business.requests.Post.UpdatePostRequest;
import com.forum.Api.business.responses.Post.GetAllPostResponse;
import com.forum.Api.business.responses.Post.GetPostsByCategoryResponse;
import com.forum.Api.entities.concretes.Post;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostsController {
    private final PostService postService;


    public PostsController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/getall")
    public List<GetAllPostResponse> getAll(){
        return this.postService.getAll();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable int id){
        return this.postService.getPostById(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<GetPostsByCategoryResponse> getByCategory(
            @PathVariable int categoryId,
            @RequestParam(value = "skip", defaultValue = "0") int skip,
            @RequestParam(value = "limit", defaultValue = "10") int limit) {
        return this.postService.getPostsByCategoryId(categoryId, skip, limit);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPost(@RequestBody CreatePostRequest createPostRequest){ this.postService.createPost(createPostRequest);}

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updatePost(@RequestBody UpdatePostRequest updatePostRequest){
        this.postService.updatePost(updatePostRequest);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePost(int id){
        DeletePostRequest deletePostRequest  = new DeletePostRequest(id);
        this.postService.deletePost(deletePostRequest);
    }
}
