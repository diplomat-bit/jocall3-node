// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Offers extends APIResource {
  /**
   * List AI-Targeted Loyalty Offers
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OfferListResponse> {
    return this._client.get('/marketplace/offers', options);
  }

  /**
   * Redeem Marketplace Reward
   */
  redeem(offerId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/marketplace/offers/${offerId}/redeem`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OfferListResponse {
  data?: Array<unknown>;
}

export declare namespace Offers {
  export { type OfferListResponse as OfferListResponse };
}
