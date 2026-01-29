// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Simulate extends APIResource {
  /**
   * Run an Advanced Multi-Variable Financial Simulation
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.simulate.runAdvanced({
   *     prompt: 'prompt',
   *     scenarios: [{ name: 'name' }],
   *   });
   * ```
   */
  runAdvanced(
    body: SimulateRunAdvancedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SimulateRunAdvancedResponse> {
    return this._client.post('/ai/oracle/simulate/advanced', { body, ...options });
  }

  /**
   * Run a Probabilistic Monte Carlo Simulation
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.simulate.runMonteCarlo({
   *     iterations: 100,
   *     variables: ['inflation', 'oil_prices'],
   *   });
   * ```
   */
  runMonteCarlo(
    body: SimulateRunMonteCarloParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SimulateRunMonteCarloResponse> {
    return this._client.post('/ai/oracle/simulate/monte-carlo', { body, ...options });
  }

  /**
   * Run a 'What-If' Financial Simulation (Standard)
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.simulate.runStandard({
   *     prompt: 'prompt',
   *   });
   * ```
   */
  runStandard(
    body: SimulateRunStandardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SimulateRunStandardResponse> {
    return this._client.post('/ai/oracle/simulate', { body, ...options });
  }
}

export interface SimulateRunAdvancedResponse {
  simulationId: string;

  status: string;

  confidenceScore?: number;

  data?: Array<{ [key: string]: unknown }>;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulateRunMonteCarloResponse {
  distributionGraphData?: Array<unknown>;

  probabilityOfSuccess?: number;

  simulationId?: string;
}

export interface SimulateRunStandardResponse {
  simulationId: string;

  status: string;

  confidenceScore?: number;

  data?: Array<{ [key: string]: unknown }>;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulateRunAdvancedParams {
  prompt: string;

  scenarios: Array<SimulateRunAdvancedParams.Scenario>;

  globalEconomicFactors?: unknown;

  personalAssumptions?: unknown;
}

export namespace SimulateRunAdvancedParams {
  export interface Scenario {
    name: string;

    description?: string;

    variables?: { [key: string]: unknown };
  }
}

export interface SimulateRunMonteCarloParams {
  iterations: number;

  variables: Array<string>;

  confidenceInterval?: number;
}

export interface SimulateRunStandardParams {
  /**
   * Describe the financial scenario
   */
  prompt: string;

  /**
   * Key variables like duration, rate, or amount
   */
  parameters?: unknown;
}

export declare namespace Simulate {
  export {
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunMonteCarloResponse as SimulateRunMonteCarloResponse,
    type SimulateRunStandardResponse as SimulateRunStandardResponse,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
    type SimulateRunMonteCarloParams as SimulateRunMonteCarloParams,
    type SimulateRunStandardParams as SimulateRunStandardParams,
  };
}
