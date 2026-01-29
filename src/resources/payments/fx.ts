// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Fx extends APIResource {
  /**
   * Executes an instant currency conversion between two currencies, either from a
   * balance or into a specified account.
   *
   * @example
   * ```ts
   * const response = await client.payments.fx.convert();
   * ```
   */
  convert(body: FxConvertParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/payments/fx/convert', { body, ...options });
  }

  /**
   * Retrieves current and AI-predicted future foreign exchange rates for a specified
   * currency pair, including bid/ask spreads and historical volatility data for
   * informed decisions.
   *
   * @example
   * ```ts
   * const response = await client.payments.fx.getRates();
   * ```
   */
  getRates(query?: FxGetRatesParams, options?: Core.RequestOptions): Core.APIPromise<FxGetRatesResponse>;
  getRates(options?: Core.RequestOptions): Core.APIPromise<FxGetRatesResponse>;
  getRates(
    query: FxGetRatesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FxGetRatesResponse> {
    if (isRequestOptions(query)) {
      return this.getRates({}, query);
    }
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

export type FxConvertResponse = unknown;

export interface FxGetRatesResponse {
  /**
   * Real-time foreign exchange rates.
   */
  currentRate: unknown;

  historicalVolatility?: unknown;
}

export interface FxConvertParams {}

export interface FxGetRatesParams {
  /**
   * The base currency code (e.g., USD).
   */
  baseCurrency?: string;

  /**
   * Number of days into the future to provide an AI-driven prediction.
   */
  forecastDays?: number;

  /**
   * The target currency code (e.g., EUR).
   */
  targetCurrency?: string;
}

export declare namespace Fx {
  export {
    type FxConvertResponse as FxConvertResponse,
    type FxGetRatesResponse as FxGetRatesResponse,
    type FxConvertParams as FxConvertParams,
    type FxGetRatesParams as FxGetRatesParams,
  };
}
