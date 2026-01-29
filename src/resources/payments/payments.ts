// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DomesticAPI from './domestic';
import { Domestic, DomesticACHParams, DomesticRtpParams, DomesticWireParams } from './domestic';
import * as FxAPI from './fx';
import { Fx, FxBookDealParams, FxConvertParams, FxGetRatesParams, FxGetRatesResponse } from './fx';
import * as InternationalAPI from './international';
import {
  International,
  InternationalGetStatusResponse,
  InternationalSepaParams,
  InternationalSwiftParams,
} from './international';

export class Payments extends APIResource {
  domestic: DomesticAPI.Domestic = new DomesticAPI.Domestic(this._client);
  international: InternationalAPI.International = new InternationalAPI.International(this._client);
  fx: FxAPI.Fx = new FxAPI.Fx(this._client);

  /**
   * Get Payment Receipt
   */
  retrieve(paymentId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/payments/${paymentId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Payment Activity
   */
  list(options?: Core.RequestOptions): Core.APIPromise<PaymentListResponse> {
    return this._client.get('/payments', options);
  }
}

export interface PaymentListResponse {
  data?: Array<unknown>;
}

Payments.Domestic = Domestic;
Payments.International = International;
Payments.Fx = Fx;

export declare namespace Payments {
  export { type PaymentListResponse as PaymentListResponse };

  export {
    Domestic as Domestic,
    type DomesticACHParams as DomesticACHParams,
    type DomesticRtpParams as DomesticRtpParams,
    type DomesticWireParams as DomesticWireParams,
  };

  export {
    International as International,
    type InternationalGetStatusResponse as InternationalGetStatusResponse,
    type InternationalSepaParams as InternationalSepaParams,
    type InternationalSwiftParams as InternationalSwiftParams,
  };

  export {
    Fx as Fx,
    type FxGetRatesResponse as FxGetRatesResponse,
    type FxBookDealParams as FxBookDealParams,
    type FxConvertParams as FxConvertParams,
    type FxGetRatesParams as FxGetRatesParams,
  };
}
