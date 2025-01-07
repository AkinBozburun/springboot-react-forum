package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
