module.exports = {
    user: {
        headless: false
    },
    reporter: [
        ['json', {  outputFile: 'test-results.json' }],
        ['html', { outputFolder: 'my-report' }]
    ],
    testDir: './e2e',
}