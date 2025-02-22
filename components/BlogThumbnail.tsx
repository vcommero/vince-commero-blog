import { Card, Divider, Group, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";

interface BlogThumbnailProps {
    id: string;
    title: string;
    description: string;
    createdOn: string;
};

export default function BlogThumbnail({
    id,
    title,
    description,
    createdOn
}: BlogThumbnailProps) {
    const createdOnDate = parseISO(createdOn);
    return (
        <Link href={`/blogs/${id}`} passHref>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                styles={{
                    root: {
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    },
                }}
                withBorder
            >
                <Stack>
                    <Text size="xl" fw={500}>{title}</Text>
                    <Group>
                        <MdOutlineCalendarToday />
                        <Text size="md" c="dimmed" my={0}>
                            {format(createdOnDate, 'MMMM d, yyyy')}
                        </Text>
                    </Group>
                </Stack>
                <Divider m="md" />
                <Text size="md">{description}</Text>
            </Card>
        </Link>
    );
}
