// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as BiometricsAPI from './biometrics';
import {
  BiometricEnrollParams,
  BiometricRetrieveStatusResponse,
  BiometricVerifyParams,
  BiometricVerifyResponse,
  Biometrics,
} from './biometrics';
import * as DevicesAPI from './devices';
import { DeviceListResponse, DeviceRegisterParams, Devices } from './devices';
import * as PreferencesAPI from './preferences';
import {
  PreferenceRetrieveResponse,
  PreferenceUpdateParams,
  PreferenceUpdateResponse,
  Preferences as PreferencesAPIPreferences,
} from './preferences';
import * as SecurityAPI from './security';
import {
  Security,
  SecurityRetrieveLogParams,
  SecurityRetrieveLogResponse,
  SecurityRotateKeysResponse,
} from './security';

export class Me extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  biometrics: BiometricsAPI.Biometrics = new BiometricsAPI.Biometrics(this._client);

  /**
   * Retrieve Comprehensive Current User Profile
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }

  /**
   * Update Current User Profile
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

  /**
   * Delete User Account
   */
  delete(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/users/me', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface MeRetrieveResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: MeRetrieveResponse.Address;

  phone?: string;

  preferences?: MeRetrieveResponse.Preferences;

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

  export interface Preferences {
    notificationChannels?: unknown;

    theme?: string;
  }

  export interface SecurityStatus {
    lastLogin?: string;

    twoFactorEnabled?: boolean;
  }
}

export interface MeUpdateResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: MeUpdateResponse.Address;

  phone?: string;

  preferences?: MeUpdateResponse.Preferences;

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

  export interface Preferences {
    notificationChannels?: unknown;

    theme?: string;
  }

  export interface SecurityStatus {
    lastLogin?: string;

    twoFactorEnabled?: boolean;
  }
}

export interface MeUpdateParams {
  address?: MeUpdateParams.Address;

  name?: string;

  phone?: string;
}

export namespace MeUpdateParams {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }
}

Me.Preferences = PreferencesAPIPreferences;
Me.Security = Security;
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
    Security as Security,
    type SecurityRetrieveLogResponse as SecurityRetrieveLogResponse,
    type SecurityRotateKeysResponse as SecurityRotateKeysResponse,
    type SecurityRetrieveLogParams as SecurityRetrieveLogParams,
  };

  export {
    Devices as Devices,
    type DeviceListResponse as DeviceListResponse,
    type DeviceRegisterParams as DeviceRegisterParams,
  };

  export {
    Biometrics as Biometrics,
    type BiometricRetrieveStatusResponse as BiometricRetrieveStatusResponse,
    type BiometricVerifyResponse as BiometricVerifyResponse,
    type BiometricEnrollParams as BiometricEnrollParams,
    type BiometricVerifyParams as BiometricVerifyParams,
  };
}
