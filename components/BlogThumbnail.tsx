import { Card, Divider, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import React from "react";

interface BlogThumbnailProps {
    title: string;
    author: string;
    description: string;
    createdOn: string;
    updatedOn: string;
};

export default function BlogThumbnail({
    title,
    author,
    description,
    createdOn,
    updatedOn
}: BlogThumbnailProps) {
    const createdOnDate = parseISO(createdOn);
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stack>
                <Text size="xl" fw={500}>{title}</Text>
                <Text size="md" c="dimmed" my={0}>
                    {format(createdOnDate, 'MMMM d, yyyy')}
                </Text>
            </Stack>
            <Divider m="md" />
            <Text size="md">{description}</Text>
        </Card>
    );
}
