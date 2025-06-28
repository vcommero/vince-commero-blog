import { Paper, Title, Text, Image, Container, List, Divider, ListItem, Center, Stack, Group } from '@mantine/core';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { MdOutlineCalendarToday, MdOutlineEditCalendar } from "react-icons/md";
import CodeblockWrapper from './CodeblockWrapper';
import ExpandableImage from './ExpandableImage';
import styles from "./BlogPost.module.scss";
import rehypeUnwrapImages from 'rehype-unwrap-images';

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
        code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                // Code blocks
                <CodeblockWrapper
                    codeContent={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    otherProps={props}
                />
            ) : (
                // Inline code snippets
                <code {...props} style={{
                    color: 'var(--mantine-color-text-code)',
                    backgroundColor: 'var(--mantine-color-text-code-bg)',
                    padding: '0.1em 0.2em',
                    borderRadius: '3px'
                }}>
                    {children}
                </code>
            );
        },
        img({ src, alt }: any) {
            return (
                <Center my="lg">
                    <ExpandableImage
                        src={src || ''}
                        alt={alt || ''}
                    />
                </Center>
            );
        },
        h1: ({ children }: any) => (
            <Title order={1} mb="xs">{children}</Title>
        ),
        h2: ({ children }: any) => (
            <Title order={2} mb="xs">{children}</Title>
        ),
        h3: ({ children }: any) => (
            <Title order={3} mb="xs">{children}</Title>
        ),
        p: ({ children }: any) => (
            <Text mb="lg" style={{whiteSpace: 'pre-wrap'}}>{children}</Text>
        ),
        a: ({ children, href }: any) => (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        ),
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
        <Container size="lg" my="xl" className={styles.markdownContent}>
            <Paper shadow="sm" radius="md">
                <div>
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
                    <ReactMarkdown components={components} rehypePlugins={[rehypeUnwrapImages]}>{processedContent}</ReactMarkdown>
                </div>
            </Paper>
        </Container>
    );
}