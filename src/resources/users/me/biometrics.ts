// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Biometrics extends APIResource {
  /**
   * Retrieves the current status of biometric enrollments for the authenticated
   * user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.me.biometrics.retrieveStatus();
   * ```
   */
  retrieveStatus(options?: Core.RequestOptions): Core.APIPromise<BiometricRetrieveStatusResponse> {
    return this._client.get('/users/me/biometrics', options);
  }

  /**
   * Performs real-time biometric verification to authorize sensitive actions or
   * access protected resources, using a one-time biometric signature.
   *
   * @example
   * ```ts
   * const response = await client.users.me.biometrics.verify({
   *   biometricSignature:
   *     'base64encoded_one_time_fingerprint_proof',
   *   biometricType: 'fingerprint',
   *   deviceId: 'dev_mobile_android_ddeeff',
   * });
   * ```
   */
  verify(
    body: BiometricVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BiometricVerifyResponse> {
    return this._client.post('/users/me/biometrics/verify', { body, ...options });
  }
}

/**
 * Current biometric enrollment status for a user.
 */
export interface BiometricRetrieveStatusResponse {
  biometricsEnrolled: boolean;

  enrolledBiometrics: Array<BiometricRetrieveStatusResponse.EnrolledBiometric>;

  lastUsed?: string;
}

export namespace BiometricRetrieveStatusResponse {
  export interface EnrolledBiometric {
    deviceId?: string;

    enrollmentDate?: string;

    type?: string;
  }
}

export interface BiometricVerifyResponse {
  message?: string;

  verificationStatus?: string;
}

export interface BiometricVerifyParams {
  biometricSignature: string;

  biometricType: string;

  deviceId: string;
}

export declare namespace Biometrics {
  export {
    type BiometricRetrieveStatusResponse as BiometricRetrieveStatusResponse,
    type BiometricVerifyResponse as BiometricVerifyResponse,
    type BiometricVerifyParams as BiometricVerifyParams,
  };
}
