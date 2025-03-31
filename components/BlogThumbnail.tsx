"use client";

import { Card, Divider, Group, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import styles from "./BlogThumbnail.module.scss";
import { useMediaQuery } from "@mantine/hooks";

interface BlogThumbnailProps {
    id: string;
    title: string;
    description: string;
    createdOn: string;
    cardProps?: any;
};

export default function BlogThumbnail({
    id,
    title,
    description,
    createdOn,
    cardProps
}: BlogThumbnailProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const createdOnDate = parseISO(createdOn);

    return (
        <Card
            className={styles.card}
            component={Link}
            href={`/blogs/${id}`}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
                width: isMobile ? undefined : "65rem",
                ...cardProps
            }}
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
    );
}
