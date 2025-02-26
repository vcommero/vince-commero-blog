import { Center, Stack, Title } from "@mantine/core";
import BlogThumbnail from "../../components/BlogThumbnail";
import { FirebaseAdminService } from "../../lib/firebase-admin/firebase-admin-service";
import { format } from "date-fns";

// Enable ISR with a revalidation period of 30 mins
export const revalidate = 1800;

// Add dynamic configuration
export const dynamic = "force-static";
export const dynamicParams = false;

const firebaseService = new FirebaseAdminService();

export default async function BlogsListPage() {
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