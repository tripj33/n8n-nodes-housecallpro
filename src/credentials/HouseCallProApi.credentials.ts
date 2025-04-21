import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class HouseCallProApi implements ICredentialType {
    name = 'houseCallProApi';
    displayName = 'HouseCall Pro API';
    documentationUrl = 'https://docs.housecallpro.com';
    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
            description: 'Your HouseCall Pro API key',
        },
    ];
}