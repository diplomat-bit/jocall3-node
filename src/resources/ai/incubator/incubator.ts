// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AnalysisAPI from './analysis';
import { Analysis } from './analysis';

export class Incubator extends APIResource {
  analysis: AnalysisAPI.Analysis = new AnalysisAPI.Analysis(this._client);

  /**
   * Submits a detailed business plan to the Quantum Weaver AI for rigorous analysis,
   * market validation, and seed funding consideration. This initiates the AI-driven
   * incubation journey, aiming to transform innovative ideas into commercially
   * successful ventures.
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.generatePitch({
   *   financialProjections: {
   *     seedRoundAmount: 2500000,
   *     valuationPreMoney: 10000000,
   *     projectionYears: 3,
   *     revenueForecast: [500000, 2000000, 6000000],
   *     profitabilityEstimate:
   *       'Achieve profitability within 18 months.',
   *   },
   * });
   * ```
   */
  generatePitch(body: IncubatorGeneratePitchParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/ai/incubator/pitch', { body, ...options });
  }
}

export type IncubatorGeneratePitchResponse = unknown;

export interface IncubatorGeneratePitchParams {
  /**
   * Key financial metrics and projections for the next 3-5 years.
   */
  financialProjections: unknown;
}

Incubator.Analysis = Analysis;

export declare namespace Incubator {
  export {
    type IncubatorGeneratePitchResponse as IncubatorGeneratePitchResponse,
    type IncubatorGeneratePitchParams as IncubatorGeneratePitchParams,
  };

  export { Analysis as Analysis };
}
