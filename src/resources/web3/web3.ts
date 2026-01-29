// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContractsAPI from './contracts';
import { Contracts } from './contracts';
import * as NFTsAPI from './nfts';
import { NFTListParams, NFTListResponse, NFTs } from './nfts';
import * as TransactionsAPI from './transactions';
import { TransactionInitiateParams, TransactionInitiateResponse, Transactions } from './transactions';
import * as WalletsAPI from './wallets';
import {
  WalletCreateParams,
  WalletCreateResponse,
  WalletListParams,
  WalletListResponse,
  WalletRetrieveBalancesParams,
  WalletRetrieveBalancesResponse,
  Wallets,
} from './wallets';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  nfts: NFTsAPI.NFTs = new NFTsAPI.NFTs(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

Web3.Wallets = Wallets;
Web3.Transactions = Transactions;
Web3.NFTs = NFTs;
Web3.Contracts = Contracts;

export declare namespace Web3 {
  export {
    Wallets as Wallets,
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletRetrieveBalancesResponse as WalletRetrieveBalancesResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletListParams as WalletListParams,
    type WalletRetrieveBalancesParams as WalletRetrieveBalancesParams,
  };

  export {
    Transactions as Transactions,
    type TransactionInitiateResponse as TransactionInitiateResponse,
    type TransactionInitiateParams as TransactionInitiateParams,
  };

  export { NFTs as NFTs, type NFTListResponse as NFTListResponse, type NFTListParams as NFTListParams };

  export { Contracts as Contracts };
}
