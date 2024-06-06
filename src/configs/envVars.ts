interface EnvVars {
  SLACK_BOT_TOKEN: string;
  SLACK_SIGNING_SECRET: string;
  GITHUB_WEBHOOK_SECRET: string;
  SLACK_CHANNEL_ID: string;
  PORT?: any;
  EXPRESS_PORT?: any;
}

const env: EnvVars = {
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN as string,
  SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET as string,
  GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET as string,
  SLACK_CHANNEL_ID: process.env.SLACK_CHANNEL_ID as string,
  PORT: process.env.PORT || 3002,
  EXPRESS_PORT: process.env.EXPRESS_PORT || 3004,
};

export default env;