// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Analysis extends APIResource {
  /**
   * Generate AI SWOT Analysis
   */
  generateSwot(
    body: AnalysisGenerateSwotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalysisGenerateSwotResponse> {
    return this._client.post('/ai/incubator/analysis/swot', { body, ...options });
  }

  /**
   * Generate Automated Competitor Landscape
   */
  scanCompetitors(
    body: AnalysisScanCompetitorsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalysisScanCompetitorsResponse> {
    return this._client.post('/ai/incubator/analysis/competitors', { body, ...options });
  }
}

export interface AnalysisGenerateSwotResponse {
  strengths?: Array<string>;

  weaknesses?: Array<string>;
}

export interface AnalysisScanCompetitorsResponse {
  competitors?: Array<unknown>;

  marketShareAnalysis?: string;
}

export interface AnalysisGenerateSwotParams {
  businessContext: string;
}

export interface AnalysisScanCompetitorsParams {
  industry: string;

  niche: string;
}

export declare namespace Analysis {
  export {
    type AnalysisGenerateSwotResponse as AnalysisGenerateSwotResponse,
    type AnalysisScanCompetitorsResponse as AnalysisScanCompetitorsResponse,
    type AnalysisGenerateSwotParams as AnalysisGenerateSwotParams,
    type AnalysisScanCompetitorsParams as AnalysisScanCompetitorsParams,
  };
}
