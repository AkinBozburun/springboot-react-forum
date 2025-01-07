package com.forum.Api.dataAccess.concretes;

import com.forum.Api.dataAccess.abstracts.CategoryRepository;
import com.forum.Api.entities.concretes.Category;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryCategoryRepository{
    private final List<Category> categories;

    public InMemoryCategoryRepository() {
        this.categories = new ArrayList<Category>();
    }
}
