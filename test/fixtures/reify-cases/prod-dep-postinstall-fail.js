// generated from test/fixtures/prod-dep-postinstall-fail
module.exports = t => ({
  "package.json": JSON.stringify({
    "name": "@isaacs/testing-prod-dep-postinstall-fail",
    "version": "1.0.0",
    "description": "a prod dependency that fails to install",
    "license": "ISC",
    "dependencies": {
      "@isaacs/testing-fail-postinstall": "^1.0.0"
    }
  })
})
