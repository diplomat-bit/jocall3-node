// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Fx extends APIResource {
  /**
   * Book a Forward FX Deal
   */
  bookDeal(body: FxBookDealParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/fx/deals', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Execute Currency Conversion
   */
  convertCurrency(body: FxConvertCurrencyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/fx/convert', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Market FX Rates
   */
  retrieveRates(
    query: FxRetrieveRatesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FxRetrieveRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

export interface FxRetrieveRatesResponse {
  midRate?: number;

  timestamp?: string;
}

export interface FxBookDealParams {
  amount: number;

  pair: string;

  valueDate: string;
}

export interface FxConvertCurrencyParams {
  amount: number;

  from: string;

  to: string;
}

export interface FxRetrieveRatesParams {
  pair: string;
}

export declare namespace Fx {
  export {
    type FxRetrieveRatesResponse as FxRetrieveRatesResponse,
    type FxBookDealParams as FxBookDealParams,
    type FxConvertCurrencyParams as FxConvertCurrencyParams,
    type FxRetrieveRatesParams as FxRetrieveRatesParams,
  };
}
