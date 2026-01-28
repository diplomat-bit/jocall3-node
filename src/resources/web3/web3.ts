// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NFTsAPI from './nfts';
import { NFTListParams, NFTListResponse, NFTs } from './nfts';
import * as SmartContractsAPI from './smart-contracts';
import { SmartContracts } from './smart-contracts';
import * as TransactionsAPI from './transactions';
import { Transactions } from './transactions';
import * as WalletsAPI from './wallets';
import {
  WalletCreateParams,
  WalletCreateResponse,
  WalletGetBalanceParams,
  WalletGetBalanceResponse,
  WalletListParams,
  WalletListResponse,
  Wallets,
} from './wallets';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  nfts: NFTsAPI.NFTs = new NFTsAPI.NFTs(this._client);
  smartContracts: SmartContractsAPI.SmartContracts = new SmartContractsAPI.SmartContracts(this._client);
}

Web3.Wallets = Wallets;
Web3.Transactions = Transactions;
Web3.NFTs = NFTs;
Web3.SmartContracts = SmartContracts;

export declare namespace Web3 {
  export {
    Wallets as Wallets,
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalanceResponse as WalletGetBalanceResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletListParams as WalletListParams,
    type WalletGetBalanceParams as WalletGetBalanceParams,
  };

  export { Transactions as Transactions };

  export { NFTs as NFTs, type NFTListResponse as NFTListResponse, type NFTListParams as NFTListParams };

  export { SmartContracts as SmartContracts };
}
