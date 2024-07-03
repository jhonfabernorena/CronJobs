import { ConfigService } from '@nestjs/config';
export declare class ConfigurationService {
    private configService;
    constructor(configService: ConfigService);
    get(key: string): string;
}
