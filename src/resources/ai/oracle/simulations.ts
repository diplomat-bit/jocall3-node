// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Simulations extends APIResource {
  /**
   * Get Specific Simulation Result
   */
  retrieve(simulationId: string, options?: Core.RequestOptions): Core.APIPromise<SimulationRetrieveResponse> {
    return this._client.get(`/ai/oracle/simulations/${simulationId}`, options);
  }

  /**
   * List All Past Simulations
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SimulationListResponse> {
    return this._client.get('/ai/oracle/simulations', options);
  }
}

export interface SimulationRetrieveResponse {
  simulationId: string;

  status: string;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulationListResponse {
  data?: Array<SimulationListResponse.Data>;
}

export namespace SimulationListResponse {
  export interface Data {
    simulationId: string;

    status: string;

    outcomeNarrative?: string;

    projectedValue?: number;
  }
}

export declare namespace Simulations {
  export {
    type SimulationRetrieveResponse as SimulationRetrieveResponse,
    type SimulationListResponse as SimulationListResponse,
  };
}
