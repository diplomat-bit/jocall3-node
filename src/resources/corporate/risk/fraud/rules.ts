// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Rules extends APIResource {
  /**
   * Create Custom Fraud Rule
   *
   * @example
   * ```ts
   * await client.corporate.risk.fraud.rules.create({
   *   logic: {},
   *   name: 'name',
   * });
   * ```
   */
  create(body: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/corporate/risk/fraud/rules', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Active Fraud Rule Set
   *
   * @example
   * ```ts
   * const rules =
   *   await client.corporate.risk.fraud.rules.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RuleListResponse> {
    return this._client.get('/corporate/risk/fraud/rules', options);
  }
}

export interface RuleListResponse {
  rules?: Array<unknown>;
}

export interface RuleCreateParams {
  logic: unknown;

  name: string;
}

export declare namespace Rules {
  export { type RuleListResponse as RuleListResponse, type RuleCreateParams as RuleCreateParams };
}
