import type { AppModuleInitiator } from '@equinor/fusion-framework-app';
import { enableContext } from '@equinor/fusion-framework-module-context';
import { enableNavigation } from '@equinor/fusion-framework-module-navigation';
import { enableAgGrid } from '@equinor/fusion-framework-module-ag-grid';

import buildQuery from 'odata-query';

export const configure: AppModuleInitiator = (configurator, env) => {
    console.log("env", env)
    const { basename } = env.env;
    enableNavigation(configurator, basename);
    enableAgGrid(configurator);

    configurator.configureHttpClient("my-api", {
        baseUri: 'https://foo.bar',
        defaultScopes: ['foobar/.default']
    });

    /** print render environment arguments */
    console.log('configuring application', env);

    /** callback when configurations is created */
    configurator.onConfigured((config) => {
        console.log('application config created', config);
    });

    /** callback when the application modules has initialized */
    configurator.onInitialized((instance) => {
        console.log('application config initialized', instance);
    });

    // const { config: { environment: { endpoints } } } = env;

    // for (const [key, endpoint] in Object.entries(endpoints)) {
    //     const { baseUri, defaultScopes } = endpoint;
    //     configurator.configureHttpClient({ key, { baseUri, defaultScopes });
    // }

    enableContext(configurator, async (builder) => {
        builder.setContextType(['projectmaster']); // set contextType to match against
        builder.setContextParameterFn(({ search, type }) => {
            return buildQuery({
                search,
                filter: {
                    type: {
                        in: type,
                    },
                },
            });
        });
    });
};

export default configure;
