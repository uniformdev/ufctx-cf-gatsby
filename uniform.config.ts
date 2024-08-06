import type { CLIConfiguration } from '@uniformdev/cli';

const config: CLIConfiguration = {
    serialization: {
        format: "yaml",
        mode: "mirror",
        directory: "./uniform-data",
        entitiesConfig: {
            asset: {},
            composition: {},
            category: {},
            component: {},
            componentPattern: {},
            contentType: {},
            entry: {},         
            entryPattern: {},
            dataType: {},
            signal: {},
            test: {},
            aggregate: {},
            enrichment: {},
            locale: {},
            quirk: {},
            projectMapDefinition: {},
            projectMapNode: {},
            redirect: {},
            workflow: {},
        }
    }
}
module.exports = config;
