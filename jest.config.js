module.exports = {
  roots: ['packages/common/src', 'packages/desktop/src', 'packages/server/src', 'packages/web/src'],
  setupFilesAfterEnv: ['./test/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/(?!@mycrypto/ui/)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  snapshotResolver: './test/snapshotResolver.js',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/__mocks__/fileMock.ts'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts?(x)', '!**/*.d.ts']
};
