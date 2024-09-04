package com.vincecommero.views.post;

import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.avatar.Avatar;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Hr;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.orderedlayout.FlexComponent.JustifyContentMode;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Gap;
import com.vaadin.flow.theme.lumo.LumoUtility.Padding;
import com.vincecommero.components.avataritem.AvatarItem;

@PageTitle("Post")
@Route(value = "post")
public class PostView extends Composite<VerticalLayout> {

    public PostView() {
        VerticalLayout content = getContent();
        content.setWidth("100%");
        content.getStyle().set("flex-grow", "1");
        content.setJustifyContentMode(JustifyContentMode.START);
        content.setAlignItems(Alignment.CENTER);

        VerticalLayout outerContainer = createOuterContainer();
        content.add(outerContainer);

        VerticalLayout headerContainer = createHeaderContainer();
        outerContainer.add(headerContainer);

        VerticalLayout bodyContainer = createBodyContainer();
        outerContainer.add(bodyContainer);
    }
    
    // Component creation helper methods

    private VerticalLayout createOuterContainer() {
        VerticalLayout outerContainer = new VerticalLayout();
        outerContainer.setWidthFull();
        outerContainer.setPadding(false);
        outerContainer.setMaxWidth("1140px");
        outerContainer.getStyle().set("flex-grow", "1");
        return outerContainer;
    }

    private VerticalLayout createHeaderContainer() {
        VerticalLayout headerContainer = new VerticalLayout();
        headerContainer.setWidthFull();
        headerContainer.setPadding(false);
        headerContainer.setHeight("min-content");

        HorizontalLayout headerRow = createHeaderRow();
        headerContainer.add(headerRow);

        return headerContainer;
    }

    private HorizontalLayout createHeaderRow() {
        HorizontalLayout headerRow = new HorizontalLayout();
        headerRow.setWidthFull();
        headerRow.addClassName(Gap.MEDIUM);
        headerRow.addClassName(Padding.MEDIUM);
        headerRow.getStyle().set("flex-grow", "1");

        H1 nameText = new H1("Vince Commero");
        nameText.setMinWidth("max-content");
        nameText.setWidth("max-content");

        Tabs headerTabs = createHeaderTabs();

        headerRow.add(nameText, headerTabs);
        headerRow.setAlignSelf(FlexComponent.Alignment.END, headerTabs);

        return headerRow;
    }

    private Tabs createHeaderTabs() {
        Tabs headerTabs = new Tabs();
        headerTabs.setWidth("100%");
        headerTabs.add(new Tab("Home"));
        headerTabs.add(new Tab("Posts"));
        return headerTabs;
    }

    private VerticalLayout createBodyContainer() {
        VerticalLayout bodyContainer = new VerticalLayout();
        bodyContainer.setWidthFull();
        bodyContainer.getStyle().set("flex-grow", "1");

        HorizontalLayout postHeaderContainer = createPostHeaderContainer();
        bodyContainer.add(postHeaderContainer);

        Hr hr = new Hr();
        bodyContainer.add(hr);

        VerticalLayout postBodyContainer = createPostBodyContainer();
        bodyContainer.add(postBodyContainer);

        return bodyContainer;
    }

    private HorizontalLayout createPostHeaderContainer() {
        HorizontalLayout postHeaderContainer = new HorizontalLayout();
        postHeaderContainer.setWidthFull();
        postHeaderContainer.addClassName(Gap.MEDIUM);
        postHeaderContainer.setHeight("min-content");
        postHeaderContainer.setAlignItems(Alignment.START);
        postHeaderContainer.setJustifyContentMode(JustifyContentMode.CENTER);

        VerticalLayout postPhotoContainer = createPostImageContainer();
        VerticalLayout postHeaderInfoContainer = createPostHeaderInfoContainer();

        postHeaderContainer.add(postPhotoContainer, postHeaderInfoContainer);

        return postHeaderContainer;
    }

    private VerticalLayout createPostImageContainer() {
        VerticalLayout postImageContainer = new VerticalLayout();
        postImageContainer.setHeightFull();
        postImageContainer.setWidth("100%");
        postImageContainer.getStyle().set("flex-grow", "1");
        postImageContainer.setJustifyContentMode(JustifyContentMode.CENTER);
        postImageContainer.setAlignItems(Alignment.END);

        H1 postImage = new H1("Replace with Image component");
        postImage.setWidth("max-content");
        postImageContainer.add(postImage);

        return postImageContainer;
    }

    private VerticalLayout createPostHeaderInfoContainer() {
        VerticalLayout postHeaderInfoContainer = new VerticalLayout();
        postHeaderInfoContainer.setHeightFull();
        postHeaderInfoContainer.setWidth("100%");
        postHeaderInfoContainer.getStyle().set("flex-grow", "1");
        postHeaderInfoContainer.setJustifyContentMode(JustifyContentMode.CENTER);
        postHeaderInfoContainer.setAlignItems(Alignment.START);

        H1 postTitleText = new H1("Post Title");
        postTitleText.setWidth("max-content");

        Paragraph postTitleDescription = new Paragraph(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        postTitleDescription.setWidth("100%");
        postTitleDescription.getStyle().set("font-size", "var(--lumo-font-size-xl)");

        AvatarItem authorComponent = createAuthorComponent();

        HorizontalLayout postTagsContainer = createPostTagsContainer();

        postHeaderInfoContainer.add(postTitleText, postTitleDescription, authorComponent, postTagsContainer);

        return postHeaderInfoContainer;
    }

    private AvatarItem createAuthorComponent() {
        AvatarItem authorComponent = new AvatarItem();
        authorComponent.setWidth("min-content");
        authorComponent.setMinWidth("max-content");
        setAvatarItemSampleData(authorComponent);
        return authorComponent;
    }

    private HorizontalLayout createPostTagsContainer() {
        HorizontalLayout postTagsContainer = new HorizontalLayout();
        postTagsContainer.setWidthFull();
        postTagsContainer.addClassName(Gap.MEDIUM);
        postTagsContainer.setHeight("min-content");

        Span postTags = new Span("Badge");
        postTags.setWidth("min-content");
        postTags.getElement().getThemeList().add("badge");

        postTagsContainer.add(postTags);

        return postTagsContainer;
    }

    private VerticalLayout createPostBodyContainer() {
        VerticalLayout postBodyContainer = new VerticalLayout();
        postBodyContainer.setWidthFull();
        postBodyContainer.setWidth("100%");
        postBodyContainer.getStyle().set("flex-grow", "1");

        Paragraph postBody = new Paragraph(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is more text for my blog. Just random text that has no meaning whatsoever. I need to fill this with text to test out how this looks.");
        postBody.setWidth("100%");
        postBody.getStyle().set("font-size", "var(--lumo-font-size-xl)");

        postBodyContainer.add(postBody);

        return postBodyContainer;
    }

    private void setAvatarItemSampleData(AvatarItem avatarItem) {
        avatarItem.setHeading("Vince Commero");
        avatarItem.setDescription("Software Engineer");
        avatarItem.setAvatar(new Avatar("Vince Commero"));
    }
}
