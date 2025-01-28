package com.forum.Api.business.requests.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateUserRequest {
    private int id;
    private String username;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
}