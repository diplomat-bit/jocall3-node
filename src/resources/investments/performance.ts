// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Performance extends APIResource {
  /**
   * Get Historical Performance Curves
   */
  getHistorical(
    query?: PerformanceGetHistoricalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PerformanceGetHistoricalResponse>;
  getHistorical(options?: Core.RequestOptions): Core.APIPromise<PerformanceGetHistoricalResponse>;
  getHistorical(
    query: PerformanceGetHistoricalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PerformanceGetHistoricalResponse> {
    if (isRequestOptions(query)) {
      return this.getHistorical({}, query);
    }
    return this._client.get('/investments/performance/historical', { query, ...options });
  }
}

export interface PerformanceGetHistoricalResponse {
  benchmarkComparison?: number;

  points?: Array<unknown>;
}

export interface PerformanceGetHistoricalParams {
  range?: '1m' | '3m' | '1y' | '5y' | 'max';
}

export declare namespace Performance {
  export {
    type PerformanceGetHistoricalResponse as PerformanceGetHistoricalResponse,
    type PerformanceGetHistoricalParams as PerformanceGetHistoricalParams,
  };
}
