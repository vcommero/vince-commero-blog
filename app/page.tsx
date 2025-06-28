import { BackgroundImage, Center, Divider, Group, Stack } from "@mantine/core";
import GreetingComponent from "../components/GreetingComponent";
import BlogThumbnail from "../components/BlogThumbnail";
import { BlogArticle, FirebaseAdminService } from "../lib/firebase-admin/firebase-admin-service";
import { format } from "date-fns";
import LargeSummaryComponent from "../components/LargeSummaryComponent";

// Enable ISR with a revalidation period of 30 mins
export const revalidate = 1800;

const firebaseService = new FirebaseAdminService();

export default async function HomePage() {
    const articleThumbnailData = await firebaseService.getArticleThumbnails();
    const blogItems = articleThumbnailData
    .sort((a: BlogArticle, b: BlogArticle) => {
        if (!a.createdOn || !b.createdOn) {
            return !b.createdOn ? 1 : -1;
        }
        return b.createdOn.seconds - a.createdOn.seconds;
    })
    .map((blog) => {
        return (
            <BlogThumbnail
                key={blog.title}
                id={blog.id}
                title={blog.title}
                description={blog.description}
                createdOn={format(blog.createdOn.toDate(), "yyyy-MM-dd")}
            />
        );
    });

    return (
        <div>
            <BackgroundImage
                visibleFrom="xs"
                src="https://ik.imagekit.io/bhmwwut65/BlogSiteAssets/20240704_151724.png?updatedAt=1738733811307&tr=w-4032%2Ch-1779%2Cfo-custom%2Ccm-extract"
                mb="sm"
                h={300}
                p="xl"
                display="flex"
                style={{ alignItems: "center" }}
                my="xl"
                radius="md"
            >
                <Center h="100%">
                    <GreetingComponent />
                </Center>
            </BackgroundImage>
            <Stack hiddenFrom="xs" >
                <GreetingComponent />
            </Stack>
            <Divider hiddenFrom="xs" size="xl" m="lg" />
            <Group gap="lg" align="start" justify="space-between">
                <Group visibleFrom="xs">
                    <LargeSummaryComponent />
                </Group>
                <Stack>
                    {blogItems}
                </Stack>
            </Group>
        </div>
    );
}
