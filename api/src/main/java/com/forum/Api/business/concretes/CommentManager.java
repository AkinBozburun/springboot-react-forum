package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.CommentService;
import com.forum.Api.business.requests.CreateCommentRequest;
import com.forum.Api.business.requests.DeleteCommentRequest;
import com.forum.Api.business.requests.UpdateCommentRequest;
import com.forum.Api.dataAccess.abstracts.CommentRepository;
import com.forum.Api.entities.concretes.Comment;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentManager implements CommentService {

    private final CommentRepository commentRepository;

    public CommentManager(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public Comment getCommentById(int id) {
        return this.commentRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Comment> getCommentsByPostId(int postId, int skip, int limit) {
        Pageable pageable = PageRequest.of(skip / limit, limit);
        return commentRepository.getCommentByPostId(postId, pageable);
    }

    @Override
    public void createComment(CreateCommentRequest createCommentRequest) {
        Comment comment = new Comment();
        comment.setContent(createCommentRequest.getContent());
//        comment.setAuthor();
        comment.setPostId(1);
        this.commentRepository.save(comment);
    }

    @Override
    public void updateComment(UpdateCommentRequest updateCommentRequest) {
        Comment comment = this.commentRepository.findById(updateCommentRequest.getId()).orElseThrow();
        comment.setContent(updateCommentRequest.getContent());
        this.commentRepository.save(comment);
    }

    @Override
    public void deleteComment(DeleteCommentRequest deleteCommentRequest) {
        this.commentRepository.deleteById(deleteCommentRequest.getId());
    }
}
