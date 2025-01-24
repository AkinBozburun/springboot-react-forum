package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.UserService;
import com.forum.Api.dataAccess.abstracts.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements UserService {

    private UserRepository userRepository;

    @Override
    public boolean isUserExist(String username) {
        return userRepository.existsByUsername(username);
    }
}
