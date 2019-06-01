module.exports = {
  roots: ['tests/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(tsx?|jsx?)$': 'babel-jest'
  },
  setupFiles: ['./jest.setup.js']
};
