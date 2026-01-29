// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Verification extends APIResource {
  /**
   * Compare biometric samples
   *
   * @example
   * ```ts
   * await client.system.verification.compareBiometrics({
   *   sample_a: 'sample_a',
   *   sample_b: 'sample_b',
   * });
   * ```
   */
  compareBiometrics(
    body: VerificationCompareBiometricsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/system/verification/biometric-comparison', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Verify identity document
   *
   * @example
   * ```ts
   * await client.system.verification.verifyDocument({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  verifyDocument(
    body: VerificationVerifyDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(
      '/system/verification/document',
      Core.multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface VerificationCompareBiometricsParams {
  sample_a: string;

  sample_b: string;
}

export interface VerificationVerifyDocumentParams {
  file: Core.Uploadable;

  type?: string;
}

export declare namespace Verification {
  export {
    type VerificationCompareBiometricsParams as VerificationCompareBiometricsParams,
    type VerificationVerifyDocumentParams as VerificationVerifyDocumentParams,
  };
}
