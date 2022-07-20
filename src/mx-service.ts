import { Configuration, MxPlatformApi } from 'mx-platform-node';
import config from './config';


export class MxService {
    private readonly logTag: string = 'mx.MxService';
    private client: MxPlatformApi;

    constructor() {
        const configuration = new Configuration({
            username: config.MxClientId,
            password: config.MxApiKey,

            basePath: config.MxBaseUrl,

            baseOptions: {
                headers: {
                    Accept: 'application/vnd.mx.api.v1+json',
                }
            }
        });

        this.client = new MxPlatformApi(configuration);

    }

    async createWidgetUrl(userId: string, data: any) {
         return await this.client.requestConnectWidgetURL(userId, data);
    }

}
