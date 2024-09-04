package com.vincecommero.components.articlecard;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vincecommero.models.BlogArticle;
import com.vaadin.flow.component.html.Div;
import java.util.List;

public class ArticleCardList extends VerticalLayout {

    private VerticalLayout cardContainer;

    public ArticleCardList() {
        setPadding(false);
        setSpacing(false);
        
        cardContainer = new VerticalLayout();
        cardContainer.setPadding(false);
        cardContainer.setSpacing(true);
        
        add(cardContainer);
    }

    public void setArticles(List<BlogArticle> articles) {
        cardContainer.removeAll();
        for (BlogArticle article : articles) {
            ArticleCard card = new ArticleCard(
                article.getTitle(),
                article.getAuthor(),
                article.getCreatedOn().toLocalDate().toString(),
                article.getDescription()
            );
            Div cardWrapper = new Div(card);
            cardWrapper.addClassName("blog-card-wrapper");
            cardContainer.add(cardWrapper);
        }
    }

    // You might want to add methods to add or remove individual cards as well
    public void addArticle(BlogArticle article) {
        ArticleCard card = new ArticleCard(
            article.getTitle(),
            article.getAuthor(),
            article.getCreatedOn().toLocalDate().toString(),
            article.getDescription()
        );
        Div cardWrapper = new Div(card);
        cardWrapper.addClassName("blog-card-wrapper");
        cardContainer.add(cardWrapper);
    }
}
