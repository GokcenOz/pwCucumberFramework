module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "@exampleTag",
        formatOptions: {
            snippetInterface: "async-await"
        },
        use: {
            
            screenshot: 'only-on-failure', // automatically take screenshot on failure
          },
        paths: [
            "e2etests/tests/features/"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "e2etests/tests/steps/**/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        require: [
            "e2etests/tests/steps/**/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
    }
}