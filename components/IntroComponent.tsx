import { Blockquote, Card, Divider, Group, Image, Text } from "@mantine/core";
import React from "react";

export default function IntroComponent() {
    return (
        <Card shadow="sm" radius="lg">
            <Group justify="space-between">
                <Image
                    src="https://ik.imagekit.io/bhmwwut65/BlogSiteAssets/20220913_110422_3.png?updatedAt=1737759521666&tr=h-450%2Cw-450"
                    alt="A pic of me!"
                    radius="lg"
                    h={250}
                    w="auto"
                    fit="contain"
                    m="lg"
                />
                <Divider size="xl" orientation="vertical" />
                <Text flex={1} m="lg" >
                    {
                        "Hello! I'm Vince Commero and welcome to my corner of the internet! I work as a software engineer and have an avid interest in science and technology. I'm also into cooking, fitness, enjoying the outdoors, and science fiction. This is a space for me to post my thoughts, share things that I'm doing or working on, and share anything else I find interesting."
                    }
                </Text>
            </Group>
        </Card>
    );
}
