import { BackgroundImage, Center, Divider, Group, Stack } from "@mantine/core";
import IntroComponent from "../components/IntroComponent";
import BlogThumbnail from "../components/BlogThumbnail";
import { FirebaseAdminService } from "../lib/firebase-admin/firebase-admin-service";
import { format } from "date-fns";

// Enable ISR with a revalidation period of 30 mins
export const revalidate = 1800;

// Add dynamic configuration
export const dynamic = "force-static";
export const dynamicParams = false;

const firebaseService = new FirebaseAdminService();

export default async function HomePage() {
    const articleThumbnailData = await firebaseService.getArticleThumbnails();
    const blogItems = articleThumbnailData.map((blog) => {
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
                h={500}
                p="xl"
                display="flex"
                style={{ alignItems: "center" }}
                my="xl"
                radius="md"
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
