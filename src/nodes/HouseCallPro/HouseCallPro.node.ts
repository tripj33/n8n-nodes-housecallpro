import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    ILoadOptionsFunctions,
    INodePropertyOptions,
    NodeConnectionType,
    IHttpRequestMethods,
    IHttpRequestOptions,
} from 'n8n-workflow';

export class HouseCallPro implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'HouseCall Pro',
        name: 'houseCallPro',
        icon: 'file:housecallpro.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with HouseCall Pro API',
        defaults: {
            name: 'HouseCall Pro',
        },
        inputs: ['main'] as NodeConnectionType[],
        outputs: ['main'] as NodeConnectionType[],
        credentials: [
            {
                name: 'houseCallProApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Customer',
                        value: 'customer',
                    },
                    {
                        name: 'Employee',
                        value: 'employee',
                    },
                    {
                        name: 'Estimate',
                        value: 'estimate',
                    },
                    {
                        name: 'Job',
                        value: 'job',
                    },
                    {
                        name: 'Job Appointment',
                        value: 'jobAppointment',
                    },
                    {
                        name: 'Job Invoice',
                        value: 'jobInvoice',
                    },
                    {
                        name: 'Job Type',
                        value: 'jobType',
                    },
                    {
                        name: 'Lead',
                        value: 'lead',
                    },
                    {
                        name: 'Lead Source',
                        value: 'leadSource',
                    },
                    {
                        name: 'Material',
                        value: 'material',
                    },
                    {
                        name: 'Material Category',
                        value: 'materialCategory',
                    },
                    {
                        name: 'Company',
                        value: 'company',
                    },
                    {
                        name: 'Schedule',
                        value: 'schedule',
                    },
                    {
                        name: 'Event',
                        value: 'event',
                    },
                    {
                        name: 'Tag',
                        value: 'tag',
                    },
                    {
                        name: 'Invoice',
                        value: 'invoice',
                    },
                    {
                        name: 'Webhook',
                        value: 'webhook',
                    },
                    {
                        name: 'Application',
                        value: 'application',
                    },
                ],
                default: 'customer',
            },
            // Customer Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['customer'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new customer',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a customer by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all customers',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a customer',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a customer',
                    },
                    {
                        name: 'Search',
                        value: 'search',
                        description: 'Search for customers',
                    },
                ],
                default: 'get',
            },
            // Employee Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['employee'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new employee',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get an employee by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all employees',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update an employee',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete an employee',
                    },
                ],
                default: 'get',
            },
            // Job Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['job'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new job',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a job by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all jobs',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a job',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a job',
                    },
                    {
                        name: 'Cancel',
                        value: 'cancel',
                        description: 'Cancel a job',
                    },
                    {
                        name: 'Complete',
                        value: 'complete',
                        description: 'Complete a job',
                    },
                ],
                default: 'get',
            },
            // Estimate Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['estimate'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new estimate',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get an estimate by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all estimates',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update an estimate',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete an estimate',
                    },
                    {
                        name: 'Send',
                        value: 'send',
                        description: 'Send an estimate to customer',
                    },
                    {
                        name: 'Convert to Job',
                        value: 'convertToJob',
                        description: 'Convert an estimate to a job',
                    },
                ],
                default: 'get',
            },
            // Invoice Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['invoice'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new invoice',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get an invoice by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all invoices',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update an invoice',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete an invoice',
                    },
                    {
                        name: 'Send',
                        value: 'send',
                        description: 'Send an invoice to customer',
                    },
                    {
                        name: 'Record Payment',
                        value: 'recordPayment',
                        description: 'Record a payment for an invoice',
                    },
                ],
                default: 'get',
            },
            // Lead Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['lead'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new lead',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a lead by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all leads',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a lead',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a lead',
                    },
                    {
                        name: 'Convert to Customer',
                        value: 'convertToCustomer',
                        description: 'Convert a lead to a customer',
                    },
                ],
                default: 'get',
            },
            // Tag Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['tag'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new tag',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a tag by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all tags',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a tag',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a tag',
                    },
                    {
                        name: 'Add to Entity',
                        value: 'addToEntity',
                        description: 'Add a tag to a customer, job, or estimate',
                    },
                    {
                        name: 'Remove from Entity',
                        value: 'removeFromEntity',
                        description: 'Remove a tag from a customer, job, or estimate',
                    },
                ],
                default: 'get',
            },
            // Webhook Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['webhook'],
                    },
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new webhook',
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a webhook by ID',
                    },
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all webhooks',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a webhook',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a webhook',
                    },
                ],
                default: 'get',
            },
            // Fields for different operations
            // Customer fields
            {
                displayName: 'Customer ID',
                name: 'customerId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['get', 'update', 'delete'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the customer',
            },
            {
                displayName: 'First Name',
                name: 'firstName',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer first name',
            },
            {
                displayName: 'Last Name',
                name: 'lastName',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer last name',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer email address',
            },
            {
                displayName: 'Phone',
                name: 'phone',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer phone number',
            },
            {
                displayName: 'Address',
                name: 'address',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer address',
            },
            {
                displayName: 'City',
                name: 'city',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer city',
            },
            {
                displayName: 'State',
                name: 'state',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer state',
            },
            {
                displayName: 'Zip Code',
                name: 'zip',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Customer zip code',
            },
            {
                displayName: 'Search Query',
                name: 'searchQuery',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['customer'],
                        operation: ['search'],
                    },
                },
                default: '',
                required: true,
                description: 'Search term to find customers (name, email, phone, etc.)',
            },
            // Job fields
            {
                displayName: 'Job ID',
                name: 'jobId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['job'],
                        operation: ['get', 'update', 'delete', 'cancel', 'complete'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the job',
            },
            {
                displayName: 'Customer ID',
                name: 'customerId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['job'],
                        operation: ['create'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the customer for this job',
            },
            {
                displayName: 'Scheduled Date',
                name: 'scheduledDate',
                type: 'dateTime',
                displayOptions: {
                    show: {
                        resource: ['job'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Scheduled date and time for the job',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['job', 'estimate'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Description of the job or estimate',
            },
            {
                displayName: 'Assigned Technician ID',
                name: 'technicianId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['job'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'ID of the assigned technician',
            },
            // Estimate fields
            {
                displayName: 'Estimate ID',
                name: 'estimateId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['estimate'],
                        operation: ['get', 'update', 'delete', 'send', 'convertToJob'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the estimate',
            },
            {
                displayName: 'Customer ID',
                name: 'customerId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['estimate'],
                        operation: ['create'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the customer for this estimate',
            },
            // Invoice fields
            {
                displayName: 'Invoice ID',
                name: 'invoiceId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['invoice'],
                        operation: ['get', 'update', 'delete', 'send', 'recordPayment'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the invoice',
            },
            {
                displayName: 'Job ID',
                name: 'jobId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['invoice'],
                        operation: ['create'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the job for this invoice',
            },
            {
                displayName: 'Amount',
                name: 'amount',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['invoice'],
                        operation: ['create', 'update', 'recordPayment'],
                    },
                },
                default: 0,
                description: 'Invoice amount',
            },
            {
                displayName: 'Due Date',
                name: 'dueDate',
                type: 'dateTime',
                displayOptions: {
                    show: {
                        resource: ['invoice'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Invoice due date',
            },
            // Tag fields
            {
                displayName: 'Tag ID',
                name: 'tagId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['tag'],
                        operation: ['get', 'update', 'delete', 'addToEntity', 'removeFromEntity'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the tag',
            },
            {
                displayName: 'Tag Name',
                name: 'tagName',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['tag'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                description: 'Name of the tag',
            },
            {
                displayName: 'Entity Type',
                name: 'entityType',
                type: 'options',
                displayOptions: {
                    show: {
                        resource: ['tag'],
                        operation: ['addToEntity', 'removeFromEntity'],
                    },
                },
                options: [
                    {
                        name: 'Customer',
                        value: 'customer',
                    },
                    {
                        name: 'Job',
                        value: 'job',
                    },
                    {
                        name: 'Estimate',
                        value: 'estimate',
                    },
                ],
                default: 'customer',
                description: 'Type of entity to add/remove tag from',
            },
            {
                displayName: 'Entity ID',
                name: 'entityId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['tag'],
                        operation: ['addToEntity', 'removeFromEntity'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the entity to add/remove tag from',
            },
            // Webhook fields
            {
                displayName: 'Webhook ID',
                name: 'webhookId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['webhook'],
                        operation: ['get', 'update', 'delete'],
                    },
                },
                default: '',
                required: true,
                description: 'ID of the webhook',
            },
            {
                displayName: 'URL',
                name: 'url',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['webhook'],
                        operation: ['create', 'update'],
                    },
                },
                default: '',
                required: true,
                description: 'Webhook URL to receive events',
            },
            {
                displayName: 'Events',
                name: 'events',
                type: 'multiOptions',
                displayOptions: {
                    show: {
                        resource: ['webhook'],
                        operation: ['create', 'update'],
                    },
                },
                options: [
                    {
                        name: 'Customer Created',
                        value: 'customer.created',
                    },
                    {
                        name: 'Customer Updated',
                        value: 'customer.updated',
                    },
                    {
                        name: 'Job Created',
                        value: 'job.created',
                    },
                    {
                        name: 'Job Updated',
                        value: 'job.updated',
                    },
                    {
                        name: 'Job Completed',
                        value: 'job.completed',
                    },
                    {
                        name: 'Invoice Created',
                        value: 'invoice.created',
                    },
                    {
                        name: 'Invoice Paid',
                        value: 'invoice.paid',
                    },
                    {
                        name: 'Estimate Created',
                        value: 'estimate.created',
                    },
                    {
                        name: 'Estimate Sent',
                        value: 'estimate.sent',
                    },
                    {
                        name: 'Estimate Accepted',
                        value: 'estimate.accepted',
                    },
                ],
                default: [],
                description: 'Events to subscribe to',
            },
            // Pagination options
            {
                displayName: 'Return All',
                name: 'returnAll',
                type: 'boolean',
                displayOptions: {
                    show: {
                        operation: ['getAll'],
                    },
                },
                default: false,
                description: 'Whether to return all results or only up to a given limit',
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        operation: ['getAll'],
                        returnAll: [false],
                    },
                },
                typeOptions: {
                    minValue: 1,
                    maxValue: 100,
                },
                default: 50,
                description: 'Max number of results to return',
            },
            // Additional fields can be added for other resources and operations
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        const credentials = await this.getCredentials('houseCallProApi');
        
        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;

        let endpoint = '';
        let method = 'GET';
        let body: any = {};
        let qs: any = {};

        for (let i = 0; i < items.length; i++) {
            try {
                switch (resource) {
                    case 'customer':
                        if (operation === 'create') {
                            endpoint = '/customers';
                            method = 'POST';
                            body = {
                                first_name: this.getNodeParameter('firstName', i) as string,
                                last_name: this.getNodeParameter('lastName', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                mobile_number: this.getNodeParameter('phone', i) as string,
                                address: {
                                    street: this.getNodeParameter('address', i) as string,
                                    city: this.getNodeParameter('city', i) as string,
                                    state: this.getNodeParameter('state', i) as string,
                                    zip: this.getNodeParameter('zip', i) as string,
                                },
                            };
                        } else if (operation === 'get') {
                            endpoint = `/customers/${this.getNodeParameter('customerId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/customers';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/customers/${this.getNodeParameter('customerId', i)}`;
                            method = 'PUT';
                            body = {
                                first_name: this.getNodeParameter('firstName', i) as string,
                                last_name: this.getNodeParameter('lastName', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                mobile_number: this.getNodeParameter('phone', i) as string,
                                address: {
                                    street: this.getNodeParameter('address', i) as string,
                                    city: this.getNodeParameter('city', i) as string,
                                    state: this.getNodeParameter('state', i) as string,
                                    zip: this.getNodeParameter('zip', i) as string,
                                },
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/customers/${this.getNodeParameter('customerId', i)}`;
                            method = 'DELETE';
                        } else if (operation === 'search') {
                            endpoint = '/customers/search';
                            method = 'GET';
                            qs.q = this.getNodeParameter('searchQuery', i) as string;
                        }
                        break;
                    
                    case 'job':
                        if (operation === 'create') {
                            endpoint = '/jobs';
                            method = 'POST';
                            body = {
                                customer_id: this.getNodeParameter('customerId', i) as string,
                                schedule: {
                                    scheduled_start: this.getNodeParameter('scheduledDate', i) as string,
                                },
                                description: this.getNodeParameter('description', i) as string,
                                assigned_employee_ids: [this.getNodeParameter('technicianId', i) as string],
                            };
                        } else if (operation === 'get') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/jobs';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}`;
                            method = 'PUT';
                            body = {
                                schedule: {
                                    scheduled_start: this.getNodeParameter('scheduledDate', i) as string,
                                },
                                description: this.getNodeParameter('description', i) as string,
                                assigned_employee_ids: [this.getNodeParameter('technicianId', i) as string],
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}`;
                            method = 'DELETE';
                        } else if (operation === 'cancel') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}/cancel`;
                            method = 'POST';
                        } else if (operation === 'complete') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}/complete`;
                            method = 'POST';
                        }
                        break;
                    
                    case 'estimate':
                        if (operation === 'create') {
                            endpoint = '/estimates';
                            method = 'POST';
                            body = {
                                customer_id: this.getNodeParameter('customerId', i) as string,
                                description: this.getNodeParameter('description', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/estimates/${this.getNodeParameter('estimateId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/estimates';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/estimates/${this.getNodeParameter('estimateId', i)}`;
                            method = 'PUT';
                            body = {
                                description: this.getNodeParameter('description', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/estimates/${this.getNodeParameter('estimateId', i)}`;
                            method = 'DELETE';
                        } else if (operation === 'send') {
                            endpoint = `/estimates/${this.getNodeParameter('estimateId', i)}/send`;
                            method = 'POST';
                        } else if (operation === 'convertToJob') {
                            endpoint = `/estimates/${this.getNodeParameter('estimateId', i)}/convert_to_job`;
                            method = 'POST';
                        }
                        break;
                    
                    case 'invoice':
                        if (operation === 'create') {
                            endpoint = '/invoices';
                            method = 'POST';
                            body = {
                                job_id: this.getNodeParameter('jobId', i) as string,
                                total: this.getNodeParameter('amount', i) as number,
                                due_date: this.getNodeParameter('dueDate', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/invoices/${this.getNodeParameter('invoiceId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/invoices';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/invoices/${this.getNodeParameter('invoiceId', i)}`;
                            method = 'PUT';
                            body = {
                                total: this.getNodeParameter('amount', i) as number,
                                due_date: this.getNodeParameter('dueDate', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/invoices/${this.getNodeParameter('invoiceId', i)}`;
                            method = 'DELETE';
                        } else if (operation === 'send') {
                            endpoint = `/invoices/${this.getNodeParameter('invoiceId', i)}/send`;
                            method = 'POST';
                        } else if (operation === 'recordPayment') {
                            endpoint = `/invoices/${this.getNodeParameter('invoiceId', i)}/payments`;
                            method = 'POST';
                            body = {
                                amount: this.getNodeParameter('amount', i) as number,
                            };
                        }
                        break;
                    
                    case 'lead':
                        if (operation === 'create') {
                            endpoint = '/leads';
                            method = 'POST';
                            body = {
                                first_name: this.getNodeParameter('firstName', i) as string,
                                last_name: this.getNodeParameter('lastName', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                phone: this.getNodeParameter('phone', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/leads/${this.getNodeParameter('leadId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/leads';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/leads/${this.getNodeParameter('leadId', i)}`;
                            method = 'PUT';
                            body = {
                                first_name: this.getNodeParameter('firstName', i) as string,
                                last_name: this.getNodeParameter('lastName', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                phone: this.getNodeParameter('phone', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/leads/${this.getNodeParameter('leadId', i)}`;
                            method = 'DELETE';
                        } else if (operation === 'convertToCustomer') {
                            endpoint = `/leads/${this.getNodeParameter('leadId', i)}/convert`;
                            method = 'POST';
                        }
                        break;
                    
                    case 'tag':
                        if (operation === 'create') {
                            endpoint = '/tags';
                            method = 'POST';
                            body = {
                                name: this.getNodeParameter('tagName', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/tags/${this.getNodeParameter('tagId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/tags';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/tags/${this.getNodeParameter('tagId', i)}`;
                            method = 'PUT';
                            body = {
                                name: this.getNodeParameter('tagName', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/tags/${this.getNodeParameter('tagId', i)}`;
                            method = 'DELETE';
                        } else if (operation === 'addToEntity') {
                            const entityType = this.getNodeParameter('entityType', i) as string;
                            const entityId = this.getNodeParameter('entityId', i) as string;
                            endpoint = `/${entityType}s/${entityId}/tags`;
                            method = 'POST';
                            body = {
                                tag_id: this.getNodeParameter('tagId', i) as string,
                            };
                        } else if (operation === 'removeFromEntity') {
                            const entityType = this.getNodeParameter('entityType', i) as string;
                            const entityId = this.getNodeParameter('entityId', i) as string;
                            const tagId = this.getNodeParameter('tagId', i) as string;
                            endpoint = `/${entityType}s/${entityId}/tags/${tagId}`;
                            method = 'DELETE';
                        }
                        break;
                    
                    case 'webhook':
                        if (operation === 'create') {
                            endpoint = '/webhooks';
                            method = 'POST';
                            body = {
                                url: this.getNodeParameter('url', i) as string,
                                events: this.getNodeParameter('events', i) as string[],
                            };
                        } else if (operation === 'get') {
                            endpoint = `/webhooks/${this.getNodeParameter('webhookId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/webhooks';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/webhooks/${this.getNodeParameter('webhookId', i)}`;
                            method = 'PUT';
                            body = {
                                url: this.getNodeParameter('url', i) as string,
                                events: this.getNodeParameter('events', i) as string[],
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/webhooks/${this.getNodeParameter('webhookId', i)}`;
                            method = 'DELETE';
                        }
                        break;
                    
                    case 'employee':
                        if (operation === 'create') {
                            endpoint = '/employees';
                            method = 'POST';
                            body = {
                                first_name: this.getNodeParameter('firstName', i) as string,
                                last_name: this.getNodeParameter('lastName', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                role: this.getNodeParameter('role', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/employees/${this.getNodeParameter('employeeId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/employees';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/employees/${this.getNodeParameter('employeeId', i)}`;
                            method = 'PUT';
                            body = {
                                first_name: this.getNodeParameter('firstName', i) as string,
                                last_name: this.getNodeParameter('lastName', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                role: this.getNodeParameter('role', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/employees/${this.getNodeParameter('employeeId', i)}`;
                            method = 'DELETE';
                        }
                        break;
                    
                    case 'schedule':
                        if (operation === 'get') {
                            endpoint = '/schedule';
                            method = 'GET';
                            qs.start_date = this.getNodeParameter('startDate', i) as string;
                            qs.end_date = this.getNodeParameter('endDate', i) as string;
                            if (this.getNodeParameter('employeeId', i)) {
                                qs.employee_id = this.getNodeParameter('employeeId', i) as string;
                            }
                        }
                        break;
                    
                    case 'jobAppointment':
                        if (operation === 'create') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}/appointments`;
                            method = 'POST';
                            body = {
                                scheduled_start: this.getNodeParameter('scheduledStart', i) as string,
                                scheduled_end: this.getNodeParameter('scheduledEnd', i) as string,
                                assigned_employee_ids: this.getNodeParameter('assignedEmployeeIds', i) as string[],
                            };
                        } else if (operation === 'get') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}/appointments/${this.getNodeParameter('appointmentId', i)}`;
                            method = 'GET';
                        } else if (operation === 'update') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}/appointments/${this.getNodeParameter('appointmentId', i)}`;
                            method = 'PUT';
                            body = {
                                scheduled_start: this.getNodeParameter('scheduledStart', i) as string,
                                scheduled_end: this.getNodeParameter('scheduledEnd', i) as string,
                                assigned_employee_ids: this.getNodeParameter('assignedEmployeeIds', i) as string[],
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/jobs/${this.getNodeParameter('jobId', i)}/appointments/${this.getNodeParameter('appointmentId', i)}`;
                            method = 'DELETE';
                        }
                        break;
                    
                    case 'material':
                        if (operation === 'create') {
                            endpoint = '/materials';
                            method = 'POST';
                            body = {
                                name: this.getNodeParameter('name', i) as string,
                                description: this.getNodeParameter('description', i) as string,
                                cost: this.getNodeParameter('cost', i) as number,
                                price: this.getNodeParameter('price', i) as number,
                                category_id: this.getNodeParameter('categoryId', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/materials/${this.getNodeParameter('materialId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/materials';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/materials/${this.getNodeParameter('materialId', i)}`;
                            method = 'PUT';
                            body = {
                                name: this.getNodeParameter('name', i) as string,
                                description: this.getNodeParameter('description', i) as string,
                                cost: this.getNodeParameter('cost', i) as number,
                                price: this.getNodeParameter('price', i) as number,
                                category_id: this.getNodeParameter('categoryId', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/materials/${this.getNodeParameter('materialId', i)}`;
                            method = 'DELETE';
                        }
                        break;
                    
                    case 'materialCategory':
                        if (operation === 'create') {
                            endpoint = '/material_categories';
                            method = 'POST';
                            body = {
                                name: this.getNodeParameter('name', i) as string,
                            };
                        } else if (operation === 'get') {
                            endpoint = `/material_categories/${this.getNodeParameter('categoryId', i)}`;
                            method = 'GET';
                        } else if (operation === 'getAll') {
                            endpoint = '/material_categories';
                            method = 'GET';
                            const returnAll = this.getNodeParameter('returnAll', i) as boolean;
                            if (!returnAll) {
                                qs.page_size = this.getNodeParameter('limit', i) as number;
                            }
                        } else if (operation === 'update') {
                            endpoint = `/material_categories/${this.getNodeParameter('categoryId', i)}`;
                            method = 'PUT';
                            body = {
                                name: this.getNodeParameter('name', i) as string,
                            };
                        } else if (operation === 'delete') {
                            endpoint = `/material_categories/${this.getNodeParameter('categoryId', i)}`;
                            method = 'DELETE';
                        }
                        break;
                    
                    case 'company':
                        if (operation === 'get') {
                            endpoint = '/company';
                            method = 'GET';
                        } else if (operation === 'update') {
                            endpoint = '/company';
                            method = 'PUT';
                            body = {
                                name: this.getNodeParameter('name', i) as string,
                                email: this.getNodeParameter('email', i) as string,
                                phone: this.getNodeParameter('phone', i) as string,
                                address: {
                                    street: this.getNodeParameter('street', i) as string,
                                    city: this.getNodeParameter('city', i) as string,
                                    state: this.getNodeParameter('state', i) as string,
                                    zip: this.getNodeParameter('zip', i) as string,
                                },
                            };
                        }
                        break;
                }

                const options: IHttpRequestOptions = {
                    method: method as IHttpRequestMethods,
                    headers: {
                        'Authorization': `${credentials.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                    body: method !== 'GET' ? body : undefined,
                    qs,
                    url: `https://api.housecallpro.com${endpoint}`,
                    json: true,
                };

                const responseData = await this.helpers.request(options);
                
                if (Array.isArray(responseData)) {
                    for (const item of responseData) {
                        returnData.push({ json: item });
                    }
                } else {
                    returnData.push({ json: responseData });
                }
                    
            } catch (error) {
                if (this.continueOnFail()) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    returnData.push({ json: { error: errorMessage } });
                    continue;
                }
                throw error;
            }
        }
        
        return [this.helpers.returnJsonArray(returnData)];
    }
}
