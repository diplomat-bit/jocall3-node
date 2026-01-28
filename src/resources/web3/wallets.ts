// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Wallets extends APIResource {
  /**
   * Initiates the process to securely connect a new cryptocurrency wallet to the
   * user's profile, typically involving a signed message or OAuth flow from the
   * wallet provider.
   *
   * @example
   * ```ts
   * const wallet = await client.web3.wallets.create();
   * ```
   */
  create(body: WalletCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/web3/wallets', { body, ...options });
  }

  /**
   * Retrieves a list of all securely linked cryptocurrency wallets (e.g., MetaMask,
   * Ledger integration), showing their addresses, associated networks, and
   * verification status.
   *
   * @example
   * ```ts
   * const wallets = await client.web3.wallets.list();
   * ```
   */
  list(query?: WalletListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: WalletListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/web3/wallets', { query, ...options });
  }

  /**
   * Retrieves the current balances of all recognized crypto assets within a specific
   * connected wallet.
   *
   * @example
   * ```ts
   * const response = await client.web3.wallets.getBalance(
   *   'wallet_conn_eth_0xabc123',
   * );
   * ```
   */
  getBalance(
    walletId: string,
    query?: WalletGetBalanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  getBalance(walletId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  getBalance(
    walletId: string,
    query: WalletGetBalanceParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.getBalance(walletId, {}, query);
    }
    return this._client.get(`/web3/wallets/${walletId}/balances`, { query, ...options });
  }
}

export type WalletCreateResponse = unknown;

export type WalletListResponse = unknown;

export type WalletGetBalanceResponse = unknown;

export interface WalletCreateParams {}

export interface WalletListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export interface WalletGetBalanceParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Wallets {
  export {
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalanceResponse as WalletGetBalanceResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletListParams as WalletListParams,
    type WalletGetBalanceParams as WalletGetBalanceParams,
  };
}
