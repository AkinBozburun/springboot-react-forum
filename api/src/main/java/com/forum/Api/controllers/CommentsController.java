package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.CommentService;
import com.forum.Api.entities.concretes.Comment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    private final CommentService commentService;

    public CommentsController(CommentService commentService){
        this.commentService = commentService;
    }
}
