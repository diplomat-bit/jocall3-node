// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Transactions extends APIResource {
  /**
   * Get Historical Ledger Archive
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.listArchived(
   *     'accountId',
   *   );
   * ```
   */
  listArchived(
    accountId: string,
    query?: TransactionListArchivedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListArchivedResponse>;
  listArchived(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListArchivedResponse>;
  listArchived(
    accountId: string,
    query: TransactionListArchivedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListArchivedResponse> {
    if (isRequestOptions(query)) {
      return this.listArchived(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/transactions/archived`, { query, ...options });
  }

  /**
   * Get Pending Ledger Entries
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.listPending(
   *     'accountId',
   *   );
   * ```
   */
  listPending(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListPendingResponse> {
    return this._client.get(`/accounts/${accountId}/transactions/pending`, options);
  }
}

export interface TransactionListArchivedResponse {
  data: Array<Shared.Transaction>;

  total: number;

  nextOffset?: number;
}

export interface TransactionListPendingResponse {
  data: Array<Shared.Transaction>;

  total: number;

  nextOffset?: number;
}

export interface TransactionListArchivedParams {
  year?: number;
}

export declare namespace Transactions {
  export {
    type TransactionListArchivedResponse as TransactionListArchivedResponse,
    type TransactionListPendingResponse as TransactionListPendingResponse,
    type TransactionListArchivedParams as TransactionListArchivedParams,
  };
}
