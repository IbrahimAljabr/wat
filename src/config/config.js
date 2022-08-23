const { BASE_URL, CORS_ORIGIN, NODE_ENV, PORT } = process.env;

const config = {
  baseUrl: BASE_URL,
  corsOrigin: CORS_ORIGIN || "*",
  nodeEnv: NODE_ENV,
  port: Number.parseInt(PORT || "3000")
};

module.exports = config;
