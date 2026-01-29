// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Overdraft extends APIResource {
  /**
   * Retrieves the current overdraft protection settings for a specific account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.overdraft.retrieveSettings(
   *     'acc_chase_checking_4567',
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
   * Updates the overdraft protection settings for a specific account, enabling or
   * disabling protection and configuring preferences.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.overdraft.updateSettings(
   *     'acc_chase_checking_4567',
   *     { feePreference: 'decline_if_over_limit' },
   *   );
   * ```
   */
  updateSettings(
    accountId: string,
    body?: OverdraftUpdateSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverdraftUpdateSettingsResponse>;
  updateSettings(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverdraftUpdateSettingsResponse>;
  updateSettings(
    accountId: string,
    body: OverdraftUpdateSettingsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverdraftUpdateSettingsResponse> {
    if (isRequestOptions(body)) {
      return this.updateSettings(accountId, {}, body);
    }
    return this._client.put(`/accounts/${accountId}/overdraft-settings`, { body, ...options });
  }
}

export interface OverdraftRetrieveSettingsResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftUpdateSettingsResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftUpdateSettingsParams {
  enabled?: boolean;

  feePreference?: string;

  linkToSavings?: boolean;
}

export declare namespace Overdraft {
  export {
    type OverdraftRetrieveSettingsResponse as OverdraftRetrieveSettingsResponse,
    type OverdraftUpdateSettingsResponse as OverdraftUpdateSettingsResponse,
    type OverdraftUpdateSettingsParams as OverdraftUpdateSettingsParams,
  };
}
