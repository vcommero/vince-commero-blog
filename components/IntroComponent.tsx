import { Card, Group, Image, Text } from "@mantine/core";
import React from "react";

const IntroText = "Hello! I'm Vince Commero and welcome to my corner of the internet! I'm a software engineer with a previous life in Physics and Nuclear Engineering, and an avid interest in science and technology. I'm also into cooking, fitness, enjoying the outdoors, and science fiction. This is a space for me to post my thoughts, share things that I'm doing or working on, and share anything else I find interesting."

export default function IntroComponent() {

    return (
        <Card radius="lg">
            <Group justify="space-between" >
                <Image
                    src="https://ik.imagekit.io/bhmwwut65/BlogSiteAssets/20220913_110422_3.png?updatedAt=1737759521666&tr=h-450%2Cw-450"
                    alt="A pic of me!"
                    radius="lg"
                    h={250}
                    w="auto"
                    fit="contain"
                />
                <Text flex={1} m="lg" size="xl" visibleFrom="xs" >{IntroText}</Text>
                <Text flex={1} m="lg" size="md" hiddenFrom="xs" >{IntroText}</Text>
            </Group>
        </Card>
    );
}
