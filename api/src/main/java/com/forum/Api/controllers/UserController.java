package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.UserService;
import com.forum.Api.business.requests.User.CreateUserRequest;
import com.forum.Api.business.requests.User.DeleteUserRequest;
import com.forum.Api.business.requests.User.UpdateUserRequest;
import com.forum.Api.business.responses.ResponseType;
import com.forum.Api.business.responses.ResponseWrapper;
import com.forum.Api.common.ResponseMessage;
import com.forum.Api.entities.concretes.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseWrapper<User>> getUserById(@PathVariable int id) {
        User user = userService.getUserById(id);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, user, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseWrapper<String>> createUser(CreateUserRequest createUserRequest) {
        userService.createUser(createUserRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "User successfully created.", HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ResponseWrapper<String>> updateUser(UpdateUserRequest updateUserRequest){
        userService.updateUserById(updateUserRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Post successfully updated.", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<ResponseWrapper<String>> deleteUserById(DeleteUserRequest deleteUserRequest){
        userService.deleteUserById(deleteUserRequest);
        return ResponseMessage.generateResponseMessage(ResponseType.SUCCESS, "Post successfully deleted.", HttpStatus.OK);
    }
}
