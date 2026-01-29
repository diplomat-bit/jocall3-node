// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Wallets extends APIResource {
  /**
   * Create Non-Custodial Wallet
   *
   * @example
   * ```ts
   * const wallet = await client.web3.wallets.create({
   *   network: 'ETH',
   * });
   * ```
   */
  create(body: WalletCreateParams, options?: Core.RequestOptions): Core.APIPromise<WalletCreateResponse> {
    return this._client.post('/web3/wallets', { body, ...options });
  }

  /**
   * List Connected Wallets
   *
   * @example
   * ```ts
   * const wallets = await client.web3.wallets.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<WalletListResponse> {
    return this._client.get('/web3/wallets', options);
  }

  /**
   * Link External Web3 Wallet (MetaMask/Phantom)
   *
   * @example
   * ```ts
   * await client.web3.wallets.connect({
   *   address: 'address',
   *   provider: 'provider',
   *   signature: 'signature',
   * });
   * ```
   */
  connect(body: WalletConnectParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/web3/wallets/connect', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Multi-chain Token Balances
   *
   * @example
   * ```ts
   * const response = await client.web3.wallets.getBalance(
   *   'walletId',
   * );
   * ```
   */
  getBalance(walletId: string, options?: Core.RequestOptions): Core.APIPromise<WalletGetBalanceResponse> {
    return this._client.get(`/web3/wallets/${walletId}/balances`, options);
  }
}

export interface WalletCreateResponse {
  id: string;

  address: string;

  network: string;
}

export interface WalletListResponse {
  data?: Array<WalletListResponse.Data>;
}

export namespace WalletListResponse {
  export interface Data {
    id: string;

    address: string;

    network: string;
  }
}

export interface WalletGetBalanceResponse {
  balances?: Array<WalletGetBalanceResponse.Balance>;
}

export namespace WalletGetBalanceResponse {
  export interface Balance {
    amount?: string;

    symbol?: string;
  }
}

export interface WalletCreateParams {
  network: string;
}

export interface WalletConnectParams {
  address: string;

  provider: string;

  signature: string;
}

export declare namespace Wallets {
  export {
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalanceResponse as WalletGetBalanceResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletConnectParams as WalletConnectParams,
  };
}
