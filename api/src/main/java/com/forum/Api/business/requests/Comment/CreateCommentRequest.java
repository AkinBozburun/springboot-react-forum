package com.forum.Api.business.requests.Comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateCommentRequest {
    private int postId;
    private String content;
}
