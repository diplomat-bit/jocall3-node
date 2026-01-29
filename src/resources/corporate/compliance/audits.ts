// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Audits extends APIResource {
  /**
   * Request Real-time Compliance Audit
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.request({
   *     auditScope: 'auditScope',
   *     endDate: '2019-12-27',
   *     startDate: '2019-12-27',
   *   });
   * ```
   */
  request(body: AuditRequestParams, options?: Core.RequestOptions): Core.APIPromise<AuditRequestResponse> {
    return this._client.post('/corporate/compliance/audits', { body, ...options });
  }

  /**
   * Retrieve AI-Generated Audit Report
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.retrieveReport(
   *     'auditId',
   *   );
   * ```
   */
  retrieveReport(
    auditId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditRetrieveReportResponse> {
    return this._client.get(`/corporate/compliance/audits/${auditId}/report`, options);
  }
}

export interface AuditRequestResponse {
  auditId?: string;
}

export interface AuditRetrieveReportResponse {
  auditId: string;

  overallComplianceScore: number;

  status: string;

  auditDate?: string;

  findings?: Array<unknown>;
}

export interface AuditRequestParams {
  auditScope: string;

  endDate: string;

  startDate: string;
}

export declare namespace Audits {
  export {
    type AuditRequestResponse as AuditRequestResponse,
    type AuditRetrieveReportResponse as AuditRetrieveReportResponse,
    type AuditRequestParams as AuditRequestParams,
  };
}
