package com.forum.Api.entities.concretes;

public class Topic {
    private int id;
    private String title;

//    private User author;
//    private LocalDateTime createdAt;
//    private LocalDateTime updatedAt;
//    private int commentCount;
//    private int viewCount;
//    private List<Category> categories;
//    private TopicStatus status;
    public Topic(int id, String title){
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
