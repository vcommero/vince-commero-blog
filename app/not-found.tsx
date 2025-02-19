import React from 'react';
import Link from 'next/link';
import { Box, Button, Container, Stack, Text } from '@mantine/core';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
    return (
        <Box
            style={{
                height: 'calc(100vh - 56px)',
                backgroundColor: 'var(--mantine-color-body)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}
        >
            <Container size="sm">
                <Stack align="center" gap="xl">
                    <Box style={{ position: 'relative' }}>
                        <Text
                            style={{
                                fontSize: '9rem',
                                fontWeight: 700,
                                color: 'var(--mantine-color-primary)',
                                opacity: 0.4,
                                lineHeight: 1,
                            }}
                        >
                            404
                        </Text>
                        <Text
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: 'var(--mantine-color-text)',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Page Not Found
                        </Text>
                    </Box>

                    <Text
                        style={{
                            color: 'var(--mantine-color-muted)',
                            fontSize: '1.125rem',
                            textAlign: 'center',
                            maxWidth: '32rem'
                        }}
                    >
                        {`Oops! It seems you've wandered into uncharted territory.
                        The page you're looking for doesn't exist or has been moved.`}
                    </Text>

                    <Button
                        component={Link}
                        href="/"
                        leftSection={<FaHome size={20} />}
                    >
                        Return Home
                    </Button>

                    <Stack align="center" gap={8} style={{ marginTop: '2rem' }}>
                        {[12, 8, 4].map((width, index) => (
                            <Box
                                key={index}
                                style={{
                                    height: '4px',
                                    width: `${width}rem`,
                                    backgroundColor: 'var(--mantine-color-primary)',
                                    borderRadius: '50rem',
                                    opacity: 0.8 - (index * 0.2)
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};
