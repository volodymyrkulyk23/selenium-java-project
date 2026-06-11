import type { Config } from "@level-ci/cli";
export default {
 organization: "volodymyr-kulyk-1-levelaccess-com-clkuq",
 project: "selenium-java-project",
 token: process.env.LEVEL_CI_TOKEN,
 reportPaths: ['./level-ci/level-ci-reports']
} satisfies Config;