// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Overdraft extends APIResource {
  /**
   * Update Overdraft Settings
   *
   * @example
   * ```ts
   * await client.accounts.overdraft.update('accountId');
   * ```
   */
  update(
    accountId: string,
    body?: OverdraftUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(accountId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    accountId: string,
    body: OverdraftUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(accountId, {}, body);
    }
    return this._client.put(`/accounts/${accountId}/overdraft-settings`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Overdraft Settings
   *
   * @example
   * ```ts
   * const overdraft = await client.accounts.overdraft.get(
   *   'accountId',
   * );
   * ```
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<OverdraftGetResponse> {
    return this._client.get(`/accounts/${accountId}/overdraft-settings`, options);
  }
}

export interface OverdraftGetResponse {
  enabled?: boolean;

  feePreference?: string;

  limit?: number;
}

export interface OverdraftUpdateParams {
  enabled?: boolean;

  limit?: number;
}

export declare namespace Overdraft {
  export {
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
