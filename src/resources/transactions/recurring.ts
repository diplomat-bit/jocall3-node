// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Recurring extends APIResource {
  /**
   * Retrieves a list of all detected or user-defined recurring transactions, useful
   * for budget tracking and subscription management.
   *
   * @example
   * ```ts
   * const recurrings =
   *   await client.transactions.recurring.list();
   * ```
   */
  list(query?: RecurringListParams, options?: Core.RequestOptions): Core.APIPromise<RecurringListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RecurringListResponse>;
  list(
    query: RecurringListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecurringListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/transactions/recurring', { query, ...options });
  }
}

export interface RecurringListResponse {
  data: Array<RecurringListResponse.Data>;

  limit: number;

  offset: number;

  total: number;

  nextOffset?: number;
}

export namespace RecurringListResponse {
  export interface Data {
    id?: string;

    aiConfidenceScore?: number;

    amount?: number;

    category?: string;

    currency?: string;

    description?: string;

    frequency?: string;

    lastPaidDate?: string;

    linkedAccountId?: string;

    nextDueDate?: string;

    status?: string;
  }
}

export interface RecurringListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Recurring {
  export {
    type RecurringListResponse as RecurringListResponse,
    type RecurringListParams as RecurringListParams,
  };
}
