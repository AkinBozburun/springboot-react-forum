package com.forum.Api.dataAccess.concretes;

import com.forum.Api.dataAccess.abstracts.TopicRepository;
import com.forum.Api.entities.concretes.Topic;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryTopicRepository implements TopicRepository {

    private final List<Topic> topics;

    public InMemoryTopicRepository(){
        this.topics = new ArrayList<Topic>();
        topics.add(new Topic(1,"example5"));
        topics.add(new Topic(2,"example6"));
        topics.add(new Topic(3,"example7"));
    }

    @Override
    public List<Topic> getAll() {
        return this.topics;
    }
}
