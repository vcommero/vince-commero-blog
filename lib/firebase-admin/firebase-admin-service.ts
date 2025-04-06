import { FieldPath, Firestore, Timestamp } from "firebase-admin/firestore";
import { firestoreDB } from "./firebase-admin-config";

export type BlogArticle = {
    id: string;
    title: string;
    description: string;
    content?: string;
    createdOn: Timestamp;
    updatedOn?: Timestamp;
}

export class FirebaseAdminService {
    private firestoreDB: Firestore;

    constructor() {
        this.firestoreDB = firestoreDB;
    }

    async getArticleThumbnails() {
        try {
            const articlesSnapshot = await this.firestoreDB.collection('articles')
                .select('title', 'description', 'createdOn')
                .where('published', '==', true)
                .get();
            return articlesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as BlogArticle));
        } catch (error) {
            console.error('Error fetching article thumbnails:', error);
            return [];
        }
    }

    async getAllArticleIds() {
        try {
            const articlesSnapshot = await this.firestoreDB.collection('articles')
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

    async getArticle(id: string): Promise<BlogArticle | null> {
        try {
            const documentSnapshot = await this.firestoreDB.collection('articles')
                .where('published', '==', true)
                .where(FieldPath.documentId(), "==", id)
                .get();

            if (!documentSnapshot.empty) {
                const doc = documentSnapshot.docs[0];
                return {
                    id: doc.id,
                    ...doc.data()
                } as BlogArticle;
            }
            return null;
        } catch (error) {
            console.error('Error fetching article:', error);
            return null;
        }
    }

    async getBlogsiteContent(id: string): Promise<any | null> {
        try {
            const documentSnapshot = await this.firestoreDB.collection('blogsiteContent')
                .where(FieldPath.documentId(), "==", id)
                .get();

            if (!documentSnapshot.empty) {
                const doc = documentSnapshot.docs[0];
                return {
                    id: doc.id,
                    ...doc.data()
                };
            }
            return null;
        } catch (error) {
            console.error('Error fetching blogsite content:', error);
            return null;
        }
    }
}
