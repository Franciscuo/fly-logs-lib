module.exports = {
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { pkgRoot: 'dist' }],
    [
      '@semantic-release/git',
      { assets: ['package.json', 'npm-shrinkwrap.json'] },
    ],
  ],
};
