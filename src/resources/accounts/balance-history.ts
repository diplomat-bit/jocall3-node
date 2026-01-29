// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class BalanceHistory extends APIResource {
  /**
   * Get Historical Balance Snapshots
   *
   * @example
   * ```ts
   * const balanceHistory =
   *   await client.accounts.balanceHistory.retrieve(
   *     'accountId',
   *   );
   * ```
   */
  retrieve(
    accountId: string,
    query?: BalanceHistoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceHistoryRetrieveResponse>;
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<BalanceHistoryRetrieveResponse>;
  retrieve(
    accountId: string,
    query: BalanceHistoryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceHistoryRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/balance-history`, { query, ...options });
  }
}

export interface BalanceHistoryRetrieveResponse {
  history?: Array<BalanceHistoryRetrieveResponse.History>;
}

export namespace BalanceHistoryRetrieveResponse {
  export interface History {
    balance?: number;

    timestamp?: string;
  }
}

export interface BalanceHistoryRetrieveParams {
  period?: '1d' | '7d' | '30d' | '1y' | 'all';
}

export declare namespace BalanceHistory {
  export {
    type BalanceHistoryRetrieveResponse as BalanceHistoryRetrieveResponse,
    type BalanceHistoryRetrieveParams as BalanceHistoryRetrieveParams,
  };
}
