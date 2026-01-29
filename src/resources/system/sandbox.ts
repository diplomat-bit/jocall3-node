// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sandbox extends APIResource {
  /**
   * Force Specific API Error (For Testing)
   *
   * @example
   * ```ts
   * const response = await client.system.sandbox.forceError({
   *   errorCode: 500,
   * });
   * ```
   */
  forceError(
    body: SandboxForceErrorParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SandboxForceErrorResponse> {
    return this._client.post('/system/sandbox/simulate-error', { body, ...options });
  }

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
}

export interface SandboxForceErrorResponse {
  code: string;

  message: string;

  timestamp?: string;
}

export interface SandboxForceErrorParams {
  errorCode: number;
}

export declare namespace Sandbox {
  export {
    type SandboxForceErrorResponse as SandboxForceErrorResponse,
    type SandboxForceErrorParams as SandboxForceErrorParams,
  };
}
