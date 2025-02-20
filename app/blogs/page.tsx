import { Center, Divider, Stack, Title } from "@mantine/core";
import BlogThumbnail from "../../components/BlogThumbnail";

const blogsData = [
    { title: "Test Article", author: "Vince Commero", createdOn: "2024-12-05", updatedOn: "2025-01-05", description: "This is a test article that I made. This is the description of that test article, so I'm filling up this space with words... for testing." },
    { title: "Test Article Two: Electric Boogaloo!", author: "Vince Commero", createdOn: "2024-12-07", updatedOn: "2025-01-15", description: "This is another test article." }
];

export default function BlogsListPage() {
    const blogItems = blogsData.map((blog) => {
        return (
            <BlogThumbnail
                key={blog.title}
                title={blog.title}
                author={blog.author}
                description={blog.description}
                createdOn={blog.createdOn}
                updatedOn={blog.updatedOn}
            />
        );
    });

    return (
        <Center>
            <Stack align="center">
                <Title my="lg">Articles</Title>
                <Stack>
                    {blogItems}
                </Stack>
            </Stack>
        </Center>
    );
}