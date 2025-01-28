package com.forum.Api.business.abstracts;

import com.forum.Api.business.requests.Comment.CreateCommentRequest;
import com.forum.Api.business.requests.Comment.DeleteCommentRequest;
import com.forum.Api.business.requests.Comment.UpdateCommentRequest;
import com.forum.Api.entities.concretes.Comment;

import java.util.List;

public interface CommentService {
    Comment getCommentById(int id);

    List<Comment> getCommentsByPostId(int postId, int skip, int limit);

    void createComment(CreateCommentRequest createCommentRequest);

    void updateComment(UpdateCommentRequest updateCommentRequest);

    void deleteComment(DeleteCommentRequest deleteCommentRequest);
}
