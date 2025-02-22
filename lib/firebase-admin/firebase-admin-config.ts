import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin only once
const apps = getApps();

if (!apps.length) {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS_JSON) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT_CREDENTIALS_JSON environment variable is not set');
    }

    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS_JSON as string);

    initializeApp({
        credential: cert(serviceAccount)
    });
}

export const firestoreDB = getFirestore();
