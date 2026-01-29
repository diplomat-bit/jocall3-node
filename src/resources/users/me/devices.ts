// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Devices extends APIResource {
  /**
   * List Connected Devices
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DeviceListResponse> {
    return this._client.get('/users/me/devices', options);
  }

  /**
   * De-register a Device
   */
  deregister(deviceId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/users/me/devices/${deviceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Register New Trusted Device
   */
  register(body: DeviceRegisterParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/users/me/devices', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DeviceListResponse {
  data?: Array<DeviceListResponse.Data>;
}

export namespace DeviceListResponse {
  export interface Data {
    id?: string;

    os?: string;

    trustLevel?: 'trusted' | 'untrusted';

    type?: string;
  }
}

export interface DeviceRegisterParams {
  deviceId: string;

  type: string;

  pushToken?: string;
}

export declare namespace Devices {
  export { type DeviceListResponse as DeviceListResponse, type DeviceRegisterParams as DeviceRegisterParams };
}
