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
import AnimatedGridLines from "../AnimatedLinesBackground";

interface BaseLayoutProps {
    children: React.ReactNode;
}

const links = [
    { link: '/', label: 'Home' },
    { link: '/blogs', label: 'Blogs' },
    { link: '/about', label: 'About'}
];

export function BaseLayout({ children }: BaseLayoutProps) {
    const router = useRouter();

    const [opened, { open, close, toggle }] = useDisclosure();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme();

    const isMobile = useMediaQuery('(max-width: 768px)');

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
                <Container size="1600px" className={classes.inner}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                    <Title order={isMobile ? 3 : 1}>Vince Commero</Title>
                    <Group gap={"lg"} >
                        <Group gap={5} visibleFrom="xs" mx="2xl">
                            {headerLinks}
                        </Group>
                        <Button
                            size="sm"
                            color="dark"
                            onClick={toggleColorScheme}
                            darkHidden
                        >
                            <FaSun />
                        </Button>
                        <Button
                            size="sm"
                            color="gray"
                            onClick={toggleColorScheme}
                            lightHidden
                        >
                            <FaMoon />
                        </Button>
                    </Group>
                </Container>
                <Drawer opened={opened} onClose={close} >
                    {menuLinks}
                </Drawer>
            </header>
            <div style={{ height: "56px", zIndex: -9999 }} />
            <AnimatedGridLines
                speedModifier={1}
                colorRange={computedColorScheme == 'dark' ?
                    {
                        hueMin: 180,
                        hueMax: 240,
                        saturation: 75,
                        lightness: 55
                    } :
                    {
                        hueMin: 85,
                        hueMax: 160,
                        saturation: 75,
                        lightness: 25
                    }}
            />
            <Container size="1600px" >
                {children}
            </Container>
        </>
    );
}
