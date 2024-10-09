module.exports = {
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { npmPublish: false, tarballDir: 'dist' }],
    ['@semantic-release/github', { assets: 'dist/*.tgz' }],
  ],
};
