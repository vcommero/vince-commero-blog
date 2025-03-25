import { Card, Center, Divider, Group, Image, Stack, Text } from "@mantine/core";
import React from "react";

const IntroText = "Hello and welcome to my corner of the internet! I'm a software engineer with a previous life in Physics and Nuclear Engineering, and an avid interest in science and technology. I'm also into cooking, fitness, enjoying the outdoors, and science fiction. This is a space for me to post my thoughts, share things that I'm doing or working on, and share anything else I find interesting."

export default function IntroComponent() {

    return (
        <>
            <Group justify="space-between" visibleFrom="xs">
                <Image
                    src="https://ik.imagekit.io/bhmwwut65/BlogSiteAssets/20220913_110422_3.png?updatedAt=1737759521666&tr=h-450%2Cw-450"
                    alt="A pic of me!"
                    radius="lg"
                    h={250}
                    w="auto"
                    fit="contain"
                />
                <Text
                    flex={1}
                    m="lg"
                    size="2xl"
                    fw={800}
                    visibleFrom="xs"
                    c="white"
                    style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}
                >
                    {IntroText}
                </Text>
            </Group>
            <Stack hiddenFrom="xs" align="center" >
                <Image
                    src="https://ik.imagekit.io/bhmwwut65/BlogSiteAssets/20220913_110422_3.png?updatedAt=1737759521666&tr=h-450%2Cw-450"
                    alt="A pic of me!"
                    radius="50%"
                    h={250}
                    w={250}
                    fit="cover"
                    mt={20}
                />
                <Card
                    radius="lg"
                    p={'2px'}
                    style={{
                        backgroundColor: `rgba(255, 255, 255, 0.02)`,
                        backdropFilter: `blur(5px)`,
                        border: 0
                    }}
                >
                    <Text flex={1} m="lg" size="sm">{IntroText}</Text>
                </Card>
            </Stack>
        </>
    );
}
