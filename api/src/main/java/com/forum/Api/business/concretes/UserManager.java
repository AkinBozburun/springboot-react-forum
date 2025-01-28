package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.UserService;
import com.forum.Api.business.requests.User.CreateUserRequest;
import com.forum.Api.business.requests.User.DeleteUserRequest;
import com.forum.Api.business.requests.User.UpdateUserRequest;
import com.forum.Api.dataAccess.abstracts.UserRepository;
import com.forum.Api.entities.concretes.User;
import com.forum.Api.entities.enums.Role;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements UserService {

    private final UserRepository userRepository;

    public UserManager(UserRepository userRepository){this.userRepository = userRepository;}

    @Override
    public boolean isUserExist(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public void createUser(CreateUserRequest createUserRequest) {
        User user = new User();
        user.setUsername(createUserRequest.getUsername());
        user.setEmail(createUserRequest.getEmail());
        user.setPassword(createUserRequest.getPassword());
        user.setFirstName(createUserRequest.getFirstName());
        user.setLastName((createUserRequest.getLastName()));
        user.setRole(Role.USER);
        user.setBanned(false);

        userRepository.save(user);
    }

    @Override
    public void deleteUserById(DeleteUserRequest deleteUserRequest) {
        userRepository.deleteById(deleteUserRequest.getId());
    }

    @Override
    public void updateUserById(UpdateUserRequest updateUserRequest) {
        User user = userRepository.findById(updateUserRequest.getId()).orElseThrow();
        user.setUsername(updateUserRequest.getUsername());
        user.setEmail(updateUserRequest.getEmail());
        user.setPassword(updateUserRequest.getPassword());
        user.setFirstName(updateUserRequest.getFirstName());
        user.setLastName(updateUserRequest.getLastName());

        userRepository.save(user);
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).orElseThrow();
    }
}
