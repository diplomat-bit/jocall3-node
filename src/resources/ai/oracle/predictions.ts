// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Predictions extends APIResource {
  /**
   * Get AI-Driven Inflation Forecast
   */
  inflation(
    query?: PredictionInflationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredictionInflationResponse>;
  inflation(options?: Core.RequestOptions): Core.APIPromise<PredictionInflationResponse>;
  inflation(
    query: PredictionInflationParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredictionInflationResponse> {
    if (isRequestOptions(query)) {
      return this.inflation({}, query);
    }
    return this._client.get('/ai/oracle/predictions/inflation', { query, ...options });
  }

  /**
   * Get Market Volatility & Crash Probability
   */
  marketCrash(options?: Core.RequestOptions): Core.APIPromise<PredictionMarketCrashResponse> {
    return this._client.get('/ai/oracle/predictions/market-crash-probability', options);
  }
}

export interface PredictionInflationResponse {
  confidenceScore?: number;

  forecastedCPI?: number;

  period?: string;
}

export interface PredictionMarketCrashResponse {
  aiNarrative?: string;

  crashProbability?: number;

  riskFactors?: Array<string>;
}

export interface PredictionInflationParams {
  region?: string;
}

export declare namespace Predictions {
  export {
    type PredictionInflationResponse as PredictionInflationResponse,
    type PredictionMarketCrashResponse as PredictionMarketCrashResponse,
    type PredictionInflationParams as PredictionInflationParams,
  };
}
