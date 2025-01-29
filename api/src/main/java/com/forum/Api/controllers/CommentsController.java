package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.CommentService;
import com.forum.Api.business.requests.Comment.CreateCommentRequest;
import com.forum.Api.business.requests.Comment.DeleteCommentRequest;
import com.forum.Api.business.requests.Comment.UpdateCommentRequest;
import com.forum.Api.business.responses.ResponseType;
import com.forum.Api.business.responses.ResponseWrapper;
import com.forum.Api.common.ResponseMessage;
import com.forum.Api.entities.concretes.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    private final CommentService commentService;

    public CommentsController(CommentService commentService) {
        this.commentService = commentService;
    }

//    @GetMapping("{id}")
//    public Comment getCommentById(@PathVariable int id) {
//        return this.commentService.getCommentById(id);
//    }

    @GetMapping("/{postId}")
    public ResponseEntity<ResponseWrapper<List<Comment>>> getCommentsByPostId(
            @PathVariable int postId,
            @RequestParam(value = "skip", defaultValue = "0") int skip,
            @RequestParam(value = "limit", defaultValue = "10") int limit)  {
        List<Comment> comments = this.commentService.getCommentsByPostId(postId, skip, limit);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, comments, HttpStatus.OK);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ResponseWrapper<String>> createComment(CreateCommentRequest createCommentRequest) {
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Comment successfully created.", HttpStatus.CREATED);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ResponseWrapper<String>> updateComment(UpdateCommentRequest updateCommentRequest) {
        this.commentService.updateComment(updateCommentRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Comment successfully uploaded.", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<ResponseWrapper<String>> deleteComment(DeleteCommentRequest deleteCommentRequest) {
        this.commentService.deleteComment(deleteCommentRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Comment successfully deleted.", HttpStatus.NO_CONTENT);
    }
}
