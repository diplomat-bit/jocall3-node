// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Statements extends APIResource {
  /**
   * List Available Statements
   *
   * @example
   * ```ts
   * const statements = await client.accounts.statements.list(
   *   'accountId',
   * );
   * ```
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<StatementListResponse> {
    return this._client.get(`/accounts/${accountId}/statements`, options);
  }

  /**
   * Download Statement PDF
   *
   * @example
   * ```ts
   * const response = await client.accounts.statements.download(
   *   'accountId',
   *   'statementId',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(accountId: string, statementId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountId}/statements/${statementId}/pdf`, {
      ...options,
      headers: { Accept: 'application/pdf', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface StatementListResponse {
  data?: Array<StatementListResponse.Data>;
}

export namespace StatementListResponse {
  export interface Data {
    id?: string;

    issueDate?: string;

    period?: string;
  }
}

export declare namespace Statements {
  export { type StatementListResponse as StatementListResponse };
}
