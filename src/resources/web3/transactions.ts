// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Transactions extends APIResource {
  /**
   * Cross-chain Asset Bridge
   *
   * @example
   * ```ts
   * await client.web3.transactions.bridgeChain({
   *   token: 'token',
   *   amount: 'amount',
   *   destChain: 'destChain',
   *   sourceChain: 'sourceChain',
   * });
   * ```
   */
  bridgeChain(body: TransactionBridgeChainParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/web3/transactions/bridge', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Initiate a Web3 transaction
   *
   * @example
   * ```ts
   * await client.web3.transactions.initiate({
   *   amount: 0,
   *   asset: 'asset',
   *   wallet_id: 'wallet_id',
   * });
   * ```
   */
  initiate(body: TransactionInitiateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/web3/transactions/initiate', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Initiate On-chain Transfer
   *
   * @example
   * ```ts
   * const response = await client.web3.transactions.send({
   *   token: 'token',
   *   amount: 'amount',
   *   to: 'to',
   * });
   * ```
   */
  send(body: TransactionSendParams, options?: Core.RequestOptions): Core.APIPromise<TransactionSendResponse> {
    return this._client.post('/web3/transactions/send', { body, ...options });
  }

  /**
   * Execute Multi-chain Token Swap
   *
   * @example
   * ```ts
   * await client.web3.transactions.swapTokens({
   *   amount: 'amount',
   *   fromToken: 'fromToken',
   *   toToken: 'toToken',
   * });
   * ```
   */
  swapTokens(body: TransactionSwapTokensParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/web3/transactions/swap', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TransactionSendResponse {
  txHash?: string;
}

export interface TransactionBridgeChainParams {
  token: string;

  amount: string;

  destChain: string;

  sourceChain: string;
}

export interface TransactionInitiateParams {
  amount: number;

  asset: string;

  wallet_id: string;
}

export interface TransactionSendParams {
  token: string;

  amount: string;

  to: string;
}

export interface TransactionSwapTokensParams {
  amount: string;

  fromToken: string;

  toToken: string;
}

export declare namespace Transactions {
  export {
    type TransactionSendResponse as TransactionSendResponse,
    type TransactionBridgeChainParams as TransactionBridgeChainParams,
    type TransactionInitiateParams as TransactionInitiateParams,
    type TransactionSendParams as TransactionSendParams,
    type TransactionSwapTokensParams as TransactionSwapTokensParams,
  };
}
