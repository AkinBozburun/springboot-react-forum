package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.PostService;
import com.forum.Api.business.responses.GetAllPostResponse;
import com.forum.Api.entities.concretes.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

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
}
