package com.forum.Api.dataAccess.concretes;

import com.forum.Api.dataAccess.abstracts.CategoryRepository;
import com.forum.Api.entities.concretes.Category;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryCategoryRepository implements CategoryRepository {
    private final List<Category> categories;

    public InMemoryCategoryRepository() {
        this.categories = new ArrayList<Category>();
        categories.add(new Category(1, "example1"));
        categories.add(new Category(2, "example2"));
        categories.add(new Category(3, "example3"));
        categories.add(new Category(4, "example4"));
    }
    @Override
    public List<Category> getAll() {
        return this.categories;
    }
}
