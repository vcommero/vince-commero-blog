"use client";

import { MantineProvider } from '@mantine/core';
import { customCSSResolver, customTheme } from '../theme';

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {

    return (
        <MantineProvider theme={customTheme} cssVariablesResolver={customCSSResolver} defaultColorScheme="auto">
            {children}
        </MantineProvider>
    );
}