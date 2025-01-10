package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.PostService;
import com.forum.Api.business.requests.CreatePostRequest;
import com.forum.Api.business.responses.GetAllPostResponse;
import com.forum.Api.dataAccess.abstracts.PostRepository;
import com.forum.Api.entities.concretes.Post;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class PostManager implements PostService {
    private final PostRepository postRepository;

    public PostManager(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public List<GetAllPostResponse> getAll() {
        List<GetAllPostResponse> getAllPostResponse = new ArrayList<>();
        List<Post> posts =  postRepository.findAll();

        for(Post post : posts){
            GetAllPostResponse asd = new GetAllPostResponse();
            asd.setTitle(post.getTitle());
            asd.setContent(post.getContent());
            getAllPostResponse.add(asd);
        }
        return getAllPostResponse;
    }

    @Override
    public Post getPostById(int id) {
        return postRepository.findById(id).orElseThrow();
    }

    @Override
    public void createPost(CreatePostRequest createPostRequest) {
        Post post = new Post();
        post.setTitle(createPostRequest.getTitle());
        post.setContent(createPostRequest.getContent());
        postRepository.save(post);
    }
}
