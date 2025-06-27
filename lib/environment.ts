// Just helpers for getting the current environment.
const environments = [
    'develop',
    'production'
];

export function getEnvironment(): String {
    const environment = process.env.REACT_APP_ENVIRONMENT && environments.includes(process.env.REACT_APP_ENVIRONMENT.toLowerCase()) ?
        process.env.REACT_APP_ENVIRONMENT.toLowerCase() :
        undefined;
    return environment ?? 'production'; // Want to default to prod environment rather than the less strict develop environment.
}

export function isProduction(): Boolean { return getEnvironment() === 'production' }
export function isDevelop(): Boolean { return getEnvironment() === 'develop' }