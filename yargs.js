//Yargs = makes parsing CLInputs easier compared to argv
const yargs = require('yargs');
const path = require('path') // alternate import, imports the whole package in var path
console.log(path.resolve("yargs.js"))
console.log(yargs.argv)
const options = yargs
    .usage(
        'Usage: get-postman -- --env <optional> --postmanVersion <optional> --platform <optional> --location <optional>'
    )
    .options({
        env: {
            alias: 'e',
            description: 'Test Environment',
            type: 'string',
            default: process.env.TEST_ENVIRONMENT || 'stage',
            choices: ['beta', 'stage', 'prod', 'canary'],
        },
        postmanVersion: {
            alias: 'pv',
            description: 'Postman App Version',
            default: process.env.VERSION,
            type: 'string',
        },
        platform: {
            alias: 'p',
            description: 'OS Platform',
            type: 'string',
            default: process.platform,
            choices: ['darwin', 'linux', 'windows64', 'windows32'],
        },
        location: {
            alias: 'l',
            description: 'Target location to download the application',
            default: Path.resolve(process.cwd()),
            type: 'string',
        },
        enterprise: {
            alias: 'ent',
            description: 'Run for enterprise',
            type: 'boolean',
            default: false,
        },
    })
    .help()
    .version()
    .alias('v', 'version').argv;

console.log('enterprise:', options.enterprise);