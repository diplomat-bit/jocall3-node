// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Overdraft extends APIResource {
  /**
   * Get Overdraft Settings
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.overdraft.retrieveSettings(
   *     'accountId',
   *   );
   * ```
   */
  retrieveSettings(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverdraftRetrieveSettingsResponse> {
    return this._client.get(`/accounts/${accountId}/overdraft-settings`, options);
  }

  /**
   * Update Overdraft Settings
   *
   * @example
   * ```ts
   * await client.accounts.overdraft.updateSettings('accountId');
   * ```
   */
  updateSettings(
    accountId: string,
    body?: OverdraftUpdateSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  updateSettings(accountId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  updateSettings(
    accountId: string,
    body: OverdraftUpdateSettingsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.updateSettings(accountId, {}, body);
    }
    return this._client.put(`/accounts/${accountId}/overdraft-settings`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OverdraftRetrieveSettingsResponse {
  enabled?: boolean;

  feePreference?: string;

  limit?: number;
}

export interface OverdraftUpdateSettingsParams {
  enabled?: boolean;

  limit?: number;
}

export declare namespace Overdraft {
  export {
    type OverdraftRetrieveSettingsResponse as OverdraftRetrieveSettingsResponse,
    type OverdraftUpdateSettingsParams as OverdraftUpdateSettingsParams,
  };
}
