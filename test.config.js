module.exports = {
    user: {
        headless: false,
        baseURL: "https://playwright.dev"
    },
    reporter: [
        ['json', {  outputFile: 'test-results.json' }],
        ['html', { outputFolder: 'my-report' }]
    ],
    testDir: './e2e',
}