package com.forum.Api.dataAccess.abstracts;

import com.forum.Api.entities.concretes.Category;

import java.util.List;

public interface CategoryRepository {
    List<Category> getAll();
}
