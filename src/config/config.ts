export const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    env: process.env.NODE_ENV || 'development',
    web3_url: process.env.WEB3_PROVIDER_URI,
    redis_url: process.env.REDIS_URL || 'redis://localhost:6379',
    redis_key_prefix: process.env.NODE_ENV === 'test' ? 'test:' : '',
    rate_bypass: process.env.RATE_BYPASS_TOKEN,
};
