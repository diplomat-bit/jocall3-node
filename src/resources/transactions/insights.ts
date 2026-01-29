// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Insights extends APIResource {
  /**
   * Retrieves AI-generated insights into user spending trends over time, identifying
   * patterns and anomalies.
   *
   * @example
   * ```ts
   * const response =
   *   await client.transactions.insights.retrieveSpendingTrends();
   * ```
   */
  retrieveSpendingTrends(
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightRetrieveSpendingTrendsResponse> {
    return this._client.get('/transactions/insights/spending-trends', options);
  }
}

export interface InsightRetrieveSpendingTrendsResponse {
  aiInsights: Array<InsightRetrieveSpendingTrendsResponse.AIInsight>;

  forecastNextMonth: number;

  overallTrend: string;

  percentageChange: number;

  period: string;

  topCategoriesByChange: Array<InsightRetrieveSpendingTrendsResponse.TopCategoriesByChange>;
}

export namespace InsightRetrieveSpendingTrendsResponse {
  export interface AIInsight {
    id?: string;

    actionableRecommendation?: string;

    category?: string;

    description?: string;

    severity?: string;

    timestamp?: string;

    title?: string;
  }

  export interface TopCategoriesByChange {
    absoluteChange?: number;

    category?: string;

    percentageChange?: number;
  }
}

export declare namespace Insights {
  export { type InsightRetrieveSpendingTrendsResponse as InsightRetrieveSpendingTrendsResponse };
}
