// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AnalysisAPI from './analysis';
import { Analysis } from './analysis';
import * as PitchAPI from './pitch';
import {
  Pitch,
  PitchRetrieveDetailsResponse,
  PitchSubmitFeedbackParams,
  PitchSubmitFeedbackResponse,
} from './pitch';

export class Incubator extends APIResource {
  analysis: AnalysisAPI.Analysis = new AnalysisAPI.Analysis(this._client);
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);

  /**
   * Retrieves a summary list of all business pitches submitted by the authenticated
   * user to Quantum Weaver.
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.listPitches();
   * ```
   */
  listPitches(query?: IncubatorListPitchesParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  listPitches(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  listPitches(
    query: IncubatorListPitchesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.listPitches({}, query);
    }
    return this._client.get('/ai/incubator/pitches', { query, ...options });
  }

  /**
   * Submits a detailed business plan to the Quantum Weaver AI for rigorous analysis,
   * market validation, and seed funding consideration. This initiates the AI-driven
   * incubation journey, aiming to transform innovative ideas into commercially
   * successful ventures.
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.submitPitch({
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
  submitPitch(body: IncubatorSubmitPitchParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/ai/incubator/pitch', { body, ...options });
  }
}

export type IncubatorListPitchesResponse = unknown;

export type IncubatorSubmitPitchResponse = unknown;

export interface IncubatorListPitchesParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Filter pitches by their current stage.
   */
  status?: string;
}

export interface IncubatorSubmitPitchParams {
  /**
   * Key financial metrics and projections for the next 3-5 years.
   */
  financialProjections: unknown;
}

Incubator.Analysis = Analysis;
Incubator.Pitch = Pitch;

export declare namespace Incubator {
  export {
    type IncubatorListPitchesResponse as IncubatorListPitchesResponse,
    type IncubatorSubmitPitchResponse as IncubatorSubmitPitchResponse,
    type IncubatorListPitchesParams as IncubatorListPitchesParams,
    type IncubatorSubmitPitchParams as IncubatorSubmitPitchParams,
  };

  export { Analysis as Analysis };

  export {
    Pitch as Pitch,
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackResponse as PitchSubmitFeedbackResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
