// src/types/api.types.ts

export interface HouseCallProCustomer {
    id: string;
    first_name: string;
    last_name: string;
    email?: string;
    mobile_number?: string;
    phone_number?: string;
    company?: string;
    address?: HouseCallProAddress;
    notifications_enabled: boolean;
    tags?: string[];
    lead_source?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProAddress {
    street: string;
    street_line_2?: string;
    city: string;
    state: string;
    zip: string;
    country?: string;
}

export interface HouseCallProJob {
    id: string;
    customer_id: string;
    employee_ids: string[];
    schedule: HouseCallProSchedule;
    invoice_id?: string;
    estimate_id?: string;
    job_status: string;
    job_type?: string;
    description?: string;
    notes?: string;
    tags?: string[];
    created_at: string;
    updated_at: string;
}

export interface HouseCallProSchedule {
    scheduled_start: string;
    scheduled_end?: string;
    arrival_window_minutes?: number;
    dispatch_id?: string;
    canceled_at?: string;
    completed_at?: string;
}

export interface HouseCallProEstimate {
    id: string;
    customer_id: string;
    job_id?: string;
    invoice_id?: string;
    estimate_number: string;
    status: string;
    total: number;
    subtotal: number;
    tax_total: number;
    description?: string;
    notes?: string;
    tags?: string[];
    created_at: string;
    updated_at: string;
    sent_at?: string;
    viewed_at?: string;
    accepted_at?: string;
    declined_at?: string;
}

export interface HouseCallProInvoice {
    id: string;
    customer_id: string;
    job_id?: string;
    estimate_id?: string;
    invoice_number: string;
    status: string;
    total: number;
    subtotal: number;
    tax_total: number;
    paid_total: number;
    balance: number;
    due_date?: string;
    paid_date?: string;
    sent_at?: string;
    viewed_at?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProEmployee {
    id: string;
    first_name: string;
    last_name: string;
    email?: string;
    phone?: string;
    mobile_phone?: string;
    role: string;
    permissions: string[];
    hourly_rate?: number;
    color?: string;
    avatar_url?: string;
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProLead {
    id: string;
    first_name: string;
    last_name: string;
    email?: string;
    phone?: string;
    company?: string;
    address?: HouseCallProAddress;
    lead_source?: string;
    lead_status: string;
    tags?: string[];
    notes?: string;
    assigned_employee_id?: string;
    converted_customer_id?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProTag {
    id: string;
    name: string;
    type: 'customer' | 'job' | 'estimate';
    color?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProWebhook {
    id: string;
    url: string;
    events: string[];
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProLineItem {
    id?: string;
    name: string;
    description?: string;
    quantity: number;
    unit_price: number;
    unit_cost?: number;
    total: number;
    tax_rate?: number;
    tax_amount?: number;
    material_id?: string;
}

export interface HouseCallProMaterial {
    id: string;
    name: string;
    description?: string;
    cost: number;
    price: number;
    quantity_on_hand?: number;
    category_id?: string;
    sku?: string;
    upc?: string;
    vendor?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProMaterialCategory {
    id: string;
    name: string;
    description?: string;
    parent_category_id?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProJobType {
    id: string;
    name: string;
    description?: string;
    default_duration_minutes?: number;
    color?: string;
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProLeadSource {
    id: string;
    name: string;
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProPayment {
    id: string;
    invoice_id: string;
    amount: number;
    payment_method: string;
    payment_type: string;
    transaction_id?: string;
    notes?: string;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProCompany {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: HouseCallProAddress;
    logo_url?: string;
    timezone: string;
    business_hours: HouseCallProBusinessHours;
    created_at: string;
    updated_at: string;
}

export interface HouseCallProBusinessHours {
    monday: HouseCallProTimeRange[];
    tuesday: HouseCallProTimeRange[];
    wednesday: HouseCallProTimeRange[];
    thursday: HouseCallProTimeRange[];
    friday: HouseCallProTimeRange[];
    saturday: HouseCallProTimeRange[];
    sunday: HouseCallProTimeRange[];
}

export interface HouseCallProTimeRange {
    start: string;
    end: string;
}

export interface HouseCallProApiResponse<T> {
    data: T;
    meta?: {
        page: number;
        per_page: number;
        total_pages: number;
        total_count: number;
    };
}

export interface HouseCallProError {
    code: string;
    message: string;
    details?: Record<string, string[]>;
}