package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Topic;

import java.util.List;

public interface TopicRepository {
    List<Topic> getAll();
}
