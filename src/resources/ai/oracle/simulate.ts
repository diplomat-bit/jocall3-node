// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Simulate extends APIResource {
  /**
   * Engages the Quantum Oracle for highly complex, multi-variable simulations,
   * allowing precise control over numerous financial parameters, market conditions,
   * and personal events to generate deep, predictive insights and sensitivity
   * analysis.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.simulate.runAdvanced();
   * ```
   */
  runAdvanced(body: SimulateRunAdvancedParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/ai/oracle/simulate/advanced', { body, ...options });
  }

  /**
   * Submits a hypothetical scenario to the Quantum Oracle AI for standard financial
   * impact analysis. The AI simulates the effect on the user's current financial
   * state and provides a summary.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.simulate.runStandard();
   * ```
   */
  runStandard(
    body: SimulateRunStandardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SimulateRunStandardResponse> {
    return this._client.post('/ai/oracle/simulate', { body, ...options });
  }
}

export type SimulateRunAdvancedResponse = unknown;

export interface SimulateRunStandardResponse {
  /**
   * AI-driven risk assessment of the simulated scenario.
   */
  riskAnalysis?: unknown;
}

export interface SimulateRunAdvancedParams {
  /**
   * Optional: Global economic conditions to apply to all scenarios.
   */
  globalEconomicFactors?: unknown;

  /**
   * Optional: Personal financial assumptions to override defaults.
   */
  personalAssumptions?: unknown;
}

export interface SimulateRunStandardParams {}

export declare namespace Simulate {
  export {
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunStandardResponse as SimulateRunStandardResponse,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
    type SimulateRunStandardParams as SimulateRunStandardParams,
  };
}
