// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as InsightsAPI from './insights';
import { InsightGetTrendsResponse, Insights } from './insights';
import * as RecurringAPI from './recurring';
import { Recurring, RecurringListParams, RecurringListResponse } from './recurring';

export class Transactions extends APIResource {
  recurring: RecurringAPI.Recurring = new RecurringAPI.Recurring(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);

  /**
   * Retrieves granular information for a single transaction by its unique ID,
   * including AI categorization confidence, merchant details, and associated carbon
   * footprint.
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'txn_quantum-2024-07-21-A7B8C9',
   * );
   * ```
   */
  retrieve(
    transactionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionRetrieveResponse> {
    return this._client.get(`/transactions/${transactionId}`, options);
  }

  /**
   * Retrieves a paginated list of the user's transactions, with extensive options
   * for filtering by type, category, date range, amount, and intelligent AI-driven
   * sorting and search capabilities.
   *
   * @example
   * ```ts
   * const transactions = await client.transactions.list();
   * ```
   */
  list(query?: TransactionListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Allows the user to override or refine the AI's categorization for a transaction,
   * improving future AI accuracy and personal financial reporting.
   *
   * @example
   * ```ts
   * const response = await client.transactions.categorize(
   *   'txn_quantum-2024-07-21-A7B8C9',
   * );
   * ```
   */
  categorize(
    transactionId: string,
    body: TransactionCategorizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionCategorizeResponse> {
    return this._client.put(`/transactions/${transactionId}/categorize`, { body, ...options });
  }
}

export interface TransactionRetrieveResponse {
  /**
   * Geographic location details for a transaction.
   */
  location?: unknown;

  /**
   * Detailed information about a merchant associated with a transaction.
   */
  merchantDetails?: TransactionRetrieveResponse.MerchantDetails;
}

export namespace TransactionRetrieveResponse {
  /**
   * Detailed information about a merchant associated with a transaction.
   */
  export interface MerchantDetails {
    address?: unknown;
  }
}

export type TransactionListResponse = unknown;

export interface TransactionCategorizeResponse {
  /**
   * Geographic location details for a transaction.
   */
  location?: unknown;

  /**
   * Detailed information about a merchant associated with a transaction.
   */
  merchantDetails?: TransactionCategorizeResponse.MerchantDetails;
}

export namespace TransactionCategorizeResponse {
  /**
   * Detailed information about a merchant associated with a transaction.
   */
  export interface MerchantDetails {
    address?: unknown;
  }
}

export interface TransactionListParams {
  /**
   * Filter transactions by their AI-assigned or user-defined category.
   */
  category?: string;

  /**
   * Retrieve transactions up to this date (inclusive).
   */
  endDate?: string;

  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Filter for transactions with an amount less than or equal to this value.
   */
  maxAmount?: number;

  /**
   * Filter for transactions with an amount greater than or equal to this value.
   */
  minAmount?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Free-text search across transaction descriptions, merchants, and notes.
   */
  searchQuery?: string;

  /**
   * Retrieve transactions from this date (inclusive).
   */
  startDate?: string;

  /**
   * Filter transactions by type (e.g., income, expense, transfer).
   */
  type?: string;
}

export interface TransactionCategorizeParams {}

Transactions.Recurring = Recurring;
Transactions.Insights = Insights;

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCategorizeResponse as TransactionCategorizeResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
  };

  export {
    Recurring as Recurring,
    type RecurringListResponse as RecurringListResponse,
    type RecurringListParams as RecurringListParams,
  };

  export { Insights as Insights, type InsightGetTrendsResponse as InsightGetTrendsResponse };
}
