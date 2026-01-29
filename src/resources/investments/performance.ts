// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Performance extends APIResource {
  /**
   * Get Historical Performance Curves
   */
  retrieveHistorical(
    query?: PerformanceRetrieveHistoricalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PerformanceRetrieveHistoricalResponse>;
  retrieveHistorical(options?: Core.RequestOptions): Core.APIPromise<PerformanceRetrieveHistoricalResponse>;
  retrieveHistorical(
    query: PerformanceRetrieveHistoricalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PerformanceRetrieveHistoricalResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveHistorical({}, query);
    }
    return this._client.get('/investments/performance/historical', { query, ...options });
  }
}

export interface PerformanceRetrieveHistoricalResponse {
  benchmarkComparison?: number;

  points?: Array<unknown>;
}

export interface PerformanceRetrieveHistoricalParams {
  range?: '1m' | '3m' | '1y' | '5y' | 'max';
}

export declare namespace Performance {
  export {
    type PerformanceRetrieveHistoricalResponse as PerformanceRetrieveHistoricalResponse,
    type PerformanceRetrieveHistoricalParams as PerformanceRetrieveHistoricalParams,
  };
}
