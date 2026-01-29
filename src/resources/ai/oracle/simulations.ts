// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Simulations extends APIResource {
  /**
   * Retrieves the full, detailed results of a specific financial simulation by its
   * ID.
   *
   * @example
   * ```ts
   * const simulation =
   *   await client.ai.oracle.simulations.retrieve(
   *     'sim_oracle-growth-2024-xyz',
   *   );
   * ```
   */
  retrieve(simulationId: string, options?: Core.RequestOptions): Core.APIPromise<SimulationRetrieveResponse> {
    return this._client.get(`/ai/oracle/simulations/${simulationId}`, options);
  }

  /**
   * Retrieves a list of all financial simulations previously run by the user,
   * including their status and summaries.
   *
   * @example
   * ```ts
   * const simulations =
   *   await client.ai.oracle.simulations.list();
   * ```
   */
  list(query?: SimulationListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: SimulationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ai/oracle/simulations', { query, ...options });
  }
}

export type SimulationRetrieveResponse = SimulationRetrieveResponse.RiskAnalysis | unknown;

export namespace SimulationRetrieveResponse {
  export interface RiskAnalysis {
    /**
     * AI-driven risk assessment of the simulated scenario.
     */
    riskAnalysis?: unknown;
  }
}

export type SimulationListResponse = unknown;

export interface SimulationListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Simulations {
  export {
    type SimulationRetrieveResponse as SimulationRetrieveResponse,
    type SimulationListResponse as SimulationListResponse,
    type SimulationListParams as SimulationListParams,
  };
}
