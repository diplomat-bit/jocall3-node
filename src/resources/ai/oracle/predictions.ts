// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Predictions extends APIResource {
  /**
   * Get AI-Driven Inflation Forecast
   */
  retrieveInflationForecast(
    query?: PredictionRetrieveInflationForecastParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredictionRetrieveInflationForecastResponse>;
  retrieveInflationForecast(
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredictionRetrieveInflationForecastResponse>;
  retrieveInflationForecast(
    query: PredictionRetrieveInflationForecastParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredictionRetrieveInflationForecastResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveInflationForecast({}, query);
    }
    return this._client.get('/ai/oracle/predictions/inflation', { query, ...options });
  }

  /**
   * Get Market Volatility & Crash Probability
   */
  retrieveMarketCrashProbability(
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredictionRetrieveMarketCrashProbabilityResponse> {
    return this._client.get('/ai/oracle/predictions/market-crash-probability', options);
  }
}

export interface PredictionRetrieveInflationForecastResponse {
  confidenceScore?: number;

  forecastedCPI?: number;

  period?: string;
}

export interface PredictionRetrieveMarketCrashProbabilityResponse {
  aiNarrative?: string;

  crashProbability?: number;

  riskFactors?: Array<string>;
}

export interface PredictionRetrieveInflationForecastParams {
  region?: string;
}

export declare namespace Predictions {
  export {
    type PredictionRetrieveInflationForecastResponse as PredictionRetrieveInflationForecastResponse,
    type PredictionRetrieveMarketCrashProbabilityResponse as PredictionRetrieveMarketCrashProbabilityResponse,
    type PredictionRetrieveInflationForecastParams as PredictionRetrieveInflationForecastParams,
  };
}
