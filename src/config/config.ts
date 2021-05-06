export const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    env: process.env.NODE_ENV || 'development',
    web3_url: process.env.WEB3_PROVIDER_URI,
};
