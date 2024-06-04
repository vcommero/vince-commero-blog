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
        VerticalLayout layoutColumn2 = new VerticalLayout();
        VerticalLayout layoutColumn3 = new VerticalLayout();
        HorizontalLayout layoutRow = new HorizontalLayout();
        H1 h1 = new H1();
        Tabs tabs = new Tabs();
        VerticalLayout layoutColumn4 = new VerticalLayout();
        HorizontalLayout layoutRow2 = new HorizontalLayout();
        VerticalLayout layoutColumn5 = new VerticalLayout();
        H1 h12 = new H1();
        VerticalLayout layoutColumn6 = new VerticalLayout();
        H1 h13 = new H1();
        Paragraph textLarge = new Paragraph();
        AvatarItem avatarItem = new AvatarItem();
        HorizontalLayout layoutRow3 = new HorizontalLayout();
        Span badge = new Span();
        Hr hr = new Hr();
        VerticalLayout layoutColumn7 = new VerticalLayout();
        Paragraph textLarge2 = new Paragraph();
        getContent().setWidth("100%");
        getContent().getStyle().set("flex-grow", "1");
        getContent().setJustifyContentMode(JustifyContentMode.START);
        getContent().setAlignItems(Alignment.CENTER);
        layoutColumn2.setWidthFull();
        getContent().setFlexGrow(1.0, layoutColumn2);
        layoutColumn2.setPadding(false);
        layoutColumn2.setWidth("100%");
        layoutColumn2.setMaxWidth("1140px");
        layoutColumn2.getStyle().set("flex-grow", "1");
        layoutColumn3.setWidthFull();
        layoutColumn2.setFlexGrow(1.0, layoutColumn3);
        layoutColumn3.setPadding(false);
        layoutColumn3.setWidth("100%");
        layoutColumn3.setHeight("min-content");
        layoutRow.setWidthFull();
        layoutColumn3.setFlexGrow(1.0, layoutRow);
        layoutRow.addClassName(Gap.MEDIUM);
        layoutRow.addClassName(Padding.MEDIUM);
        layoutRow.setWidth("100%");
        layoutRow.getStyle().set("flex-grow", "1");
        h1.setText("Vince Commero");
        h1.setWidth("max-content");
        layoutRow.setAlignSelf(FlexComponent.Alignment.END, tabs);
        tabs.setWidth("100%");
        setTabsSampleData(tabs);
        layoutColumn4.setWidthFull();
        layoutColumn2.setFlexGrow(1.0, layoutColumn4);
        layoutColumn4.setWidth("100%");
        layoutColumn4.getStyle().set("flex-grow", "1");
        layoutRow2.setWidthFull();
        layoutColumn4.setFlexGrow(1.0, layoutRow2);
        layoutRow2.addClassName(Gap.MEDIUM);
        layoutRow2.setWidth("100%");
        layoutRow2.setHeight("min-content");
        layoutRow2.setAlignItems(Alignment.START);
        layoutRow2.setJustifyContentMode(JustifyContentMode.CENTER);
        layoutColumn5.setHeightFull();
        layoutRow2.setFlexGrow(1.0, layoutColumn5);
        layoutColumn5.setWidth("100%");
        layoutColumn5.getStyle().set("flex-grow", "1");
        layoutColumn5.setJustifyContentMode(JustifyContentMode.CENTER);
        layoutColumn5.setAlignItems(Alignment.END);
        h12.setText("Replace with Image component");
        h12.setWidth("max-content");
        layoutColumn6.setHeightFull();
        layoutRow2.setFlexGrow(1.0, layoutColumn6);
        layoutColumn6.setWidth("100%");
        layoutColumn6.getStyle().set("flex-grow", "1");
        layoutColumn6.setJustifyContentMode(JustifyContentMode.CENTER);
        layoutColumn6.setAlignItems(Alignment.START);
        h13.setText("Post Title");
        h13.setWidth("max-content");
        textLarge.setText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        textLarge.setWidth("100%");
        textLarge.getStyle().set("font-size", "var(--lumo-font-size-xl)");
        avatarItem.setWidth("min-content");
        setAvatarItemSampleData(avatarItem);
        layoutRow3.setWidthFull();
        layoutColumn6.setFlexGrow(1.0, layoutRow3);
        layoutRow3.addClassName(Gap.MEDIUM);
        layoutRow3.setWidth("100%");
        layoutRow3.setHeight("min-content");
        badge.setText("Badge");
        badge.setWidth("min-content");
        badge.getElement().getThemeList().add("badge");
        layoutColumn7.setWidthFull();
        layoutColumn4.setFlexGrow(1.0, layoutColumn7);
        layoutColumn7.setWidth("100%");
        layoutColumn7.getStyle().set("flex-grow", "1");
        textLarge2.setText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is more text for my blog. Just random text that has no meaning whatsoever. I need to fill this with text to test out how this looks.");
        textLarge2.setWidth("100%");
        textLarge2.getStyle().set("font-size", "var(--lumo-font-size-xl)");
        getContent().add(layoutColumn2);
        layoutColumn2.add(layoutColumn3);
        layoutColumn3.add(layoutRow);
        layoutRow.add(h1);
        layoutRow.add(tabs);
        layoutColumn2.add(layoutColumn4);
        layoutColumn4.add(layoutRow2);
        layoutRow2.add(layoutColumn5);
        layoutColumn5.add(h12);
        layoutRow2.add(layoutColumn6);
        layoutColumn6.add(h13);
        layoutColumn6.add(textLarge);
        layoutColumn6.add(avatarItem);
        layoutColumn6.add(layoutRow3);
        layoutRow3.add(badge);
        layoutColumn4.add(hr);
        layoutColumn4.add(layoutColumn7);
        layoutColumn7.add(textLarge2);
    }

    private void setTabsSampleData(Tabs tabs) {
        tabs.add(new Tab("Dashboard"));
        tabs.add(new Tab("Payment"));
        tabs.add(new Tab("Shipping"));
    }

    private void setAvatarItemSampleData(AvatarItem avatarItem) {
        avatarItem.setHeading("Aria Bailey");
        avatarItem.setDescription("Endocrinologist");
        avatarItem.setAvatar(new Avatar("Aria Bailey"));
    }
}
