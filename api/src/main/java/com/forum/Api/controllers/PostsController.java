package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.PostService;
import com.forum.Api.business.requests.Post.CreatePostRequest;
import com.forum.Api.business.requests.Post.DeletePostRequest;
import com.forum.Api.business.requests.Post.UpdatePostRequest;
import com.forum.Api.business.responses.Post.GetAllPostResponse;
import com.forum.Api.business.responses.Post.GetPostsByCategoryResponse;
import com.forum.Api.business.responses.ResponseType;
import com.forum.Api.business.responses.ResponseWrapper;
import com.forum.Api.common.ResponseMessage;
import com.forum.Api.entities.concretes.Post;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<ResponseWrapper<List<GetAllPostResponse>>> getAll(){
        List<GetAllPostResponse> posts = this.postService.getAll();
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, posts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseWrapper<Post>> getPostById(@PathVariable int id){
        Post post = this.postService.getPostById(id);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, post, HttpStatus.OK);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<ResponseWrapper<List<GetPostsByCategoryResponse>>> getByCategory(
            @PathVariable int categoryId,
            @RequestParam(value = "skip", defaultValue = "0") int skip,
            @RequestParam(value = "limit", defaultValue = "10") int limit) {
        List<GetPostsByCategoryResponse> posts = this.postService.getPostsByCategoryId(categoryId, skip, limit);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, posts, HttpStatus.OK);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ResponseWrapper<String>> createPost(@RequestBody CreatePostRequest createPostRequest){
        this.postService.createPost(createPostRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Post successfully created.", HttpStatus.OK);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ResponseWrapper<String>> updatePost(@RequestBody UpdatePostRequest updatePostRequest){
        this.postService.updatePost(updatePostRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Post successfully updated.", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<ResponseWrapper<String>> deletePost(int id){
        DeletePostRequest deletePostRequest  = new DeletePostRequest(id);
        this.postService.deletePost(deletePostRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Post successfully deleted.", HttpStatus.OK);
    }
}
