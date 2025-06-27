import { notFound } from "next/navigation";
import BlogPost from "../../../components/BlogPost";
import { format } from "date-fns";
import { FirebaseAdminService } from "../../../lib/firebase-admin/firebase-admin-service";

const firebaseService = new FirebaseAdminService();

interface BlogPageProps {
    params: Promise<{ blogId: string }>;
}

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
            content={article.content || ''}
            title={article.title}
            date={article.createdOn ? format(article.createdOn.toDate(), "yyyy-MM-dd") : undefined}
            updatedDate={article.updatedOn ? format(article.updatedOn.toDate(), "yyyy-MM-dd") : undefined}
        />
    );
}