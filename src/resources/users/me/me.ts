// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as BiometricsAPI from './biometrics';
import {
  BiometricRetrieveStatusResponse,
  BiometricVerifyParams,
  BiometricVerifyResponse,
  Biometrics,
} from './biometrics';
import * as DevicesAPI from './devices';
import { DeviceListParams, DeviceListResponse, Devices } from './devices';
import * as PreferencesAPI from './preferences';
import {
  PreferenceRetrieveResponse,
  PreferenceUpdateParams,
  PreferenceUpdateResponse,
  Preferences as PreferencesAPIPreferences,
} from './preferences';

export class Me extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  biometrics: BiometricsAPI.Biometrics = new BiometricsAPI.Biometrics(this._client);

  /**
   * Fetches the complete and dynamically updated profile information for the
   * currently authenticated user, encompassing personal details, security status,
   * gamification level, loyalty points, and linked identity attributes.
   *
   * @example
   * ```ts
   * const me = await client.users.me.retrieve();
   * ```
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }

  /**
   * Updates selected fields of the currently authenticated user's profile
   * information.
   *
   * @example
   * ```ts
   * const me = await client.users.me.update({
   *   name: 'Quantum Visionary Pro',
   *   phone: '+1-555-999-0000',
   * });
   * ```
   */
  update(body?: MeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<MeUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<MeUpdateResponse>;
  update(
    body: MeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/users/me', { body, ...options });
  }
}

export interface MeRetrieveResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: MeRetrieveResponse.Address;

  aiPersona?: string;

  dateOfBirth?: string;

  gamificationLevel?: number;

  loyaltyPoints?: number;

  loyaltyTier?: string;

  phone?: string;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeRetrieveResponse.Preferences;

  /**
   * Security-related status for the user account.
   */
  securityStatus?: MeRetrieveResponse.SecurityStatus;
}

export namespace MeRetrieveResponse {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    aiInteractionMode?: string;

    dataSharingConsent?: boolean;

    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: Preferences.NotificationChannels;

    preferredLanguage?: string;

    theme?: string;

    transactionGrouping?: string;
  }

  export namespace Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    export interface NotificationChannels {
      email?: boolean;

      inApp?: boolean;

      push?: boolean;

      sms?: boolean;
    }
  }

  /**
   * Security-related status for the user account.
   */
  export interface SecurityStatus {
    biometricsEnrolled?: boolean;

    lastLogin?: string;

    lastLoginIp?: string;

    twoFactorEnabled?: boolean;
  }
}

export interface MeUpdateResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: MeUpdateResponse.Address;

  aiPersona?: string;

  dateOfBirth?: string;

  gamificationLevel?: number;

  loyaltyPoints?: number;

  loyaltyTier?: string;

  phone?: string;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeUpdateResponse.Preferences;

  /**
   * Security-related status for the user account.
   */
  securityStatus?: MeUpdateResponse.SecurityStatus;
}

export namespace MeUpdateResponse {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    aiInteractionMode?: string;

    dataSharingConsent?: boolean;

    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: Preferences.NotificationChannels;

    preferredLanguage?: string;

    theme?: string;

    transactionGrouping?: string;
  }

  export namespace Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    export interface NotificationChannels {
      email?: boolean;

      inApp?: boolean;

      push?: boolean;

      sms?: boolean;
    }
  }

  /**
   * Security-related status for the user account.
   */
  export interface SecurityStatus {
    biometricsEnrolled?: boolean;

    lastLogin?: string;

    lastLoginIp?: string;

    twoFactorEnabled?: boolean;
  }
}

export interface MeUpdateParams {
  address?: MeUpdateParams.Address;

  name?: string;

  phone?: string;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeUpdateParams.Preferences;
}

export namespace MeUpdateParams {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    aiInteractionMode?: string;

    dataSharingConsent?: boolean;

    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: Preferences.NotificationChannels;

    preferredLanguage?: string;

    theme?: string;

    transactionGrouping?: string;
  }

  export namespace Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    export interface NotificationChannels {
      email?: boolean;

      inApp?: boolean;

      push?: boolean;

      sms?: boolean;
    }
  }
}

Me.Preferences = PreferencesAPIPreferences;
Me.Devices = Devices;
Me.Biometrics = Biometrics;

export declare namespace Me {
  export {
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeUpdateParams as MeUpdateParams,
  };

  export {
    PreferencesAPIPreferences as Preferences,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };

  export {
    Devices as Devices,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
  };

  export {
    Biometrics as Biometrics,
    type BiometricRetrieveStatusResponse as BiometricRetrieveStatusResponse,
    type BiometricVerifyResponse as BiometricVerifyResponse,
    type BiometricVerifyParams as BiometricVerifyParams,
  };
}
