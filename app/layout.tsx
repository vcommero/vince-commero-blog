import "@mantine/core/styles.css";
import React from "react";
import {
    MantineProvider,
    ColorSchemeScript,
    mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import { BaseLayout } from "../components/layouts/BaseLayout";

export const metadata = {
    title: "Vince Commero",
    description: "Welcome to my corner of the internet!",
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider theme={theme}>
                    <BaseLayout>{children}</BaseLayout>
                </MantineProvider>
            </body>
        </html>
    );
}
