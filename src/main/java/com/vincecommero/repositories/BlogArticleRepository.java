package com.vincecommero.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vincecommero.models.BlogArticle;

@Repository
public interface BlogArticleRepository extends JpaRepository<BlogArticle, String> {

}
