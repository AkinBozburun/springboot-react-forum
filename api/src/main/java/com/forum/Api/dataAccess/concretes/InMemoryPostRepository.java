package com.forum.Api.dataAccess.concretes;

import com.forum.Api.dataAccess.abstracts.PostRepository;
import com.forum.Api.entities.concretes.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryPostRepository implements PostRepository {

    private final List<Post> posts;

    public InMemoryPostRepository(){
        this.posts = new ArrayList<Post>();
        posts.add(new Post(1,"example5"));
        posts.add(new Post(2,"example6"));
        posts.add(new Post(3,"example7"));
    }

    @Override
    public List<Post> getAll() {
        return this.posts;
    }
}
