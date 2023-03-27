export default () => {
    return ({
        /** override name from package.json */
        "appKey": "my-key",
        /** custom properties */
        "environment": {
            "foo": "bar"
        },
        /** custom endpoints */
        "endpoints": {
            "api": "https://foo.barz"
        }
        // "environment": {
        //     "endpoints": {
        //         "api": {
        //             "baseUri": "https://foo.barz",
        //             "defaultScopes": ["foobar/.default"]
        //         }
        //     }
        // }
    })
};