module.exports = {
  roots: ['tests/', 'src/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!@mycrypto/ui/)']
};
