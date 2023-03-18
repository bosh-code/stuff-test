const path = require(`path`);

const pathAliases = {
    "@components": path.resolve(__dirname, "src/components"),
    "@enums": path.resolve(__dirname, "src/enums"),
    "@interfaces": path.resolve(__dirname, "src/interfaces"),
    "@models": path.resolve(__dirname, "src/models"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@services": path.resolve(__dirname, "src/services")
};

module.exports = {
    webpack: {
        alias: pathAliases
    },
    eslint: null,
    jest: {
        configure: (jestConfig, { env, paths, resolve, rootDir }) => {
            jestConfig.verbose = true;
            jestConfig.moduleNameMapper = pathAliases;
            return jestConfig;
        }
    }
};
