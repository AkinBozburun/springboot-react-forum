package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.PostService;
import com.forum.Api.dataAccess.abstracts.PostRepository;
import com.forum.Api.entities.concretes.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostManager implements PostService {
    private final PostRepository postRepository;

    public PostManager(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public List<Post> getAll() {
        return postRepository.getAll();
    }
}
