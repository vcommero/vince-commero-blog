import { notFound } from "next/navigation";
import { FirebaseAdminService } from "../../../lib/firebase-admin/firebase-admin-service";
import ResumeComponent from "../../../components/ResumeComponent";
import { format } from "date-fns";

const firebaseService = new FirebaseAdminService();

export default async function ResumePage() {
    const resumeObject = await firebaseService.getBlogsiteContent("resume");
    if (!resumeObject) {
        return notFound();
    }

    return (
        <ResumeComponent
            content={resumeObject.content}
            updatedDate={resumeObject.updatedOn ? format(resumeObject.updatedOn.toDate(), "yyyy-MM-dd") : undefined}
        />
    );
}