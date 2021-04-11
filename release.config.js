module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/sharpmonky/github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
}
