// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Pooling extends APIResource {
  /**
   * Configure liquidity pooling
   *
   * @example
   * ```ts
   * await client.corporate.treasury.pooling.configure();
   * ```
   */
  configure(body?: PoolingConfigureParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  configure(options?: Core.RequestOptions): Core.APIPromise<void>;
  configure(
    body: PoolingConfigureParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.configure({}, body);
    }
    return this._client.post('/corporate/treasury/liquidity/pooling', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PoolingConfigureParams {
  source_account_ids?: Array<string>;

  target_account_id?: string;
}

export declare namespace Pooling {
  export { type PoolingConfigureParams as PoolingConfigureParams };
}
