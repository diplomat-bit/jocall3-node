// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AuditsAPI from './audits';
import { AuditRequestParams, AuditRequestResponse, AuditRetrieveReportResponse, Audits } from './audits';

export class Compliance extends APIResource {
  audits: AuditsAPI.Audits = new AuditsAPI.Audits(this._client);

  /**
   * Adverse Media Sentiment Screening
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.screenAdverseMedia({
   *     query: 'query',
   *   });
   * ```
   */
  screenAdverseMedia(
    body: ComplianceScreenAdverseMediaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplianceScreenAdverseMediaResponse> {
    return this._client.post('/corporate/compliance/media', { body, ...options });
  }

  /**
   * Politically Exposed Person (PEP) Screening
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.screenPep({
   *     fullName: 'fullName',
   *   });
   * ```
   */
  screenPep(
    body: ComplianceScreenPepParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplianceScreenPepResponse> {
    return this._client.post('/corporate/compliance/pep', { body, ...options });
  }

  /**
   * Enhanced Global Sanctions Screening
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.screenSanctions({
   *     entities: [{}],
   *   });
   * ```
   */
  screenSanctions(
    body: ComplianceScreenSanctionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplianceScreenSanctionsResponse> {
    return this._client.post('/corporate/compliance/sanctions', { body, ...options });
  }
}

export interface ComplianceScreenAdverseMediaResponse {
  negativeNewsLinks?: Array<string>;

  sentimentScore?: number;
}

export interface ComplianceScreenPepResponse {
  details?: string;

  isMatch?: boolean;
}

export interface ComplianceScreenSanctionsResponse {
  hits?: Array<unknown>;

  riskLevel?: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface ComplianceScreenAdverseMediaParams {
  query: string;

  depth?: 'shallow' | 'deep';
}

export interface ComplianceScreenPepParams {
  fullName: string;

  dob?: string;
}

export interface ComplianceScreenSanctionsParams {
  entities: Array<ComplianceScreenSanctionsParams.Entity>;

  checkType?: 'standard' | 'enhanced_due_diligence';
}

export namespace ComplianceScreenSanctionsParams {
  export interface Entity {
    country?: string;

    name?: string;
  }
}

Compliance.Audits = Audits;

export declare namespace Compliance {
  export {
    type ComplianceScreenAdverseMediaResponse as ComplianceScreenAdverseMediaResponse,
    type ComplianceScreenPepResponse as ComplianceScreenPepResponse,
    type ComplianceScreenSanctionsResponse as ComplianceScreenSanctionsResponse,
    type ComplianceScreenAdverseMediaParams as ComplianceScreenAdverseMediaParams,
    type ComplianceScreenPepParams as ComplianceScreenPepParams,
    type ComplianceScreenSanctionsParams as ComplianceScreenSanctionsParams,
  };

  export {
    Audits as Audits,
    type AuditRequestResponse as AuditRequestResponse,
    type AuditRetrieveReportResponse as AuditRetrieveReportResponse,
    type AuditRequestParams as AuditRequestParams,
  };
}
