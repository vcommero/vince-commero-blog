"use client";

import { Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import React, { useEffect } from "react";
import styles from "./GreetingComponent.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const IntroText = "Hello and welcome to my corner of the internet! I'm a software engineer with a previous life in Physics and Nuclear Engineering, and an avid interest in science and technology. I'm also into cooking, fitness, enjoying the outdoors, and science fiction. This is a space for me to post my thoughts, share things that I'm doing or working on, and share anything else I find interesting."

export default function GreetingComponent() {
    useEffect(() => {
        // Fix for CSS blur properties not correctly getting set initially
        const mobileIntroCardElement = document.getElementById("mobileIntroCard");
        if (mobileIntroCardElement) mobileIntroCardElement.className = styles.mobileIntroCard;
    }, []);

    return (
        <>
            {/* Desktop view */}
            <Group justify="space-between" visibleFrom="xs">
                <Text
                    flex={1}
                    m="lg"
                    mx="10rem"
                    size="2xl"
                    fw={700}
                    visibleFrom="xs"
                    c="white"
                    style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}
                >
                    {IntroText}
                </Text>
            </Group>
            {/* Mobile view */}
            <Stack hiddenFrom="xs" align="center" >
                <Image
                    src="https://ik.imagekit.io/bhmwwut65/tr:h-450,w-450/BlogSiteAssets/20220913_110422_3.png?updatedAt=1737759521666"
                    alt="A pic of me!"
                    radius="50%"
                    h={250}
                    w={250}
                    fit="cover"
                    mt={20}
                />
                <Card
                    id="mobileIntroCard"
                    className={styles.mobileIntroCard}
                    radius="lg"
                    p='2px'
                >
                    <Text flex={1} m="lg" size="sm">{IntroText}</Text>
                </Card>
                <Group justify="center">
                    <Button size="sm" component="a" href="https://github.com/vcommero/" target="_blank"><FaGithub size="1.8em" /></Button>
                    <Button size="sm" component="a" href="https://www.linkedin.com/in/vincent-commero-83b9ba99/" target="_blank"><FaLinkedin size="1.8em" /></Button>
                </Group>
            </Stack>
        </>
    );
}
