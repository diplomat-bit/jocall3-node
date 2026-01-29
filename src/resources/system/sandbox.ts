// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sandbox extends APIResource {
  /**
   * Reset Sandbox Ledger Data
   *
   * @example
   * ```ts
   * await client.system.sandbox.reset();
   * ```
   */
  reset(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/system/sandbox/reset', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Force Specific API Error (For Testing)
   *
   * @example
   * ```ts
   * const response = await client.system.sandbox.simulateError({
   *   errorCode: 500,
   * });
   * ```
   */
  simulateError(
    body: SandboxSimulateErrorParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SandboxSimulateErrorResponse> {
    return this._client.post('/system/sandbox/simulate-error', { body, ...options });
  }
}

export interface SandboxSimulateErrorResponse {
  code: string;

  message: string;

  timestamp: string;
}

export interface SandboxSimulateErrorParams {
  errorCode: number;
}

export declare namespace Sandbox {
  export {
    type SandboxSimulateErrorResponse as SandboxSimulateErrorResponse,
    type SandboxSimulateErrorParams as SandboxSimulateErrorParams,
  };
}
