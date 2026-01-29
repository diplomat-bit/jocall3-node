// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Biometrics extends APIResource {
  /**
   * Remove All Biometric Data
   */
  delete(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/users/me/biometrics', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Enroll New Biometric Signature
   */
  enroll(body: BiometricEnrollParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/users/me/biometrics/enroll', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Biometric Enrollment Status
   */
  retrieveStatus(options?: Core.RequestOptions): Core.APIPromise<BiometricRetrieveStatusResponse> {
    return this._client.get('/users/me/biometrics', options);
  }

  /**
   * Verify Biometric Data for Sensitive Operations
   */
  verify(
    body: BiometricVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BiometricVerifyResponse> {
    return this._client.post('/users/me/biometrics/verify', { body, ...options });
  }
}

export interface BiometricRetrieveStatusResponse {
  biometricsEnrolled?: boolean;

  lastUsed?: string;
}

export interface BiometricVerifyResponse {
  verificationStatus?: string;
}

export interface BiometricEnrollParams {
  biometricType: 'fingerprint' | 'facial_recognition';

  /**
   * Public key or hash of signature
   */
  signature: string;
}

export interface BiometricVerifyParams {
  biometricSignature: string;
}

export declare namespace Biometrics {
  export {
    type BiometricRetrieveStatusResponse as BiometricRetrieveStatusResponse,
    type BiometricVerifyResponse as BiometricVerifyResponse,
    type BiometricEnrollParams as BiometricEnrollParams,
    type BiometricVerifyParams as BiometricVerifyParams,
  };
}
