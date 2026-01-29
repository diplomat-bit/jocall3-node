// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Status extends APIResource {
  /**
   * Get Global Infrastructure Health
   *
   * @example
   * ```ts
   * const status = await client.system.status.retrieve();
   * ```
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse> {
    return this._client.get('/system/status', options);
  }
}

export interface StatusRetrieveResponse {
  activeNodes?: number;

  apiStatus?: string;

  geminiUptime?: string;

  mockServerLatency?: number;
}

export declare namespace Status {
  export { type StatusRetrieveResponse as StatusRetrieveResponse };
}
