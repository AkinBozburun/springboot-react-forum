package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.CommentService;
import com.forum.Api.dataAccess.abstracts.CommentRepository;
import com.forum.Api.entities.concretes.Comment;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CommentManager implements CommentService {

    private CommentRepository commentRepository;

    public CommentManager(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

}
