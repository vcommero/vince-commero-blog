"use client";

import {
    Burger,
    Button,
    Container,
    Drawer,
    Group,
    NavLink,
    Title,
    useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./BaseLayout.module.scss";
import { useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BaseLayoutProps {
    children: React.ReactNode;
}

const links = [
    { link: '/', label: 'Home' },
    { link: '/blogs', label: 'Blogs' },
];

export function BaseLayout({ children }: BaseLayoutProps) {
    const router = useRouter();

    const [opened, { open, close, toggle }] = useDisclosure();

    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
    };

    const isMobile = useMediaQuery('(max-width: 768px)');

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const headerLinks = links.map((link) => {
        const navFunction = () => {
            router.push(link.link);
            close();
        };
        return (
            <Button
                key={link.label}
                variant="subtle"
                size="lg"
                p="xs"
                color={
                    isMounted && computedColorScheme === "dark" ?
                        "gray" :
                        "rgba(0, 0, 0, 1)"
                }
                onClick={navFunction}
            >
                {link.label}
            </Button>
        );
    });

    const menuLinks = links.map((link) => {
        const navFunction = () => {
            router.push(link.link);
            close();
        };

        return (
            <NavLink key={link.label} href={`#${link.link}`} label={link.label} onClick={navFunction} />
        );
    });

    return (
        <>
            <header className={classes.header}>
                <Container size="xl" className={classes.inner}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                    <Title order={isMobile ? 3 : 1}>Vince Commero</Title>
                    <Group gap={"lg"} >
                        <Group gap={5} visibleFrom="xs" mx="2xl">
                            {headerLinks}
                        </Group>
                        <Button
                            size="sm"
                            color={
                                isMounted && computedColorScheme === "dark" ?
                                    "gray" :
                                    "dark"
                            }
                            onClick={toggleColorScheme}
                        >
                            {isMounted && (computedColorScheme === "dark" ?
                                <FaMoon /> :
                                <FaSun />
                            )}
                        </Button>
                    </Group>
                </Container>
                <Drawer opened={opened} onClose={close} >
                    {menuLinks}
                </Drawer>
            </header>
            <div style={{height: "56px"}} />
            <Container size="xl" >
                {children}
            </Container>
        </>
    );
}
