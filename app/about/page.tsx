import { Text, Card, Stack, Title, Group, Image, Center } from "@mantine/core";
import { FirebaseAdminService } from "../../lib/firebase-admin/firebase-admin-service";
import { notFound } from "next/navigation";
import Link from "next/link";

const firebaseService = new FirebaseAdminService();

export default async function AboutMePage() {
    const aboutMeObject = await firebaseService.getBlogsiteContent("aboutMe");
    if (!aboutMeObject) {
        return notFound();
    }
    const aboutMeContent = aboutMeObject.content.replaceAll(/(?<!\\)%NL%/g, '\n');

    return (
        <Card my="xl">
            {/* Desktop view */}
            <Stack gap="xl" visibleFrom="xs">
                <Group justify="center" ta="center">
                    <Title order={1}>{"I'm Vince Commero and welcome to my corner of the internet!"}</Title>
                </Group>
                <Group>
                    <Image
                        src="https://ik.imagekit.io/bhmwwut65/tr:w-450,h-450/BlogSiteAssets/20250503_150245_2.png?updatedAt=1747891885727"
                        alt="A pic of me!"
                        radius="lg"
                        h={350}
                        w={350}
                        fit="contain"
                        mx="3em"
                    />
                    <Text size="lg" mx="3em" my="2em" style={{ flex: 1, whiteSpace: 'pre-wrap' }}>{aboutMeContent}</Text>
                </Group>
                <Text size="lg">
                    {"Interested in working with me or getting to know me professionally? You can find a copy of my resume with my contact info here: "}
                    <Link href="/about/resume">Click me!</Link>
                </Text>
            </Stack>
            {/* Mobile view */}
            <Stack gap="xl" hiddenFrom="xs">
                <Group justify="center" ta="center">
                    <Title order={2}>{"I'm Vince Commero and welcome to my corner of the internet!"}</Title>
                </Group>
                <Text size="md" style={{ flex: 1, whiteSpace: 'pre-wrap' }}>{aboutMeContent}</Text>
                <Text size="md">
                    {"Interested in working with me or getting to know me professionally? You can find a copy of my resume with my contact info here: "}
                    <Link href="/about/resume">Click me!</Link>
                </Text>
            </Stack>
        </Card>
    );
}