// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DomesticAPI from './domestic';
import { Domestic, DomesticSendACHParams, DomesticSendRtpParams, DomesticSendWireParams } from './domestic';
import * as FxAPI from './fx';
import {
  Fx,
  FxBookDealParams,
  FxConvertCurrencyParams,
  FxRetrieveRatesParams,
  FxRetrieveRatesResponse,
} from './fx';
import * as InternationalAPI from './international';
import {
  International,
  InternationalRetrieveStatusResponse,
  InternationalSendSepaParams,
  InternationalSendSwiftParams,
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
    type DomesticSendACHParams as DomesticSendACHParams,
    type DomesticSendRtpParams as DomesticSendRtpParams,
    type DomesticSendWireParams as DomesticSendWireParams,
  };

  export {
    International as International,
    type InternationalRetrieveStatusResponse as InternationalRetrieveStatusResponse,
    type InternationalSendSepaParams as InternationalSendSepaParams,
    type InternationalSendSwiftParams as InternationalSendSwiftParams,
  };

  export {
    Fx as Fx,
    type FxRetrieveRatesResponse as FxRetrieveRatesResponse,
    type FxBookDealParams as FxBookDealParams,
    type FxConvertCurrencyParams as FxConvertCurrencyParams,
    type FxRetrieveRatesParams as FxRetrieveRatesParams,
  };
}
