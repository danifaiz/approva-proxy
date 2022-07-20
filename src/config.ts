const developmentConfig = {
    MxApiKey: process.env.MX_API_KEY ?? '',
    MxClientId: process.env.MX_CLIENT_ID ?? '',
    MxBaseUrl: process.env.MX_BASE_URL ?? ''
}

const productionConfig = {
    MxApiKey: process.env.PROD_MX_API_KEY ?? '',
    MxClientId: process.env.PROD_MX_CLIENT_ID ?? '',
    MxBaseUrl: process.env.PROD_MX_BASE_URL ?? ''
}

export default process.env.NODE_ENV === 'dev' ? developmentConfig : productionConfig;
