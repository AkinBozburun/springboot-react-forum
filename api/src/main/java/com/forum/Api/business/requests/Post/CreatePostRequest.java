package com.forum.Api.business.requests.Post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreatePostRequest {
    private String title;
    private String content;
}
