import type { Config } from "@level-ci/cli";
export default {
 organization: "volodymyr-kulyk-40-userway-org-lando",
 project: "welfare-project-ca-6723",
 token: process.env.LEVEL_CI_TOKEN,
 server:'https://dev.uw.ci.levelaccess.io/',
 override: {
    "test-branch": {
      targetBranch: "main",
      retention: "long",
      scope: "overall",
    },
  },
 reportPaths: ['./level-ci/level-ci-reports']
} satisfies Config; 