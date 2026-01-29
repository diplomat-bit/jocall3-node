// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Decisions extends APIResource {
  /**
   * Fetches the deep neural logic behind why a loan was approved or denied.
   */
  getRationale(
    decisionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DecisionGetRationaleResponse> {
    return this._client.get(`/lending/decisions/${decisionId}/rationale`, options);
  }
}

export interface DecisionGetRationaleResponse {
  approved?: boolean;

  nextSteps?: string;

  reasoningNodes?: Array<string>;

  riskVectorAnalysis?: unknown;
}

export declare namespace Decisions {
  export { type DecisionGetRationaleResponse as DecisionGetRationaleResponse };
}
