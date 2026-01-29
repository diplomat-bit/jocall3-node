// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Sweeping extends APIResource {
  /**
   * Configure Automated Cash Sweeping
   *
   * @example
   * ```ts
   * await client.corporate.treasury.sweeping.configureRules({
   *   sourceAccount: 'sourceAccount',
   *   targetAccount: 'targetAccount',
   *   threshold: 0,
   * });
   * ```
   */
  configureRules(body: SweepingConfigureRulesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/corporate/treasury/sweeping/rules', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Manual Sweep Trigger
   *
   * @example
   * ```ts
   * await client.corporate.treasury.sweeping.execute({
   *   ruleId: 'ruleId',
   * });
   * ```
   */
  execute(body: SweepingExecuteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/corporate/treasury/sweeping/execute', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SweepingConfigureRulesParams {
  sourceAccount: string;

  targetAccount: string;

  threshold: number;

  frequency?: 'daily' | 'weekly' | 'monthly';
}

export interface SweepingExecuteParams {
  ruleId: string;
}

export declare namespace Sweeping {
  export {
    type SweepingConfigureRulesParams as SweepingConfigureRulesParams,
    type SweepingExecuteParams as SweepingExecuteParams,
  };
}
