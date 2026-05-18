import type { Config } from "@level-ci/cli";
export default {
 organization: "volodymyr-kulyk-40-userway-org-lando",
 project: "selenium-java-project",
 token: process.env.LEVEL_CI_TOKEN,
 server: 'https://dev.uw.ci.levelaccess.io/',
 reportPaths: ['./level-ci/level-ci-reports']
} satisfies Config;