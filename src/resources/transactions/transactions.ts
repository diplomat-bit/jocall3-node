// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as InsightsAPI from './insights';
import {
  InsightRetrieveFutureFlowResponse,
  InsightRetrieveSpendingTrendsResponse,
  Insights,
} from './insights';
import * as RecurringAPI from './recurring';
import { Recurring, RecurringCreateParams, RecurringListResponse } from './recurring';

export class Transactions extends APIResource {
  recurring: RecurringAPI.Recurring = new RecurringAPI.Recurring(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);

  /**
   * Get Transaction Deep Metadata
   */
  retrieve(transactionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Transaction> {
    return this._client.get(`/transactions/${transactionId}`, options);
  }

  /**
   * Global Transaction Search & Filter
   */
  list(
    query?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TransactionListResponse>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Attach Manual Notes to Transaction
   */
  addNotes(
    transactionId: string,
    body: TransactionAddNotesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/transactions/${transactionId}/notes`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Override AI Categorization
   */
  categorize(
    transactionId: string,
    body: TransactionCategorizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Transaction> {
    return this._client.put(`/transactions/${transactionId}/categorize`, { body, ...options });
  }

  /**
   * Initiate Transaction Dispute
   */
  dispute(
    transactionId: string,
    body: TransactionDisputeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/transactions/${transactionId}/dispute`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Split Transaction Across Multiple Categories
   */
  split(
    transactionId: string,
    body: TransactionSplitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/transactions/${transactionId}/split`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TransactionListResponse {
  data: Array<Shared.Transaction>;

  total: number;

  nextOffset?: number;
}

export interface TransactionListParams {
  limit?: number;

  maxAmount?: number;

  minAmount?: number;

  offset?: number;

  type?: string;
}

export interface TransactionAddNotesParams {
  notes: string;
}

export interface TransactionCategorizeParams {
  category: string;

  applyToFuture?: boolean;
}

export interface TransactionDisputeParams {
  reason: 'fraudulent' | 'duplicate' | 'incorrect_amount' | 'service_not_rendered';

  /**
   * URIs to evidence
   */
  evidenceFiles?: Array<string>;
}

export interface TransactionSplitParams {
  splits: Array<TransactionSplitParams.Split>;
}

export namespace TransactionSplitParams {
  export interface Split {
    amount?: number;

    category?: string;
  }
}

Transactions.Recurring = Recurring;
Transactions.Insights = Insights;

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionAddNotesParams as TransactionAddNotesParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
    type TransactionDisputeParams as TransactionDisputeParams,
    type TransactionSplitParams as TransactionSplitParams,
  };

  export {
    Recurring as Recurring,
    type RecurringListResponse as RecurringListResponse,
    type RecurringCreateParams as RecurringCreateParams,
  };

  export {
    Insights as Insights,
    type InsightRetrieveFutureFlowResponse as InsightRetrieveFutureFlowResponse,
    type InsightRetrieveSpendingTrendsResponse as InsightRetrieveSpendingTrendsResponse,
  };
}
