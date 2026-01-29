// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OffersAPI from './offers';
import { OfferListResponse, Offers } from './offers';

export class Marketplace extends APIResource {
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);

  /**
   * List Financial Products & Add-ons
   */
  listProducts(options?: Core.RequestOptions): Core.APIPromise<MarketplaceListProductsResponse> {
    return this._client.get('/marketplace/products', options);
  }
}

export interface MarketplaceListProductsResponse {
  data?: Array<unknown>;
}

Marketplace.Offers = Offers;

export declare namespace Marketplace {
  export { type MarketplaceListProductsResponse as MarketplaceListProductsResponse };

  export { Offers as Offers, type OfferListResponse as OfferListResponse };
}
