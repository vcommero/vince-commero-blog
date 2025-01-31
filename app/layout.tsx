import "@mantine/core/styles.css";
import "./styles.css";
import React from "react";
import {
    MantineProvider,
    ColorSchemeScript,
    mantineHtmlProps,
} from "@mantine/core";
import { shadcnTheme } from "../theme";
import { BaseLayout } from "../components/layouts/BaseLayout";
import { shadcnCssVariableResolver } from "../cssVariableResolver";

export const metadata = {
    title: "Vince Commero",
    description: "Welcome to my corner of the internet!",
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript defaultColorScheme="auto" />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider theme={customTheme} defaultColorScheme="auto">
                    <BaseLayout>{children}</BaseLayout>
                </MantineProvider>
            </body>
        </html>
    );
}
