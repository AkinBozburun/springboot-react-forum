package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.TopicService;
import com.forum.Api.entities.concretes.Topic;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicsController {
    private final TopicService topicService;


    public TopicsController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping("/getall")
    public List<Topic> getAll(){
        return this.topicService.getAll();
    }

}
