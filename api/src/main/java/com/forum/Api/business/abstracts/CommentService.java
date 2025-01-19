package com.forum.Api.business.abstracts;

import com.forum.Api.business.requests.CreateCommentRequest;
import com.forum.Api.business.requests.DeleteCommentRequest;
import com.forum.Api.business.requests.UpdateCommentRequest;
import com.forum.Api.entities.concretes.Comment;

import java.util.List;

public interface CommentService {
    Comment getCommentById(int id);

    List<Comment> getCommentsByPostId(int id);

    void createComment(CreateCommentRequest createCommentRequest);

    void updateComment(UpdateCommentRequest updateCommentRequest);

    void deleteComment(DeleteCommentRequest deleteCommentRequest);
}
