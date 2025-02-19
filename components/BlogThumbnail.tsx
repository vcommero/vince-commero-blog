import { Card, Divider, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import React from "react";

type BlogThumbnailProps = {
    title: string;
    author: string;
    description: string;
    createdOn: string;
    updatedOn: string;
};

export default function BlogThumbnail(props: BlogThumbnailProps) {
    const createdOnDate = parseISO(props.createdOn);
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stack>
                <Text size="xl" fw={500}>{props.title}</Text>
                <Text size="md" c="dimmed" my={0}>
                    {format(createdOnDate, 'MMMM d, yyyy')}
                </Text>
            </Stack>
            <Divider m="md" />
            <Text size="md">{props.description}</Text>
        </Card>
    );
}
