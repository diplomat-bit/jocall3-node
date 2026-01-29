// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MeAPI from './me/me';
import { Me, MeRetrieveResponse, MeUpdateParams, MeUpdateResponse } from './me/me';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);

  /**
   * Authenticates a user and creates a secure session, returning access tokens. May
   * require MFA depending on user settings.
   *
   * @example
   * ```ts
   * const response = await client.users.login();
   * ```
   */
  login(body: UserLoginParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/users/login', { body, ...options });
  }

  /**
   * Registers a new user account with , initiating the onboarding process. Requires
   * basic user details.
   *
   * @example
   * ```ts
   * const response = await client.users.register();
   * ```
   */
  register(body: UserRegisterParams, options?: Core.RequestOptions): Core.APIPromise<UserRegisterResponse> {
    return this._client.post('/users/register', { body, ...options });
  }
}

export type UserLoginResponse = unknown;

export interface UserRegisterResponse {
  address?: unknown;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: UserRegisterResponse.Preferences;

  /**
   * Security-related status for the user account.
   */
  securityStatus?: unknown;
}

export namespace UserRegisterResponse {
  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: unknown;
  }
}

export interface UserLoginParams {}

export interface UserRegisterParams {
  address?: unknown;
}

Users.Me = Me;

export declare namespace Users {
  export {
    type UserLoginResponse as UserLoginResponse,
    type UserRegisterResponse as UserRegisterResponse,
    type UserLoginParams as UserLoginParams,
    type UserRegisterParams as UserRegisterParams,
  };

  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeUpdateParams as MeUpdateParams,
  };
}
