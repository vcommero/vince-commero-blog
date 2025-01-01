import { Card, Text } from "@mantine/core";
import React from "react";

type BlogThumbnailProps = {
    title: String;
    author: String;
    description: String;
    createdOn: Date;
    updatedOn: Date;
};

export default function BlogThumbnail(props: BlogThumbnailProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text fw={500}>{props.title}</Text>
            <Text size="sm">{props.author}</Text>
            <Text size="sm" c="dimmed">
                Written on: {props.createdOn.getDate().toString()}
            </Text>
            <Text size="sm" c="dimmed">
                Updated on: {props.updatedOn.getDate().toString()}
            </Text>
            <Text size="sm">{props.description}</Text>
        </Card>
    );
}
