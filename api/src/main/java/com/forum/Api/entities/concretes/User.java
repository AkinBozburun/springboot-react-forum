package com.forum.Api.entities.concretes;

import com.forum.Api.entities.enums.Role;
import com.forum.Api.entities.enums.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    private int id;
    private String username;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private LocalDateTime createdAt;
    private LocalDateTime updateAt;
    private Role role;
    private UserStatus status;
    private String profilePicture;
    private LocalDateTime lastLogin;
    private boolean banned;
}
