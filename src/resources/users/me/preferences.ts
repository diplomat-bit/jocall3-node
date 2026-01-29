// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Preferences extends APIResource {
  /**
   * Retrieves the user's deep personalization preferences, including AI
   * customization settings, notification channel priorities, thematic choices, and
   * data sharing consents.
   *
   * @example
   * ```ts
   * const preference =
   *   await client.users.me.preferences.retrieve();
   * ```
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<PreferenceRetrieveResponse> {
    return this._client.get('/users/me/preferences', options);
  }

  /**
   * Updates the user's deep personalization preferences, allowing dynamic control
   * over AI behavior, notification delivery, thematic choices, and data privacy
   * settings.
   *
   * @example
   * ```ts
   * const preference =
   *   await client.users.me.preferences.update();
   * ```
   */
  update(
    body?: PreferenceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreferenceUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<PreferenceUpdateResponse>;
  update(
    body: PreferenceUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreferenceUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/users/me/preferences', { body, ...options });
  }
}

/**
 * User's personalized preferences for the platform.
 */
export interface PreferenceRetrieveResponse {
  /**
   * Preferred channels for receiving notifications.
   */
  notificationChannels?: unknown;
}

/**
 * User's personalized preferences for the platform.
 */
export interface PreferenceUpdateResponse {
  /**
   * Preferred channels for receiving notifications.
   */
  notificationChannels?: unknown;
}

export interface PreferenceUpdateParams {
  /**
   * Preferred channels for receiving notifications.
   */
  notificationChannels?: unknown;
}

export declare namespace Preferences {
  export {
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
