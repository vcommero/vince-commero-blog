"use client";

import {
    AppShell,
    Burger,
    Button,
    Container,
    Group,
    Title,
    UnstyledButton,
    useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./BaseLayout.module.css";
import { useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface BaseLayoutProps {
    children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
    const LAYOUT_MAXWIDTH = "75rem";

    const router = useRouter();

    const [opened, { toggle }] = useDisclosure();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light");

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
    };

    const navigateHome = () => {
        router.push("/");
        if (opened) toggle();
    };

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { desktop: true, mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Container size={LAYOUT_MAXWIDTH} h="100%">
                    <Group h="100%" px="md">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Group
                            justify="space-between"
                            ml={"0"}
                            style={{ flex: 1 }}
                        >
                            <Title order={1}>Vince Commero</Title>

                            <Group>
                                {/* This is the top nav links only visible on desktop. */}
                                <Group ml="xl" gap={12} visibleFrom="sm">
                                    <UnstyledButton
                                        className={classes.control}
                                        onClick={navigateHome}
                                    >
                                        Home
                                    </UnstyledButton>
                                    <UnstyledButton className={classes.control}>
                                        Blogs
                                    </UnstyledButton>
                                </Group>

                                <Button
                                    size="sm"
                                    color={
                                        computedColorScheme === "light"
                                            ? "dark"
                                            : "gray"
                                    }
                                    onClick={toggleColorScheme}
                                >
                                    {computedColorScheme === "light" ? (
                                        <FaSun />
                                    ) : (
                                        <FaMoon />
                                    )}
                                </Button>
                            </Group>
                        </Group>
                    </Group>
                </Container>
            </AppShell.Header>

            {/* This is the side nav only visible on mobile. */}
            <AppShell.Navbar py="md" px={4}>
                <UnstyledButton
                    className={classes.control}
                    onClick={navigateHome}
                >
                    Home
                </UnstyledButton>
                <UnstyledButton className={classes.control}>
                    Blogs
                </UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>
                <Container size={LAYOUT_MAXWIDTH}>{children}</Container>
            </AppShell.Main>
        </AppShell>
    );
}
