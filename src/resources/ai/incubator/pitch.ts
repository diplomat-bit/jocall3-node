// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Pitch extends APIResource {
  /**
   * Retrieves the granular AI-driven analysis, strategic feedback, market validation
   * results, and any outstanding questions from Quantum Weaver for a specific
   * business pitch.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.incubator.pitch.retrieveDetails(
   *     'pitch_qw_synergychain-xyz',
   *   );
   * ```
   */
  retrieveDetails(
    pitchId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PitchRetrieveDetailsResponse> {
    return this._client.get(`/ai/incubator/pitch/${pitchId}/details`, options);
  }

  /**
   * Allows the entrepreneur to respond to specific questions or provide additional
   * details requested by Quantum Weaver, moving the pitch forward in the incubation
   * process.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.incubator.pitch.submitFeedback(
   *     'pitch_qw_synergychain-xyz',
   *   );
   * ```
   */
  submitFeedback(
    pitchId: string,
    body?: PitchSubmitFeedbackParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.put(`/ai/incubator/pitch/${pitchId}/feedback`, { body, ...options });
  }
}

export interface PitchRetrieveDetailsResponse {
  /**
   * AI-generated coaching plan for the entrepreneur.
   */
  aiCoachingPlan?: unknown;

  /**
   * AI's detailed financial model analysis.
   */
  aiFinancialModel?: PitchRetrieveDetailsResponse.AIFinancialModel;

  /**
   * AI's detailed market analysis.
   */
  aiMarketAnalysis?: unknown;

  /**
   * AI's assessment of risks associated with the venture.
   */
  aiRiskAssessment?: unknown;
}

export namespace PitchRetrieveDetailsResponse {
  /**
   * AI's detailed financial model analysis.
   */
  export interface AIFinancialModel {
    costStructureAnalysis?: unknown;

    revenueBreakdown?: unknown;
  }
}

export type PitchSubmitFeedbackResponse = unknown;

export interface PitchSubmitFeedbackParams {}

export declare namespace Pitch {
  export {
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackResponse as PitchSubmitFeedbackResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
