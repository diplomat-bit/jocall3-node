// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Simulations extends APIResource {
  /**
   * Get Specific Simulation Result
   *
   * @example
   * ```ts
   * const simulation =
   *   await client.ai.oracle.simulations.retrieve(
   *     'simulationId',
   *   );
   * ```
   */
  retrieve(simulationId: string, options?: Core.RequestOptions): Core.APIPromise<SimulationRetrieveResponse> {
    return this._client.get(`/ai/oracle/simulations/${simulationId}`, options);
  }

  /**
   * List All Past Simulations
   *
   * @example
   * ```ts
   * const simulations =
   *   await client.ai.oracle.simulations.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SimulationListResponse> {
    return this._client.get('/ai/oracle/simulations', options);
  }
}

export interface SimulationRetrieveResponse {
  overallSummary: string;

  scenarioResults: Array<SimulationRetrieveResponse.ScenarioResult>;

  simulationId: string;
}

export namespace SimulationRetrieveResponse {
  export interface ScenarioResult {
    finalNetWorth?: number;

    narrative?: string;

    scenarioName?: string;
  }
}

export interface SimulationListResponse {
  data?: Array<SimulationListResponse.Data>;
}

export namespace SimulationListResponse {
  export interface Data {
    overallSummary: string;

    scenarioResults: Array<Data.ScenarioResult>;

    simulationId: string;
  }

  export namespace Data {
    export interface ScenarioResult {
      finalNetWorth?: number;

      narrative?: string;

      scenarioName?: string;
    }
  }
}

export declare namespace Simulations {
  export {
    type SimulationRetrieveResponse as SimulationRetrieveResponse,
    type SimulationListResponse as SimulationListResponse,
  };
}
