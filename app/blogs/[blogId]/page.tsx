import { notFound } from "next/navigation";
import BlogPost from "../../../components/BlogPost";
import { firestoreDB } from "../../utils/firebase-admin";
import { format } from "date-fns";
import { FieldPath } from "firebase-admin/firestore";

// Enable ISR with a revalidation period
export const revalidate = 300;

// Add dynamic configuration
export const dynamic = 'force-static';
export const dynamicParams = false;

interface BlogPageProps {
    params: Promise<{ blogId: string }>;
}

// Pre-render all articles at build time
export async function generateStaticParams() {
    const articles = await getAllArticleIds();
    console.log(`Pre-rendering ${articles.length} articles`);
    console.log(JSON.stringify(articles));
    return articles;
}

async function getAllArticleIds() {
    try {
        const articlesSnapshot = await firestoreDB.collection('articles')
            .where('published', '==', true)
            .get();
        return articlesSnapshot.docs.map(doc => ({
            blogId: doc.id
        }));
    } catch (error) {
        console.error('Error fetching article IDs:', error);
        return [];
    }
}

async function getArticle(id: string): Promise<any | null> {
    try {
        const documentSnapshot = await firestoreDB.collection('articles')
            .where('published', '==', true)
            .where(FieldPath.documentId(), "==", id)
            .get();

        if (!documentSnapshot.empty) {
            const doc = documentSnapshot.docs[0];
            return {
                id: doc.id,
                ...doc.data()
            } as any;
        }
        return null;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

export default async function BlogPage({ params }: BlogPageProps) {
    const blogId = await params.then((p) => p.blogId);
    const article = await getArticle(blogId);

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