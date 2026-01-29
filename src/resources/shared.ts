// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Address {
  city: string;

  country: string;

  street: string;

  state?: string;

  zip?: string;
}

export interface Transaction {
  id: string;

  amount: number;

  currency: string;

  date: string;

  description: string;

  category?: string;

  notes?: string;
}
