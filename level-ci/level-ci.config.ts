import type { Config } from "@level-ci/cli";
export default {
 organization: "volodymyr-kulyk-32-userway-org-podss",
 project: "selenium-java-project-1",
 token: process.env.LEVEL_CI_TOKEN,
 server:'https://staging.uw.ci.levelaccess.io/',
 reportPaths: ['./level-ci/level-ci-reports']
} satisfies Config; 