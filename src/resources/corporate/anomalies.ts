// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Anomalies extends APIResource {
  /**
   * Retrieves a comprehensive list of AI-detected financial anomalies across
   * transactions, payments, and corporate cards that require immediate review and
   * potential action to mitigate risk and ensure compliance.
   *
   * @example
   * ```ts
   * const anomalies = await client.corporate.anomalies.list();
   * ```
   */
  list(query?: AnomalyListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: AnomalyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/corporate/anomalies', { query, ...options });
  }

  /**
   * Updates the review status of a specific financial anomaly, allowing compliance
   * officers to mark it as dismissed, resolved, or escalate for further
   * investigation after thorough AI-assisted and human review.
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.anomalies.updateStatus(
   *     'anom_risk-2024-07-21-D1E2F3',
   *   );
   * ```
   */
  updateStatus(
    anomalyId: string,
    body: AnomalyUpdateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.put(`/corporate/anomalies/${anomalyId}/status`, { body, ...options });
  }
}

export type AnomalyListResponse = unknown;

export type AnomalyUpdateStatusResponse = unknown;

export interface AnomalyListParams {
  /**
   * End date for filtering results (inclusive, YYYY-MM-DD).
   */
  endDate?: string;

  /**
   * Filter anomalies by the type of financial entity they are related to.
   */
  entityType?: string;

  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Filter anomalies by their AI-assessed severity level.
   */
  severity?: string;

  /**
   * Start date for filtering results (inclusive, YYYY-MM-DD).
   */
  startDate?: string;

  /**
   * Filter anomalies by their current review status.
   */
  status?: string;
}

export interface AnomalyUpdateStatusParams {}

export declare namespace Anomalies {
  export {
    type AnomalyListResponse as AnomalyListResponse,
    type AnomalyUpdateStatusResponse as AnomalyUpdateStatusResponse,
    type AnomalyListParams as AnomalyListParams,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
