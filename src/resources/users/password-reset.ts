// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class PasswordReset extends APIResource {
  /**
   * Confirms the password reset using the received verification code and sets a new
   * password.
   *
   * @example
   * ```ts
   * const response = await client.users.passwordReset.confirm();
   * ```
   */
  confirm(body: PasswordResetConfirmParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/users/password-reset/confirm', { body, ...options });
  }

  /**
   * Starts the password reset flow by sending a verification code or link to the
   * user's registered email or phone.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.passwordReset.initiate();
   * ```
   */
  initiate(body: PasswordResetInitiateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/users/password-reset/initiate', { body, ...options });
  }
}

export type PasswordResetConfirmResponse = unknown;

export type PasswordResetInitiateResponse = unknown;

export interface PasswordResetConfirmParams {}

export interface PasswordResetInitiateParams {}

export declare namespace PasswordReset {
  export {
    type PasswordResetConfirmResponse as PasswordResetConfirmResponse,
    type PasswordResetInitiateResponse as PasswordResetInitiateResponse,
    type PasswordResetConfirmParams as PasswordResetConfirmParams,
    type PasswordResetInitiateParams as PasswordResetInitiateParams,
  };
}
