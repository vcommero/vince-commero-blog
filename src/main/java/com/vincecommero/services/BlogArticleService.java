package com.vincecommero.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vincecommero.models.BlogArticle;
import com.vincecommero.repositories.BlogArticleRepository;

@Service
public class BlogArticleService {
	
	@Autowired
	private BlogArticleRepository blogArticleRepo;
	
	public Optional<BlogArticle> getById(String id) {
		return blogArticleRepo.findById(id);
	}
	
	public List<BlogArticle> getAll() {
		return blogArticleRepo.findAll();
	}
	
	public BlogArticle save(BlogArticle blogArticle) {
		
		
		return blogArticle;
	}

}
