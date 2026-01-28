// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Offers extends APIResource {
  /**
   * Redeems a personalized, exclusive offer from the Plato AI marketplace, often
   * resulting in a discount, special rate, or credit to the user's account.
   *
   * @example
   * ```ts
   * const response = await client.marketplace.offers.redeem(
   *   'offer_home_ins_promo_1',
   * );
   * ```
   */
  redeem(
    offerId: string,
    body?: OfferRedeemParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/marketplace/offers/${offerId}/redeem`, { body, ...options });
  }
}

export type OfferRedeemResponse = unknown;

export interface OfferRedeemParams {}

export declare namespace Offers {
  export { type OfferRedeemResponse as OfferRedeemResponse, type OfferRedeemParams as OfferRedeemParams };
}
