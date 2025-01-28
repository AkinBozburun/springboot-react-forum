package com.forum.Api.business.responses.Post;

import com.forum.Api.entities.concretes.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GetPostsByCategoryResponse {
    private int id;
    private String title;
    private  String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private User author;
}
