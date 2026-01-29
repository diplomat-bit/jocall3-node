// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class Rules extends APIResource {
  /**
   * Updates an existing custom AI-powered fraud detection rule, modifying its
   * criteria, actions, or status.
   *
   * @example
   * ```ts
   * const rule = await client.corporate.risk.fraud.rules.update(
   *   'fraud_rule_high_value_inactive',
   *   {
   *     action: {
   *       type: 'flag',
   *       details: 'Flag for manual review only, do not block.',
   *     },
   *     criteria: {
   *       transactionAmountMin: 7500,
   *       accountInactivityDays: 60,
   *     },
   *   },
   * );
   * ```
   */
  update(
    ruleId: string,
    body?: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse>;
  update(ruleId: string, options?: Core.RequestOptions): Core.APIPromise<RuleUpdateResponse>;
  update(
    ruleId: string,
    body: RuleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(ruleId, {}, body);
    }
    return this._client.put(`/corporate/risk/fraud/rules/${ruleId}`, { body, ...options });
  }

  /**
   * Retrieves a list of AI-powered fraud detection rules currently active for the
   * organization, including their parameters, thresholds, and associated actions
   * (e.g., flag, block, alert).
   *
   * @example
   * ```ts
   * const rules =
   *   await client.corporate.risk.fraud.rules.list();
   * ```
   */
  list(query?: RuleListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/corporate/risk/fraud/rules', { query, ...options });
  }
}

export interface RuleUpdateResponse {
  /**
   * Action to take when a fraud rule is triggered.
   */
  action: unknown;

  /**
   * Criteria that define when a fraud rule should trigger.
   */
  criteria: unknown;
}

export type RuleListResponse = unknown;

export interface RuleUpdateParams {
  /**
   * Action to take when a fraud rule is triggered.
   */
  action?: unknown;

  /**
   * Criteria that define when a fraud rule should trigger.
   */
  criteria?: unknown;
}

export interface RuleListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
  };
}
