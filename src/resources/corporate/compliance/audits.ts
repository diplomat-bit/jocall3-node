// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Audits extends APIResource {
  /**
   * Initiates an AI-powered compliance audit for a specific period or scope,
   * generating a comprehensive report detailing adherence to regulatory frameworks,
   * internal policies, and flagging potential risks.
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.request();
   * ```
   */
  request(body: AuditRequestParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/corporate/compliance/audits', { body, ...options });
  }
}

export type AuditRequestResponse = unknown;

export interface AuditRequestParams {}

export declare namespace Audits {
  export { type AuditRequestResponse as AuditRequestResponse, type AuditRequestParams as AuditRequestParams };
}
