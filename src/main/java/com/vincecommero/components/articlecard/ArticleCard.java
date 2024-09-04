package com.vincecommero.components.articlecard;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

@CssImport("./styles/ArticleCard.css")
public class ArticleCard extends HorizontalLayout {
    
    public ArticleCard(String title, String author, String date, String description, String imageUrl) {
        setWidth("100%");
        setHeight("150px");
        addClassName("blog-article-card");
        
        Image thumbnail = new Image(imageUrl, "Article Thumbnail");
        thumbnail.setWidth("150px");
        thumbnail.setHeight("150px");
        
        VerticalLayout contentLayout = new VerticalLayout();
        contentLayout.setPadding(false);
        contentLayout.setSpacing(false);
        
        H2 titleComponent = new H2(title);
        titleComponent.addClassName("blog-article-title");
        
        Div metaInfo = new Div();
        metaInfo.addClassName("blog-article-meta");
        
        Span authorComponent = new Span("By " + author);
        Span dateComponent = new Span(date);
        metaInfo.add(authorComponent, new Span(" | "), dateComponent);
        
        Paragraph descriptionComponent = new Paragraph(description);
        descriptionComponent.addClassName("blog-article-description");
        
        contentLayout.add(titleComponent, metaInfo, descriptionComponent);
        
        add(thumbnail, contentLayout);
    }
    
    public ArticleCard(String title, String author, String date, String description) {
    	this(title, author, date, description, "/images/blog-icon.png");
    }
}
