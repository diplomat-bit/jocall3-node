// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Preferences extends APIResource {
  /**
   * Get User Personalization Preferences
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<PreferenceRetrieveResponse> {
    return this._client.get('/users/me/preferences', options);
  }

  /**
   * Update User Personalization Preferences
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

export interface PreferenceRetrieveResponse {
  aiInteractionMode?: 'proactive' | 'reactive' | 'silent';

  dataSharingConsent?: boolean;

  preferredLanguage?: string;

  theme?: string;
}

export interface PreferenceUpdateResponse {
  aiInteractionMode?: string;

  theme?: string;
}

export interface PreferenceUpdateParams {
  aiInteractionMode?: string;

  theme?: string;
}

export declare namespace Preferences {
  export {
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
