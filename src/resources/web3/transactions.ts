// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Transactions extends APIResource {
  /**
   * Prepares and initiates a cryptocurrency transfer from a connected wallet to a
   * specified recipient address. Requires user confirmation (e.g., via wallet
   * signature).
   *
   * @example
   * ```ts
   * const response = await client.web3.transactions.initiate();
   * ```
   */
  initiate(body: TransactionInitiateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/web3/transactions/initiate', { body, ...options });
  }
}

export type TransactionInitiateResponse = unknown;

export interface TransactionInitiateParams {}

export declare namespace Transactions {
  export {
    type TransactionInitiateResponse as TransactionInitiateResponse,
    type TransactionInitiateParams as TransactionInitiateParams,
  };
}
