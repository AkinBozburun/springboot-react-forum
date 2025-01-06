package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.PostService;
import com.forum.Api.entities.concretes.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostsController {
    private final PostService postService;


    public PostsController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/getall")
    public List<Post> getAll(){
        return this.postService.getAll();
    }

}
