import { Paper, Title, Text, Image, Container, List, Divider, ListItem, Center, Stack, Group } from '@mantine/core';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { MdOutlineCalendarToday, MdOutlineEditCalendar } from "react-icons/md";
import CodeblockWrapper from './CodeblockWrapper';

interface BlogPostProps {
    content: string;
    title: string;
    date?: string;
    updatedDate?: string;
}

export default function BlogPost({ content, title, date, updatedDate }: BlogPostProps) {
    const processedContent = content.replaceAll(/(?<!\\)%NL%/g, '\n');

    // Custom components for ReactMarkdown
    const components = {
        // Custom code block rendering with syntax highlighting
        code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <CodeblockWrapper
                    codeContent={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    otherProps={props}
                />
            ) : (
                <code {...props} style={{ backgroundColor: '#f1f3f5', padding: '0.2em 0.4em', borderRadius: '3px' }}>
                    {children}
                </code>
            );
        },
        // Custom image rendering using Next.js Image
        img({ src, alt }: any) {
            return (
                <Image
                    src={src || ''}
                    alt={alt || ''}
                    fit="cover"
                    my="lg"
                />
            );
        },
        // Custom heading styles using Mantine
        h1: ({ children }: any) => (
            <Title order={1} mb="xs">{children}</Title>
        ),
        h2: ({ children }: any) => (
            <Title order={2} mb="xs">{children}</Title>
        ),
        h3: ({ children }: any) => (
            <Title order={3} mb="xs">{children}</Title>
        ),
        // Custom paragraph styles
        p: ({ children }: any) => (
            <Text mb="lg">{children}</Text>
        ),
        // Custom link styles
        a: ({ children, href }: any) => (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        ),
        // Custom list styles
        ul: ({ children }: any) => (
            <List>{children}</List>
        ),
        ol: ({ children }: any) => (
            <List type="ordered">{children}</List>
        ),
        li: ({ children }: any) => (
            <ListItem>{children}</ListItem>
        ),
    };

    return (
        <Container size="lg" mt="lg">
            <Paper shadow="sm" radius="md">
                <article>
                    <Title order={1}>{title}</Title>
                    {date && (
                        <Group>
                            <MdOutlineCalendarToday />
                            <Text>
                                {format(parseISO(date), 'MMMM d, yyyy')}
                            </Text>
                        </Group>
                    )}
                    {updatedDate && (
                        <Group>
                            <MdOutlineEditCalendar />
                            <Text>
                                Last updated: {format(parseISO(updatedDate), 'MMMM d, yyyy')}
                            </Text>
                        </Group>
                    )}
                    <Divider size="md" my="lg" />
                    <ReactMarkdown components={components}>{processedContent}</ReactMarkdown>
                </article>
            </Paper>
        </Container>
    );
}