// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class PasswordReset extends APIResource {
  /**
   * Confirm Password Reset with Code
   */
  confirm(
    body: PasswordResetConfirmParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PasswordResetConfirmResponse> {
    return this._client.post('/users/password-reset/confirm', { body, ...options });
  }

  /**
   * Initiate Password Reset Flow
   */
  initiate(
    body: PasswordResetInitiateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PasswordResetInitiateResponse> {
    return this._client.post('/users/password-reset/initiate', { body, ...options });
  }
}

export interface PasswordResetConfirmResponse {
  message?: string;
}

export interface PasswordResetInitiateResponse {
  message?: string;
}

export interface PasswordResetConfirmParams {
  identifier: string;

  newPassword: string;

  /**
   * The 6-digit code sent to user
   */
  verificationCode: string;
}

export interface PasswordResetInitiateParams {
  /**
   * Email or phone number
   */
  identifier: string;
}

export declare namespace PasswordReset {
  export {
    type PasswordResetConfirmResponse as PasswordResetConfirmResponse,
    type PasswordResetInitiateResponse as PasswordResetInitiateResponse,
    type PasswordResetConfirmParams as PasswordResetConfirmParams,
    type PasswordResetInitiateParams as PasswordResetInitiateParams,
  };
}
