import { BackgroundImage, Center, Divider, Group, Stack } from "@mantine/core";
import IntroComponent from "../components/IntroComponent";
import BlogThumbnail from "../components/BlogThumbnail";
import { parse } from "date-fns";

const blogsData = [
    { title: "Test Article", author: "Vince Commero", createdOn: "2024-12-05", updatedOn: "2025-01-05", description: "This is a test article that I made. This is the description of that test article, so I'm filling up this space with words... for testing." },
    { title: "Test Article Two: Electric Boogaloo!", author: "Vince Commero", createdOn: "2024-12-07", updatedOn: "2025-01-15", description: "This is another test article." }
];

export default function HomePage() {

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
        <div>
            <BackgroundImage
                visibleFrom="xs"
                src="https://ik.imagekit.io/bhmwwut65/BlogSiteAssets/20240704_151724.png?updatedAt=1738733811307&tr=w-4032%2Ch-1779%2Cfo-custom%2Ccm-extract"
                mb="sm"
                h={500}
                p="xl"
                display="flex"
                style={{ alignItems: "center" }}
            >
                <Center h="100%">
                    <IntroComponent />
                </Center>
            </BackgroundImage>
            <Stack hiddenFrom="xs" >
                <IntroComponent />
            </Stack>
            <Divider hiddenFrom="xs" size="xl" m="lg" />
            <Stack>
                {blogItems}
            </Stack>
        </div>
    );
}
