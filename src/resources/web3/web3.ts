// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as NFTsAPI from './nfts';
import { NFTListResponse, NFTMintParams, NFTs } from './nfts';
import * as SmartContractsAPI from './smart-contracts';
import { SmartContractDeployParams, SmartContracts } from './smart-contracts';
import * as TransactionsAPI from './transactions';
import {
  TransactionBridgeChainParams,
  TransactionSendCryptoParams,
  TransactionSendCryptoResponse,
  TransactionSwapTokensParams,
  Transactions,
} from './transactions';
import * as WalletsAPI from './wallets';
import {
  WalletConnectParams,
  WalletCreateParams,
  WalletCreateResponse,
  WalletGetBalanceResponse,
  WalletListResponse,
  Wallets,
} from './wallets';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  nfts: NFTsAPI.NFTs = new NFTsAPI.NFTs(this._client);
  smartContracts: SmartContractsAPI.SmartContracts = new SmartContractsAPI.SmartContracts(this._client);

  /**
   * Get Blockchain Network Health
   *
   * @example
   * ```ts
   * const response = await client.web3.getNetworkStatus();
   * ```
   */
  getNetworkStatus(options?: Core.RequestOptions): Core.APIPromise<Web3GetNetworkStatusResponse> {
    return this._client.get('/web3/network/status', options);
  }
}

export interface Web3GetNetworkStatusResponse {
  ethereum?: unknown;

  polygon?: unknown;

  solana?: unknown;
}

Web3.Wallets = Wallets;
Web3.Transactions = Transactions;
Web3.NFTs = NFTs;
Web3.SmartContracts = SmartContracts;

export declare namespace Web3 {
  export { type Web3GetNetworkStatusResponse as Web3GetNetworkStatusResponse };

  export {
    Wallets as Wallets,
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalanceResponse as WalletGetBalanceResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletConnectParams as WalletConnectParams,
  };

  export {
    Transactions as Transactions,
    type TransactionSendCryptoResponse as TransactionSendCryptoResponse,
    type TransactionBridgeChainParams as TransactionBridgeChainParams,
    type TransactionSendCryptoParams as TransactionSendCryptoParams,
    type TransactionSwapTokensParams as TransactionSwapTokensParams,
  };

  export { NFTs as NFTs, type NFTListResponse as NFTListResponse, type NFTMintParams as NFTMintParams };

  export { SmartContracts as SmartContracts, type SmartContractDeployParams as SmartContractDeployParams };
}
