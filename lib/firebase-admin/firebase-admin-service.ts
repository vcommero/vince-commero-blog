import { FieldPath, Firestore } from "firebase-admin/firestore";
import { firestoreDB } from "./firebase-admin-config";

export class FirebaseAdminService {
    private firestoreDB: Firestore;
    
    constructor() {
        this.firestoreDB = firestoreDB;
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
    
    async getArticle(id: string): Promise<any | null> {
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
                } as any;
            }
            return null;
        } catch (error) {
            console.error('Error fetching article:', error);
            return null;
        }
    }
}
