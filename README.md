# n8n-nodes-housecallpro

This is an n8n community node that allows you to interact with the HouseCall Pro API in your n8n workflows.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following operations:

### Customers
- Create a new customer
- Get a customer by ID
- Get all customers
- Update a customer
- Delete a customer
- Search customers

### Employees
- Create a new employee
- Get an employee by ID
- Get all employees
- Update an employee
- Delete an employee

### Estimates
- Create a new estimate
- Get an estimate by ID
- Get all estimates
- Update an estimate
- Delete an estimate
- Send an estimate to customer
- Convert an estimate to a job

### Jobs
- Create a new job
- Get a job by ID
- Get all jobs
- Update a job
- Delete a job
- Cancel a job
- Complete a job

### Job Appointments
- Create a job appointment
- Get a job appointment
- Update a job appointment
- Delete a job appointment

### Job Invoices
- Create an invoice for a job
- Get a job invoice
- Update a job invoice
- Delete a job invoice

### Job Types
- Create a job type
- Get a job type
- Get all job types
- Update a job type
- Delete a job type

### Leads
- Create a new lead
- Get a lead by ID
- Get all leads
- Update a lead
- Delete a lead
- Convert a lead to a customer

### Lead Sources
- Create a lead source
- Get a lead source
- Get all lead sources
- Update a lead source
- Delete a lead source

### Materials
- Create a material
- Get a material
- Get all materials
- Update a material
- Delete a material

### Material Categories
- Create a material category
- Get a material category
- Get all material categories
- Update a material category
- Delete a material category

### Company
- Get company information
- Update company information

### Schedule
- Get schedule for specified date range

### Events
- Create an event
- Get an event
- Get all events
- Update an event
- Delete an event

### Tags
- Create a tag
- Get a tag
- Get all tags
- Update a tag
- Delete a tag
- Add tag to entity (customer, job, or estimate)
- Remove tag from entity

### Invoices
- Create a new invoice
- Get an invoice by ID
- Get all invoices
- Update an invoice
- Delete an invoice
- Send an invoice to customer
- Record a payment for an invoice

### Webhooks
- Create a webhook
- Get a webhook
- Get all webhooks
- Update a webhook
- Delete a webhook

## Credentials

To use this node, you'll need:
1. A HouseCall Pro account on a MAX plan (API access is only available on MAX plans)
2. An API key generated from your HouseCall Pro account

To create an API key:
1. Log into your HouseCall Pro account
2. Go to My Apps in the top right corner
3. Find and open the API app
4. Generate a new API key
5. Copy the key and add it to your n8n credentials

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [HouseCall Pro API documentation](https://docs.housecallpro.com/)

## Version History

### 1.0.0
- Initial release
- Support for all major HouseCall Pro API endpoints
- Full CRUD operations for all resources

## License

[MIT](https://github.com/your-username/n8n-nodes-housecallpro/blob/master/LICENSE.md)