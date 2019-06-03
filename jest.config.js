module.exports = {
  roots: ['src/'],
  setupFilesAfterEnv: ['./jest/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/(?!@mycrypto/ui/)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  snapshotResolver: './jest/snapshotResolver.js',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/jest/__mocks__/fileMock.ts'
  }
};
