package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Post;
import com.forum.Api.entities.concretes.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByUsername(String username);
}
