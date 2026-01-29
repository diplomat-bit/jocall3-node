// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PitchAPI from './pitch';
import {
  Pitch,
  PitchRetrieveDetailsResponse,
  PitchSubmitFeedbackParams,
  PitchSubmitFeedbackResponse,
} from './pitch';

export class Incubator extends APIResource {
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);

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
}

export type IncubatorGeneratePitchResponse = unknown;

export type IncubatorListPitchesResponse = unknown;

export interface IncubatorGeneratePitchParams {
  /**
   * Key financial metrics and projections for the next 3-5 years.
   */
  financialProjections: unknown;
}

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

Incubator.Pitch = Pitch;

export declare namespace Incubator {
  export {
    type IncubatorGeneratePitchResponse as IncubatorGeneratePitchResponse,
    type IncubatorListPitchesResponse as IncubatorListPitchesResponse,
    type IncubatorGeneratePitchParams as IncubatorGeneratePitchParams,
    type IncubatorListPitchesParams as IncubatorListPitchesParams,
  };

  export {
    Pitch as Pitch,
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackResponse as PitchSubmitFeedbackResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
