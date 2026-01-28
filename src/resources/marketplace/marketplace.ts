// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OffersAPI from './offers';
import { Offers } from './offers';

export class Marketplace extends APIResource {
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);
}

Marketplace.Offers = Offers;

export declare namespace Marketplace {
  export { Offers as Offers };
}
