# Gatsby Starter for Contentful + Uniform

## Pre-requisites
1. Account with Uniform with team admin permissions.
2. Npm token provided by the Uniform team.
3. Developer account with Contentful.
4. Install Uniform app into your Contentful space.

## Getting started
1. Set NPM_TOKEN environment variable with the value provided by Uniform team:
    ```bash
    export set NPM_TOKEN=....
    ```
2. Run `npm install`
3. Set your environment variable credentials in `.env` (see `.env.EXAMPLE`):
    ```bash
    CONTENTFUL_SPACE_ID=""
    CONTENTFUL_ACCESS_TOKEN=""
    CONTENTFUL_MANAGEMENT_TOKEN=""
    // Uniform connection details
    UNIFORM_API_KEY=""
    UNIFORM_PROJECT_ID=""
    // API key for the Amplitude plugin
    GATSBY_AMPLITUDE_API_KEY=""
    ```

4. Run `npm run develop` to build and run locally in dev mode.
5. Run `npm run build` and `npm run serve` to run production build and serve locally.