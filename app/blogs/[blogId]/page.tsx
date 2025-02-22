import { notFound } from "next/navigation";
import BlogPost from "../../../components/BlogPost";
import { format } from "date-fns";
import { FirebaseAdminService } from "../../../lib/firebase-admin/firebase-admin-service";

// Enable ISR with a revalidation period
export const revalidate = 300;

// Add dynamic configuration
export const dynamic = "force-static";
export const dynamicParams = false;

interface BlogPageProps {
    params: Promise<{ blogId: string }>;
}

const firebaseService = new FirebaseAdminService();

// Pre-render all articles at build time
export async function generateStaticParams() {
    const articles = await firebaseService.getAllArticleIds();
    console.log(`Pre-rendering ${articles.length} articles`);
    console.log(JSON.stringify(articles));
    return articles;
}



// BlogPage component
export default async function BlogPage({ params }: BlogPageProps) {
    const blogId = (await params).blogId;
    const article = await firebaseService.getArticle(blogId);

    if (!article) {
        return notFound();
    }

    return (
        <BlogPost
            content={article.content}
            title={article.title}
            date={format(article.createdOn.toDate(), "yyyy-MM-dd")}
            updatedDate={format(article.updatedOn.toDate(), "yyyy-MM-dd")}
        />
    );
}