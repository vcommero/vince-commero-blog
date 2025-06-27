import { FieldPath, Firestore, Timestamp } from "firebase-admin/firestore";
import { firestoreDB } from "./firebase-admin-config";
import { isProduction } from "../environment";

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
    private isProduction: Boolean;

    constructor() {
        this.firestoreDB = firestoreDB;
        this.isProduction = isProduction();
    }

    async getArticleThumbnails() {
        try {
            let firestoreQuery = this.firestoreDB.collection('articles')
                .select('title', 'description', 'createdOn');
            if (this.isProduction) {
                firestoreQuery = firestoreQuery.where('published', '==', true);
            }
            const articlesSnapshot = await firestoreQuery.get();
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
            let firestoreQuery = this.firestoreDB.collection('articles').select(); // Gets only the document reference data (including ids)
            if (this.isProduction) {
                firestoreQuery = firestoreQuery.where('published', '==', true);
            }
            const articlesSnapshot = await firestoreQuery.get();
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
            let firestoreQuery = this.firestoreDB.collection('articles')
                .where(FieldPath.documentId(), "==", id);
            if (this.isProduction) {
                firestoreQuery = firestoreQuery.where('published', '==', true);
            }
            const documentSnapshot = await firestoreQuery
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
