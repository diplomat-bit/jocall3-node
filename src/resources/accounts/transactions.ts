// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Transactions extends APIResource {
  /**
   * Retrieves a list of pending transactions that have not yet cleared for a
   * specific financial account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.listPending(
   *     'acc_chase_checking_4567',
   *   );
   * ```
   */
  listPending(
    accountId: string,
    query?: TransactionListPendingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  listPending(accountId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  listPending(
    accountId: string,
    query: TransactionListPendingParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.listPending(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/transactions/pending`, { query, ...options });
  }
}

export type TransactionListPendingResponse = unknown;

export interface TransactionListPendingParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Transactions {
  export {
    type TransactionListPendingResponse as TransactionListPendingResponse,
    type TransactionListPendingParams as TransactionListPendingParams,
  };
}
