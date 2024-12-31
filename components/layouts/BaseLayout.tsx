"use client";

import {
    AppShell,
    Burger,
    Button,
    Group,
    UnstyledButton,
    useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./BaseLayout.module.css";
import { useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";

interface BaseLayoutProps {
    children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
    const [opened, { toggle }] = useDisclosure();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light");

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
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
                <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <span>Vince Commero</span>

                        {/* This is the top nav links only visible on desktop. */}
                        <Group ml="xl" gap={12} visibleFrom="sm">
                            <UnstyledButton className={classes.control}>
                                Home
                            </UnstyledButton>
                            <UnstyledButton className={classes.control}>
                                Blog
                            </UnstyledButton>
                            <UnstyledButton className={classes.control}>
                                Contacts
                            </UnstyledButton>
                            <UnstyledButton className={classes.control}>
                                Support
                            </UnstyledButton>
                        </Group>

                        <Button size="sm" onClick={toggleColorScheme}>
                            {computedColorScheme === "light" ? (
                                <FaSun />
                            ) : (
                                <FaMoon />
                            )}
                        </Button>
                    </Group>
                </Group>
            </AppShell.Header>

            {/* This is the side nav only visible on mobile. */}
            <AppShell.Navbar py="md" px={4}>
                <UnstyledButton className={classes.control}>
                    Home
                </UnstyledButton>
                <UnstyledButton className={classes.control}>
                    Blog
                </UnstyledButton>
                <UnstyledButton className={classes.control}>
                    Contacts
                </UnstyledButton>
                <UnstyledButton className={classes.control}>
                    Support
                </UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
