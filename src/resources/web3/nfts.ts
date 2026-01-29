// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class NFTs extends APIResource {
  /**
   * Fetches a comprehensive list of Non-Fungible Tokens (NFTs) owned by the user
   * across all connected wallets and supported blockchain networks, including
   * metadata and market values.
   *
   * @example
   * ```ts
   * const nfts = await client.web3.nfts.list();
   * ```
   */
  list(query?: NFTListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: NFTListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/web3/nfts', { query, ...options });
  }
}

export type NFTListResponse = unknown;

export interface NFTListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace NFTs {
  export { type NFTListResponse as NFTListResponse, type NFTListParams as NFTListParams };
}
