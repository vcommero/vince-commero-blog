package com.vincecommero.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BlogArticle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private String id;
	
	String author;
	
	String title;
	
	String description;

	LocalDateTime createdOn;
	
	LocalDateTime updatedOn;
	
	private String body;
	
	public BlogArticle() {}

	public BlogArticle(String id, String author, String title, String description, LocalDateTime createdOn,
			LocalDateTime updatedOn, String body) {
		super();
		this.id = id;
		this.author = author;
		this.title = title;
		this.description = description;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
		this.body = body;
	}
}
