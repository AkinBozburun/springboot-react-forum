package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.UserService;
import com.forum.Api.business.requests.User.CreateUserRequest;
import com.forum.Api.business.requests.User.DeleteUserRequest;
import com.forum.Api.business.requests.User.UpdateUserRequest;
import com.forum.Api.entities.concretes.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping("/create")
    public void createUser(CreateUserRequest createUserRequest) {
        userService.createUser(createUserRequest);
    }

    @PutMapping("/update")
    public void updateUser(UpdateUserRequest updateUserRequest){
        userService.updateUserById(updateUserRequest);
    }

    @DeleteMapping("/delete")
    public void deleteUserById(DeleteUserRequest deleteUserRequest){
        userService.deleteUserById(deleteUserRequest);
    }
}
