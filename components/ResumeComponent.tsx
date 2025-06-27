import { Container, Group, Paper, Title, Text, Divider, Center, List, ListItem } from "@mantine/core";
import { MdOutlineEditCalendar } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import rehypeUnwrapImages from 'rehype-unwrap-images';
import ExpandableImage from "./ExpandableImage";
import Link from "next/link";
import { format, parseISO } from "date-fns";

interface ResumeComponentProps {
    content: string;
    updatedDate?: string;
}

export default function ResumeComponent({ content, updatedDate }: ResumeComponentProps) {
    const processedContent = content.replaceAll(/(?<!\\)%NL%/g, '\n');

    // Custom components for ReactMarkdown
    const components = {
        code({ node, inline, className, children, ...props }: any) {
            return (
                <code {...props} style={{
                    backgroundColor: 'var(--mantine-color-primary)',
                    color: '#f1f3f5',
                    padding: '0.2em 0.4em',
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
            <span><Text mb="lg">{children}</Text></span>
        ),
        a: ({ children, href }: any) => (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        ),
        ul: ({ children }: any) => (
            <List mb="md">{children}</List>
        ),
        ol: ({ children }: any) => (
            <List type="ordered" mb="md">{children}</List>
        ),
        li: ({ children }: any) => (
            <ListItem>{children}</ListItem>
        ),
    };

    return (
        <Container size="lg" mt="lg">
            <Paper shadow="sm" radius="md">
                <div style={{
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                    <Title order={1}>Resume</Title>
                    {updatedDate && (
                        <>
                            <Group>
                                <MdOutlineEditCalendar />
                                <Text>
                                    Last updated: {format(parseISO(updatedDate), 'MMMM d, yyyy')}
                                </Text>
                            </Group>
                            <Divider size="md" my="lg" />
                        </>
                    )}
                    <ReactMarkdown components={components} remarkPlugins={[rehypeUnwrapImages]}>{processedContent}</ReactMarkdown>
                </div>
            </Paper>
        </Container>
    );
}