import type { Config } from "@level-ci/cli";
export default {
 organization: "volodymyr-kulyk-32-userway-org-podss",
 project: "welfare-project-ca-6723",
 token: process.env.LEVEL_CI_TOKEN,
 server:'https://staging.uw.ci.levelaccess.io/',
 override: {
    "overall-scope-check": {
      targetBranch: "main",
      retention: "short",
      scope: "overall",
    },
  },
 reportPaths: ['./level-ci/level-ci-reports']
} satisfies Config; 