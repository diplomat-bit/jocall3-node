// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Statements extends APIResource {
  /**
   * Fetches digital statements for a specific account, allowing filtering by date
   * range and format.
   *
   * @example
   * ```ts
   * const statements = await client.accounts.statements.list(
   *   'acc_chase_checking_4567',
   * );
   * ```
   */
  list(
    accountId: string,
    query?: StatementListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<StatementListResponse>;
  list(
    accountId: string,
    query: StatementListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/statements`, { query, ...options });
  }
}

export interface StatementListResponse {
  /**
   * Map of available download URLs for different formats.
   */
  downloadUrls: unknown;
}

export interface StatementListParams {
  /**
   * Desired format for the statement. Use 'application/json' Accept header for
   * download links.
   */
  format?: string;

  /**
   * Month for the statement (1-12).
   */
  month?: number;

  /**
   * Year for the statement.
   */
  year?: number;
}

export declare namespace Statements {
  export {
    type StatementListResponse as StatementListResponse,
    type StatementListParams as StatementListParams,
  };
}
