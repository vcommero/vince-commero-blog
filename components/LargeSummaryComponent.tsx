import { Card, Stack, Image, Group, Button, Text, Center, Box } from "@mantine/core";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function LargeSummaryComponent() {

    return (
        <Card
            radius="md"
            style={{
                width: '30rem'
            }}
        >
            <Stack>
                <Center>
                    <Image
                        src="https://ik.imagekit.io/bhmwwut65/tr:h-450,w-450/BlogSiteAssets/20220913_110422_3.png?updatedAt=1737759521666"
                        alt="A pic of me!"
                        radius="lg"
                        h={250}
                        w={250}
                        fit="contain"
                    />
                </Center>
                <Stack gap="2px" align="center">
                    <Text size="2xl" fw={800}>Vince Commero</Text>
                    <Box
                        style={{
                            height: '6px',
                            width: '4rem',
                            backgroundColor: 'var(--mantine-color-primary)',
                            borderRadius: '50rem',
                            //opacity: 0.8 - (index * 0.2)
                        }}
                    />
                    <Text>
                        Software Engineer, Tech Enthusiast, & Curious Mind
                    </Text>
                </Stack>
                <Group justify="center">
                    <Button size="sm" component={Link} href="https://github.com/vcommero/" target="_blank"><FaGithub size="1.8em" /></Button>
                    <Button size="sm" component={Link} href="https://www.linkedin.com/in/vincent-commero-83b9ba99/" target="_blank"><FaLinkedin size="1.8em" /></Button>
                </Group>
            </Stack>
        </Card>
    );
}