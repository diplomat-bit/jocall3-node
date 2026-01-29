// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Insights extends APIResource {
  /**
   * Get Cash Flow Prediction (Gemini Powered)
   */
  retrieveFutureFlow(options?: Core.RequestOptions): Core.APIPromise<InsightRetrieveFutureFlowResponse> {
    return this._client.get('/transactions/insights/future-flow', options);
  }

  /**
   * Get AISpending Trend Analysis
   */
  retrieveSpendingTrends(
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightRetrieveSpendingTrendsResponse> {
    return this._client.get('/transactions/insights/spending-trends', options);
  }
}

export interface InsightRetrieveFutureFlowResponse {
  forecastDays?: number;

  projectedLowPoint?: number;

  recommendations?: Array<string>;
}

export interface InsightRetrieveSpendingTrendsResponse {
  aiNarrative?: string;

  anomaliesDetected?: number;

  overallTrend?: string;
}

export declare namespace Insights {
  export {
    type InsightRetrieveFutureFlowResponse as InsightRetrieveFutureFlowResponse,
    type InsightRetrieveSpendingTrendsResponse as InsightRetrieveSpendingTrendsResponse,
  };
}
