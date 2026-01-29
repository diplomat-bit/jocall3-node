// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AnalysisAPI from './analysis';
import {
  Analysis,
  AnalysisCompetitorScanParams,
  AnalysisCompetitorScanResponse,
  AnalysisSwotParams,
  AnalysisSwotResponse,
} from './analysis';
import * as PitchAPI from './pitch';
import { Pitch, PitchRetrieveDetailsResponse, PitchSubmitFeedbackParams } from './pitch';

export class Incubator extends APIResource {
  analysis: AnalysisAPI.Analysis = new AnalysisAPI.Analysis(this._client);
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);

  /**
   * Submit a High-Potential Business Plan
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.generatePitch({
   *   businessPlan: 'businessPlan',
   *   financialProjections: {},
   *   foundingTeam: [{}],
   *   marketOpportunity: 'marketOpportunity',
   * });
   * ```
   */
  generatePitch(
    body: IncubatorGeneratePitchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncubatorGeneratePitchResponse> {
    return this._client.post('/ai/incubator/pitch', { body, ...options });
  }

  /**
   * Rapid Idea Validation Engine
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.validateIdea({
   *   concept: 'concept',
   * });
   * ```
   */
  validateIdea(
    body: IncubatorValidateIdeaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncubatorValidateIdeaResponse> {
    return this._client.post('/ai/incubator/validate', { body, ...options });
  }
}

export interface IncubatorGeneratePitchResponse {
  pitchId?: string;

  status?: string;
}

export interface IncubatorValidateIdeaResponse {
  criticalFlaws?: Array<string>;

  feasibilityScore?: number;
}

export interface IncubatorGeneratePitchParams {
  /**
   * Full text of the concept
   */
  businessPlan: string;

  financialProjections: unknown;

  foundingTeam: Array<unknown>;

  marketOpportunity: string;
}

export interface IncubatorValidateIdeaParams {
  concept: string;
}

Incubator.Analysis = Analysis;
Incubator.Pitch = Pitch;

export declare namespace Incubator {
  export {
    type IncubatorGeneratePitchResponse as IncubatorGeneratePitchResponse,
    type IncubatorValidateIdeaResponse as IncubatorValidateIdeaResponse,
    type IncubatorGeneratePitchParams as IncubatorGeneratePitchParams,
    type IncubatorValidateIdeaParams as IncubatorValidateIdeaParams,
  };

  export {
    Analysis as Analysis,
    type AnalysisCompetitorScanResponse as AnalysisCompetitorScanResponse,
    type AnalysisSwotResponse as AnalysisSwotResponse,
    type AnalysisCompetitorScanParams as AnalysisCompetitorScanParams,
    type AnalysisSwotParams as AnalysisSwotParams,
  };

  export {
    Pitch as Pitch,
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
