require("dotenv").config({ path: ".env.deploy" });

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPO, DEPLOY_REF } =
  process.env;

module.exports = {
  apps: [],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      "post-deploy": "scp -Сr ./build/* kapitan4ever@158.160.60.236:/home/kapitan4ever/web-plus-pm2-deploy/frontend",
    },
  },
};
