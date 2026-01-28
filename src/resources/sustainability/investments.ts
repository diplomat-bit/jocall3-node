// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Investments extends APIResource {
  /**
   * Provides an AI-driven analysis of the Environmental, Social, and Governance
   * (ESG) impact of the user's entire investment portfolio, benchmarking against
   * industry standards and suggesting more sustainable alternatives.
   */
  analyzeImpact(options?: Core.RequestOptions): Core.APIPromise<InvestmentAnalyzeImpactResponse> {
    return this._client.get('/sustainability/investments/impact', options);
  }
}

export interface InvestmentAnalyzeImpactResponse {
  /**
   * Breakdown of the portfolio's ESG score by individual factors.
   */
  breakdownByESGFactors: unknown;
}

export declare namespace Investments {
  export { type InvestmentAnalyzeImpactResponse as InvestmentAnalyzeImpactResponse };
}
