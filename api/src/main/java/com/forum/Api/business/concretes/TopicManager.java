package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.TopicService;
import com.forum.Api.dataAccess.abstracts.TopicRepository;
import com.forum.Api.entities.concretes.Topic;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicManager implements TopicService {
    private final TopicRepository topicRepository;

    public TopicManager(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    @Override
    public List<Topic> getAll() {
        return topicRepository.getAll();
    }
}
