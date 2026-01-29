// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Devices extends APIResource {
  /**
   * Retrieves a list of all devices linked to the user's account, including mobile
   * phones, tablets, and desktops, indicating their last active status and security
   * posture.
   *
   * @example
   * ```ts
   * const devices = await client.users.me.devices.list();
   * ```
   */
  list(query?: DeviceListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: DeviceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/users/me/devices', { query, ...options });
  }
}

export type DeviceListResponse = unknown;

export interface DeviceListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Devices {
  export { type DeviceListResponse as DeviceListResponse, type DeviceListParams as DeviceListParams };
}
