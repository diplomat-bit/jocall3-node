// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AnalysisAPI from './analysis';
import {
  Analysis,
  AnalysisGenerateSwotParams,
  AnalysisGenerateSwotResponse,
  AnalysisScanCompetitorsParams,
  AnalysisScanCompetitorsResponse,
} from './analysis';
import * as PitchAPI from './pitch';
import { Pitch, PitchRetrieveDetailsResponse, PitchSubmitFeedbackParams } from './pitch';

export class Incubator extends APIResource {
  analysis: AnalysisAPI.Analysis = new AnalysisAPI.Analysis(this._client);
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);

  /**
   * List All User Business Pitches
   */
  listPitches(options?: Core.RequestOptions): Core.APIPromise<IncubatorListPitchesResponse> {
    return this._client.get('/ai/incubator/pitches', options);
  }

  /**
   * Submit a High-Potential Business Plan
   */
  submitPitch(
    body: IncubatorSubmitPitchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncubatorSubmitPitchResponse> {
    return this._client.post('/ai/incubator/pitch', { body, ...options });
  }

  /**
   * Rapid Idea Validation Engine
   */
  validateIdea(
    body: IncubatorValidateIdeaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncubatorValidateIdeaResponse> {
    return this._client.post('/ai/incubator/validate', { body, ...options });
  }
}

export interface IncubatorListPitchesResponse {
  data?: Array<unknown>;
}

export interface IncubatorSubmitPitchResponse {
  pitchId?: string;

  status?: string;
}

export interface IncubatorValidateIdeaResponse {
  criticalFlaws?: Array<string>;

  feasibilityScore?: number;
}

export interface IncubatorSubmitPitchParams {
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
    type IncubatorListPitchesResponse as IncubatorListPitchesResponse,
    type IncubatorSubmitPitchResponse as IncubatorSubmitPitchResponse,
    type IncubatorValidateIdeaResponse as IncubatorValidateIdeaResponse,
    type IncubatorSubmitPitchParams as IncubatorSubmitPitchParams,
    type IncubatorValidateIdeaParams as IncubatorValidateIdeaParams,
  };

  export {
    Analysis as Analysis,
    type AnalysisGenerateSwotResponse as AnalysisGenerateSwotResponse,
    type AnalysisScanCompetitorsResponse as AnalysisScanCompetitorsResponse,
    type AnalysisGenerateSwotParams as AnalysisGenerateSwotParams,
    type AnalysisScanCompetitorsParams as AnalysisScanCompetitorsParams,
  };

  export {
    Pitch as Pitch,
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
