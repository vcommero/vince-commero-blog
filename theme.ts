import { createTheme } from "@mantine/core";
import type { CSSVariablesResolver, MantineColorsTuple } from "@mantine/core";

export const CONTAINER_SIZES: Record<string, string> = {
    xxs: "200px",
    xs: "300px",
    sm: "400px",
    md: "500px",
    lg: "600px",
    xl: "1400px",
    xxl: "1600px",
};

const colorPalette: Record<string, MantineColorsTuple> = {
    forest: [
        '#F5F7F4', // 0: Lightest - Light Sage (surface)
        '#E8F0E7', // 1: Hover state
        '#E2E8E1', // 2: Borders
        '#8FA98F', // 3: Secondary (Sage)
        '#5C715A', // 4: Muted text
        '#3B7A34', // 5: Focus/Hover primary
        '#2D5A27', // 6: Primary
        '#1C3618', // 7: Dark text
        '#162913', // 8: Darker variant
        '#0F1D0D', // 9: Darkest
    ],
    gold: [
        '#FDF8F3',
        '#FAF1E7',
        '#F7EADB',
        '#F4E3CF',
        '#F1DCC3',
        '#EED5B7',
        '#D4A373', // 6: Gold accent color
        '#BC9367',
        '#A5825B',
        '#8D714F',
    ],
    darkBlue: [
        '#748CAB', // lightest blue
        '#6A80A0',
        '#5F7496',
        '#53678C',
        '#48597C',
        '#3E5C76',
        '#2C4A66',
        '#1D2D44',
        '#14212F',
        '#0D1321' // darkest blue
    ],
    royalBlue: [
        '#E9EDF2', // lightest
        '#D4DEE9',
        '#B9C9DB',
        '#9EB3CD',
        '#83A0BF',
        '#748CAB', // lighter blue
        '#5D7A9D',
        '#46678F',
        '#3E5C76', // medium blue-gray
        '#1D2D44'  // darkest
    ],
};

export const customCSSResolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--mantine-color-primary': theme.colors.forest[6],
        '--mantine-color-primary-hover': theme.colors.forest[5],
        '--mantine-color-border': theme.colors.forest[2],
        '--mantine-color-text': theme.colors.forest[7],
        '--mantine-color-muted': theme.colors.forest[4],
        '--mantine-color-body': theme.colors.forest[0],
    },
    light: {
        '--mantine-color-primary': theme.colors.forest[6],
        '--mantine-color-primary-hover': theme.colors.forest[5],
        '--mantine-color-border': theme.colors.forest[2],
        '--mantine-color-text': theme.colors.forest[7],
        '--mantine-color-muted': theme.colors.forest[4],
        '--mantine-color-body': theme.colors.forest[1],
        '--mantine-color-card-bg': theme.colors.forest[0],
        '--mantine-color-card-hover': theme.colors.forest[3],
        '--mantine-color-text-code': theme.colors.forest[6],
        '--mantine-color-text-code-bg': theme.colors.forest[1]
    },
    dark: {
        '--mantine-color-primary': theme.colors.darkBlue[2],
        '--mantine-color-primary-hover': theme.colors.darkBlue[4],
        '--mantine-color-border': theme.colors.darkBlue[6],
        '--mantine-color-text': theme.colors.royalBlue[0],
        '--mantine-color-muted': theme.colors.royalBlue[3],
        '--mantine-color-body': theme.colors.darkBlue[9],
        '--mantine-color-card-bg': theme.colors.royalBlue[9],
        '--mantine-color-card-hover': theme.colors.darkBlue[6],
        '--mantine-color-text-code': theme.colors.royalBlue[0],
        '--mantine-color-text-code-bg': theme.colors.royalBlue[8]
    },
});

export const customTheme = createTheme({
    colors: colorPalette,
    primaryColor: 'forest',
    primaryShade: { light: 6, dark: 5 },

    fontFamily: 'Verdana, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',

    fontSizes: {
        '2xs': '12px',
        xs: '14px',
        sm: '16px',
        md: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '60px'
    },
    spacing: {
        '3xs': '4px',
        '2xs': '8px',
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
    },
    components: {
        Container: {
            defaultProps: {
                sizes: CONTAINER_SIZES
            },
        },
        Paper: {
            defaultProps: {
                p: 'md',
                shadow: 'xl',
                radius: 'md',
                withBorder: true,
                bg: 'var(--mantine-color-card-bg)',
            },
        },
        Card: {
            defaultProps: {
                p: 'xl',
                shadow: 'xl',
                radius: 'var(--mantine-radius-default)',
                withBorder: true,
                bg: 'var(--mantine-color-card-bg)',
            },
            styles: {
                root: {
                    border: '1px solid var(--mantine-color-border)'
                },
            },
        },
        Select: {
            defaultProps: {
                checkIconPosition: 'right',
            },
        },
        Button: {
            defaultProps: {
                color: 'var(--mantine-color-primary)',
            },
            styles: {
                root: {
                    '&:hover': {
                        backgroundColor: 'var(--mantine-color-primary-hover)',
                    },
                },
                outline: {
                    borderColor: 'var(--mantine-color-primary)',
                    color: 'var(--mantine-color-primary)',
                    '&:hover': {
                        backgroundColor: 'var(--mantine-color-body)',
                    },
                },
            },
        },
        Text: {
            defaultProps: {
                color: 'var(--mantine-color-text)',
            },
            styles: {
                root: {
                    '&[dataMuted]': {
                        color: 'var(--mantine-color-muted)',
                    },
                },
            },
        },
        Title: {
            styles: {
                root: {
                    color: 'var(--mantine-color-text)',
                },
            },
        },
        Input: {
            styles: {
                input: {
                    borderColor: 'var(--mantine-color-border)',
                    '&:focus': {
                        borderColor: 'var(--mantine-color-primary)',
                    },
                },
            },
        },
        Checkbox: {
            styles: {
                input: {
                    '&:checked': {
                        backgroundColor: 'var(--mantine-color-primary)',
                        borderColor: 'var(--mantine-color-primary)',
                    },
                },
            },
        },
        Progress: {
            defaultProps: {
                color: 'var(--mantine-color-primary)',
            },
            styles: {
                root: {
                    backgroundColor: 'var(--mantine-color-border)',
                },
            },
        },
    },
});
