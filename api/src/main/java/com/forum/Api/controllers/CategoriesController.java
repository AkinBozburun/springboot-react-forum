package com.forum.Api.controllers;

import com.forum.Api.business.abstracts.CategoriesService;
import com.forum.Api.entities.concretes.Category;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoriesController {
    private final CategoriesService categoriesService;

    public CategoriesController(CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }

    @GetMapping("/getall")
    public List<Category> getAll(){
        return this.categoriesService.getAll();
    }
}
