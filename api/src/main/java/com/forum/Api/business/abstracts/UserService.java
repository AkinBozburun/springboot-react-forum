package com.forum.Api.business.abstracts;

import com.forum.Api.business.requests.CreateUserRequest;
import com.forum.Api.business.requests.DeleteUserRequest;
import com.forum.Api.business.requests.UpdateUserRequest;
import com.forum.Api.entities.concretes.User;

public interface UserService {
    boolean isUserExist(String username);
    void createUser(CreateUserRequest createUserRequest);
    void deleteUserById(DeleteUserRequest deleteUserRequest);
    void updateUserById(UpdateUserRequest updateUserRequest);
    User getUserById(int id);
}
