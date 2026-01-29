// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Pitch extends APIResource {
  /**
   * Get Full Pitch AI Deep Dive
   */
  retrieveDetails(
    pitchId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PitchRetrieveDetailsResponse> {
    return this._client.get(`/ai/incubator/pitch/${pitchId}/details`, options);
  }

  /**
   * Submit Answers to AI Follow-up Questions
   */
  submitFeedback(
    pitchId: string,
    body: PitchSubmitFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/ai/incubator/pitch/${pitchId}/feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PitchRetrieveDetailsResponse {
  aiFeedback?: string;

  fundingEligibility?: boolean;
}

export interface PitchSubmitFeedbackParams {
  answers: Array<unknown>;
}

export declare namespace Pitch {
  export {
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
