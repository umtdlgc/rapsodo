module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    setupFilesAfterEnv: ['<rootDir>/tests/unit/config/test-utils.js'],
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['lcov'],
};
