// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContractsAPI from './contracts';
import { ContractDeployParams, Contracts } from './contracts';
import * as NFTsAPI from './nfts';
import { NFTListResponse, NFTMintParams, NFTs } from './nfts';
import * as TransactionsAPI from './transactions';
import {
  TransactionBridgeChainParams,
  TransactionInitiateParams,
  TransactionSendParams,
  TransactionSendResponse,
  TransactionSwapTokensParams,
  Transactions,
} from './transactions';
import * as WalletsAPI from './wallets';
import {
  WalletConnectParams,
  WalletCreateParams,
  WalletCreateResponse,
  WalletListResponse,
  WalletRetrieveBalancesResponse,
  Wallets,
} from './wallets';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  nfts: NFTsAPI.NFTs = new NFTsAPI.NFTs(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);

  /**
   * Get Blockchain Network Health
   *
   * @example
   * ```ts
   * const response = await client.web3.retrieveNetworkStatus();
   * ```
   */
  retrieveNetworkStatus(options?: Core.RequestOptions): Core.APIPromise<Web3RetrieveNetworkStatusResponse> {
    return this._client.get('/web3/network/status', options);
  }
}

export interface Web3RetrieveNetworkStatusResponse {
  ethereum?: unknown;

  polygon?: unknown;

  solana?: unknown;
}

Web3.Wallets = Wallets;
Web3.Transactions = Transactions;
Web3.NFTs = NFTs;
Web3.Contracts = Contracts;

export declare namespace Web3 {
  export { type Web3RetrieveNetworkStatusResponse as Web3RetrieveNetworkStatusResponse };

  export {
    Wallets as Wallets,
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletRetrieveBalancesResponse as WalletRetrieveBalancesResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletConnectParams as WalletConnectParams,
  };

  export {
    Transactions as Transactions,
    type TransactionSendResponse as TransactionSendResponse,
    type TransactionBridgeChainParams as TransactionBridgeChainParams,
    type TransactionInitiateParams as TransactionInitiateParams,
    type TransactionSendParams as TransactionSendParams,
    type TransactionSwapTokensParams as TransactionSwapTokensParams,
  };

  export { NFTs as NFTs, type NFTListResponse as NFTListResponse, type NFTMintParams as NFTMintParams };

  export { Contracts as Contracts, type ContractDeployParams as ContractDeployParams };
}
