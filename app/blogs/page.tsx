import { Center, Stack, Title } from "@mantine/core";
import BlogThumbnail from "../../components/BlogThumbnail";
import { BlogArticle, FirebaseAdminService } from "../../lib/firebase-admin/firebase-admin-service";
import { format } from "date-fns";

const firebaseService = new FirebaseAdminService();

export default async function BlogsListPage() {
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