// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Assets extends APIResource {
  /**
   * Searches for available investment assets (stocks, ETFs, mutual funds) and
   * returns their ESG impact scores.
   *
   * @example
   * ```ts
   * const response = await client.investments.assets.search();
   * ```
   */
  search(query?: AssetSearchParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  search(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  search(
    query: AssetSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.search({}, query);
    }
    return this._client.get('/investments/assets/search', { query, ...options });
  }
}

export type AssetSearchResponse = unknown;

export interface AssetSearchParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Minimum desired ESG score (0-10).
   */
  minESGScore?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Search query for asset name or symbol.
   */
  query?: string;
}

export declare namespace Assets {
  export { type AssetSearchResponse as AssetSearchResponse, type AssetSearchParams as AssetSearchParams };
}
