import { Card, Divider, Stack, Text } from "@mantine/core";
import { format } from "date-fns";
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
            <Stack>
                <Text size="lg" fw={500}>{props.title}</Text>
                <Text size="md" c="dimmed" my={0}>
                    {format(props.createdOn.getDate(), "MMMM dd, yyyy")}
                </Text>
            </Stack>
            <Divider m="md" />
            <Text size="md">{props.description}</Text>
        </Card>
    );
}
