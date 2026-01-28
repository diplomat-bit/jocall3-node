// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Overdraft extends APIResource {
  /**
   * Updates the overdraft protection settings for a specific account, enabling or
   * disabling protection and configuring preferences.
   *
   * @example
   * ```ts
   * const overdraft = await client.accounts.overdraft.update(
   *   'acc_chase_checking_4567',
   *   { feePreference: 'decline_if_over_limit' },
   * );
   * ```
   */
  update(
    accountId: string,
    body?: OverdraftUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverdraftUpdateResponse>;
  update(accountId: string, options?: Core.RequestOptions): Core.APIPromise<OverdraftUpdateResponse>;
  update(
    accountId: string,
    body: OverdraftUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverdraftUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(accountId, {}, body);
    }
    return this._client.put(`/accounts/${accountId}/overdraft-settings`, { body, ...options });
  }

  /**
   * Retrieves the current overdraft protection settings for a specific account.
   *
   * @example
   * ```ts
   * const overdraft = await client.accounts.overdraft.get(
   *   'acc_chase_checking_4567',
   * );
   * ```
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<OverdraftGetResponse> {
    return this._client.get(`/accounts/${accountId}/overdraft-settings`, options);
  }
}

export interface OverdraftUpdateResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftGetResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftUpdateParams {
  enabled?: boolean;

  feePreference?: string;

  linkToSavings?: boolean;
}

export declare namespace Overdraft {
  export {
    type OverdraftUpdateResponse as OverdraftUpdateResponse,
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
