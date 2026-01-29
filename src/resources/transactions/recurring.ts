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
  list(query?: RecurringListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: RecurringListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/transactions/recurring', { query, ...options });
  }
}

export type RecurringListResponse = unknown;

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
