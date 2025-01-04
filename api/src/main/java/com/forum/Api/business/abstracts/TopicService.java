package com.forum.Api.business.abstracts;

import com.forum.Api.entities.concretes.Topic;

import java.util.List;

public interface TopicService {
    List<Topic> getAll();
}
