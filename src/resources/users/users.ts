// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PasswordResetAPI from './password-reset';
import {
  PasswordReset,
  PasswordResetConfirmParams,
  PasswordResetConfirmResponse,
  PasswordResetInitiateParams,
  PasswordResetInitiateResponse,
} from './password-reset';
import * as MeAPI from './me/me';
import { Me, MeRetrieveResponse, MeUpdateParams, MeUpdateResponse } from './me/me';

export class Users extends APIResource {
  passwordReset: PasswordResetAPI.PasswordReset = new PasswordResetAPI.PasswordReset(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);

  /**
   * User Login and Session Creation
   */
  login(body: UserLoginParams, options?: Core.RequestOptions): Core.APIPromise<UserLoginResponse> {
    return this._client.post('/users/login', { body, ...options });
  }

  /**
   * Terminate User Session
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/users/logout', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Initiates the onboarding process. Requires unique email and name.
   */
  register(body: UserRegisterParams, options?: Core.RequestOptions): Core.APIPromise<UserRegisterResponse> {
    return this._client.post('/users/register', { body, ...options });
  }
}

export interface UserLoginResponse {
  /**
   * JWT for bearerAuth
   */
  accessToken: string;

  /**
   * Seconds until expiry
   */
  expiresIn: number;

  refreshToken: string;

  tokenType: string;
}

export interface UserRegisterResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: UserRegisterResponse.Address;

  phone?: string;

  preferences?: UserRegisterResponse.Preferences;

  securityStatus?: UserRegisterResponse.SecurityStatus;
}

export namespace UserRegisterResponse {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  export interface Preferences {
    notificationChannels?: unknown;

    theme?: string;
  }

  export interface SecurityStatus {
    lastLogin?: string;

    twoFactorEnabled?: boolean;
  }
}

export interface UserLoginParams {
  email: string;

  password: string;
}

export interface UserRegisterParams {
  /**
   * Primary login email
   */
  email: string;

  /**
   * Full legal name
   */
  name: string;

  /**
   * Secure hashable string
   */
  password: string;

  address?: UserRegisterParams.Address;

  /**
   * International format phone number
   */
  phone?: string;
}

export namespace UserRegisterParams {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }
}

Users.PasswordReset = PasswordReset;
Users.Me = Me;

export declare namespace Users {
  export {
    type UserLoginResponse as UserLoginResponse,
    type UserRegisterResponse as UserRegisterResponse,
    type UserLoginParams as UserLoginParams,
    type UserRegisterParams as UserRegisterParams,
  };

  export {
    PasswordReset as PasswordReset,
    type PasswordResetConfirmResponse as PasswordResetConfirmResponse,
    type PasswordResetInitiateResponse as PasswordResetInitiateResponse,
    type PasswordResetConfirmParams as PasswordResetConfirmParams,
    type PasswordResetInitiateParams as PasswordResetInitiateParams,
  };

  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeUpdateParams as MeUpdateParams,
  };
}
