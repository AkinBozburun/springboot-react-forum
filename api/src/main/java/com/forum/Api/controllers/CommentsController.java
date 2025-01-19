package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.CommentService;
import com.forum.Api.business.requests.CreateCommentRequest;
import com.forum.Api.business.requests.DeleteCommentRequest;
import com.forum.Api.business.requests.UpdateCommentRequest;
import com.forum.Api.entities.concretes.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    private final CommentService commentService;

    public CommentsController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("{id}")
    public Comment getCommentById(@PathVariable int id) {
        return this.commentService.getCommentById(id);
    }

    @GetMapping("/post/{id}")
    public List<Comment> getCommentsByPostId(@PathVariable int id) {
        return this.commentService.getCommentsByPostId(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(CreateCommentRequest createCommentRequest) {
        this.commentService.createComment(createCommentRequest);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updateComment(UpdateCommentRequest updateCommentRequest) {
        this.commentService.updateComment(updateCommentRequest);
    }

    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.OK)
    public void deleteComment(DeleteCommentRequest deleteCommentRequest) {
        this.commentService.deleteComment(deleteCommentRequest);
    }
}
