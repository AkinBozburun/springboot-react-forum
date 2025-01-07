package com.forum.Api.dataAccess.concretes;

import com.forum.Api.dataAccess.abstracts.PostRepository;
import com.forum.Api.entities.concretes.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryPostRepository {

    private final List<Post> posts;

    public InMemoryPostRepository(){
        this.posts = new ArrayList<Post>();
    }
}
