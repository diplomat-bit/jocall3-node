// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
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
  Preferences,
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

  retrieve(options?: Core.RequestOptions): Core.APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }

  update(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/users/me', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  delete(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/users/me', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface MeRetrieveResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: Shared.Address;

  preferences?: { [key: string]: unknown };

  securityStatus?: MeRetrieveResponse.SecurityStatus;
}

export namespace MeRetrieveResponse {
  export interface SecurityStatus {
    lastLogin?: string;

    twoFactorEnabled?: boolean;
  }
}

Me.Preferences = Preferences;
Me.Security = Security;
Me.Devices = Devices;
Me.Biometrics = Biometrics;

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };

  export {
    Preferences as Preferences,
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
