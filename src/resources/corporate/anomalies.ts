// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Anomalies extends APIResource {
  /**
   * List detected anomalies
   *
   * @example
   * ```ts
   * const anomalies = await client.corporate.anomalies.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AnomalyListResponse> {
    return this._client.get('/corporate/anomalies', options);
  }

  /**
   * Update anomaly status
   *
   * @example
   * ```ts
   * await client.corporate.anomalies.updateStatus('anomalyId', {
   *   status: 'dismissed',
   * });
   * ```
   */
  updateStatus(
    anomalyId: string,
    body: AnomalyUpdateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/corporate/anomalies/${anomalyId}/status`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AnomalyListResponse {
  data?: Array<AnomalyListResponse.Data>;
}

export namespace AnomalyListResponse {
  export interface Data {
    id: string;

    severity: string;

    type: string;
  }
}

export interface AnomalyUpdateStatusParams {
  status: 'dismissed' | 'investigating' | 'resolved';
}

export declare namespace Anomalies {
  export {
    type AnomalyListResponse as AnomalyListResponse,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
