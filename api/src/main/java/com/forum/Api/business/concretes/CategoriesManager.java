package com.forum.Api.business.concretes;

import com.forum.Api.business.abstracts.CategoriesService;
import com.forum.Api.dataAccess.abstracts.CategoryRepository;
import com.forum.Api.entities.concretes.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriesManager implements CategoriesService {
    private final CategoryRepository categoryRepository;

    public CategoriesManager(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> getAll() {
        return categoryRepository.getAll();
    }
}
