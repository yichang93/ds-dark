const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#5CE5D6'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};