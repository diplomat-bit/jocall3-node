// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
   * );
   * ```
   */
  update(
    accountId: string,
    body?: OverdraftUpdateParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
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
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/accounts/${accountId}/overdraft-settings`, options);
  }
}

export type OverdraftUpdateResponse = unknown;

export type OverdraftGetResponse = unknown;

export interface OverdraftUpdateParams {}

export declare namespace Overdraft {
  export {
    type OverdraftUpdateResponse as OverdraftUpdateResponse,
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
