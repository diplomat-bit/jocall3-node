// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Assets extends APIResource {
  /**
   * Global Multi-Asset Search (Equities, Crypto, ESG)
   */
  search(query: AssetSearchParams, options?: Core.RequestOptions): Core.APIPromise<AssetSearchResponse> {
    return this._client.get('/investments/assets/search', { query, ...options });
  }
}

export interface AssetSearchResponse {
  hits?: Array<unknown>;
}

export interface AssetSearchParams {
  query: string;

  assetType?: 'EQUITY' | 'CRYPTO' | 'ETF' | 'BOND';
}

export declare namespace Assets {
  export { type AssetSearchResponse as AssetSearchResponse, type AssetSearchParams as AssetSearchParams };
}
