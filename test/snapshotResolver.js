module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace('src/', '../../test/__snapshots__/') + snapshotExtension;
  },

  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace('../../test/__snapshots__/', 'src/')
      .slice(0, -snapshotExtension.length);
  },

  testPathForConsistencyCheck: 'src/component/example.js'
};
