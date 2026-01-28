// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NFTsAPI from './nfts';
import { NFTs } from './nfts';
import * as TransactionsAPI from './transactions';
import { Transactions } from './transactions';
import * as WalletsAPI from './wallets';
import { Wallets } from './wallets';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  nfts: NFTsAPI.NFTs = new NFTsAPI.NFTs(this._client);
}

Web3.Wallets = Wallets;
Web3.Transactions = Transactions;
Web3.NFTs = NFTs;

export declare namespace Web3 {
  export { Wallets as Wallets };

  export { Transactions as Transactions };

  export { NFTs as NFTs };
}
