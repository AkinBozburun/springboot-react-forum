package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.CategoryService;
import com.forum.Api.dataAccess.abstracts.CategoryRepository;
import com.forum.Api.entities.concretes.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryManager implements CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryManager(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> getAll() {
        return categoryRepository.getAll();
    }
}
