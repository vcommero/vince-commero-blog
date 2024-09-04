package com.vincecommero.views.home;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;

import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.messages.MessageList;
import com.vaadin.flow.component.messages.MessageListItem;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.orderedlayout.FlexComponent.JustifyContentMode;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.theme.lumo.LumoUtility.Gap;
import com.vaadin.flow.theme.lumo.LumoUtility.Padding;
import com.vincecommero.components.articlecard.ArticleCardList;
import com.vincecommero.models.BlogArticle;

@PageTitle("Home")
@Route(value = "")
@RouteAlias(value = "")
public class HomeView extends Composite<VerticalLayout> {
	
	private String introTextContentString = "I'm a software engineer with a previous life in Physics and Nuclear Engineering. " +
			"I enjoy science, technology, history, and philosophy. I'm an avid reader and huge sci-fi fan! " + 
			"This is a space for me to post my thoughts and share my knowledge. " + 
			"Hopefully this brings some positive addition to your life!";

    public HomeView() {
    	VerticalLayout content = getContent();
    	content.setWidth("100%");
    	content.getStyle().set("flex-grow", "1");
    	content.setJustifyContentMode(JustifyContentMode.START);
    	content.setAlignItems(Alignment.CENTER);
    	
    	VerticalLayout outerContainer = createOuterContainer();
    	
        VerticalLayout headerContainer = createHeaderContainer();
        outerContainer.setFlexGrow(1.0, headerContainer);
        
        HorizontalLayout headerRow = createHeaderRow();
        headerContainer.setFlexGrow(1.0, headerRow);
        
        H1 nameText = new H1();
        nameText.setText("Vince Commero");
        nameText.setMinWidth("max-content");
        nameText.setWidth("max-content");
        
        Tabs headerTabs = createHeaderTabs();
        headerRow.setAlignSelf(FlexComponent.Alignment.END, headerTabs);
        
        HorizontalLayout bodyContainer = createBodyContainer();
        outerContainer.setFlexGrow(1.0, bodyContainer);
        
        VerticalLayout introContainer = createIntroContainer();
        bodyContainer.setFlexGrow(1.0, introContainer);
        
        Paragraph introText = createIntroText();
        
        VerticalLayout postsContainer = createPostsContainer();
        
        ArticleCardList articleList = createArticleCardList();
        
        
        content.add(outerContainer);
        outerContainer.add(headerContainer);
        headerContainer.add(headerRow);
        headerRow.add(nameText);
        headerRow.add(headerTabs);
        outerContainer.add(bodyContainer);
        bodyContainer.add(introContainer);
        introContainer.add(introText);
        bodyContainer.add(postsContainer);
        postsContainer.add(articleList);
    }
    
    // Component creation helper methods
    
    private VerticalLayout createOuterContainer() {
    	VerticalLayout outerContainer = new VerticalLayout();
    	
    	outerContainer.setWidthFull();
        outerContainer.setPadding(false);
        outerContainer.setMaxWidth("1140px");
        outerContainer.getStyle().set("flex-grow", "1");
        outerContainer.setJustifyContentMode(JustifyContentMode.START);
        outerContainer.setAlignItems(Alignment.START);
    	
    	return outerContainer;
    }
    
    private VerticalLayout createHeaderContainer() {
    	VerticalLayout headerContainer = new VerticalLayout();
    	
    	headerContainer.setWidthFull();
        headerContainer.setPadding(false);
        headerContainer.setHeight("min-content");
    	
    	return headerContainer;
    }
    
    private HorizontalLayout createHeaderRow() {
		HorizontalLayout headerRow = new HorizontalLayout();
		
		headerRow.setWidthFull();
        headerRow.addClassName(Gap.MEDIUM);
        headerRow.addClassName(Padding.MEDIUM);
        headerRow.getStyle().set("flex-grow", "1");
		
		return headerRow;
	}
    
    private Tabs createHeaderTabs() {
		Tabs tabs = new Tabs();

        tabs.setWidthFull();
        tabs.add(new Tab("Home"));
        tabs.add(new Tab("Posts"));
		
		return tabs;
	}
    
    private HorizontalLayout createBodyContainer() {
		HorizontalLayout bodyContainer = new HorizontalLayout();
		
		bodyContainer.setWidthFull();
        bodyContainer.addClassName(Gap.MEDIUM);
        bodyContainer.addClassName(Padding.MEDIUM);
        bodyContainer.getStyle().set("flex-grow", "1");
        bodyContainer.setAlignItems(Alignment.START);
        bodyContainer.setJustifyContentMode(JustifyContentMode.CENTER);
		
		return bodyContainer;
	}
    
    private VerticalLayout createIntroContainer() {
    	VerticalLayout introContainer = new VerticalLayout();
		
        introContainer.setHeightFull();
        introContainer.setWidth("min-content");
        introContainer.setMinWidth("25%");
        introContainer.getStyle().set("flex-grow", "1");
		
		return introContainer;
	}
    
    private Paragraph createIntroText() {
    	Paragraph introText = new Paragraph();
    	
    	introText.setText(introTextContentString);
        introText.setWidth("100%");
        introText.getStyle().set("font-size", "var(--lumo-font-size-xl)");
		
		return introText;
	}
    
    private VerticalLayout createPostsContainer() {
    	VerticalLayout postsContainer = new VerticalLayout();
    	
        postsContainer.setHeightFull();
        postsContainer.getStyle().set("flex-grow", "1");
		
		return postsContainer;
	}
    
    /*
    private MessageList createMessagesList() {
    	MessageList messagesList = new MessageList();
    	messagesList.setWidth("100%");
    	
    	MessageListItem message1 = new MessageListItem("Nature does not hurry, yet everything gets accomplished.",
                LocalDateTime.now().minusDays(1).toInstant(ZoneOffset.UTC), "Matt Mambo");
        message1.setUserColorIndex(1);
        MessageListItem message2 = new MessageListItem(
                "Using your talent, hobby or profession in a way that makes you contribute with something good to this world is truly the way to go.",
                LocalDateTime.now().minusMinutes(55).toInstant(ZoneOffset.UTC), "Linsey Listy");
        message2.setUserColorIndex(2);
        messagesList.setItems(message1, message2);
		
		return messagesList;
	}
    */
    
    private ArticleCardList createArticleCardList() {
    	ArticleCardList cardList = new ArticleCardList();
    	cardList.setWidthFull();
    	
    	List<BlogArticle> articles = new ArrayList<BlogArticle>();
    	articles.add(new BlogArticle("1", "Vince Commero", "Test Article 1", 
    			"Just a simple description of this blog article. Should be able to fit all of the text content of this description in the card, or at least truncate if it's too large.",
    			LocalDateTime.now(), LocalDateTime.now(), "The body of the text goes here. Need to remove this from thumbnails."));
    	articles.add(new BlogArticle("2", "Vince Commero", "Test Article 2 - The Return of Test Article", 
    			"Just a simple description of this blog article.",
    			LocalDateTime.now(), LocalDateTime.now(), "The body of the text goes here. Need to remove this from thumbnails."));
    	
    	cardList.setArticles(articles);
    	
    	return cardList;
    }

}
