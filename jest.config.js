const config = {
    verbose: true,
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|lottie-react-native)"
    ],
    testEnvironment: 'jsdom'
};

module.exports = config;