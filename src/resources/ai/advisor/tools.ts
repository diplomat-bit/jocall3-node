// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Tools extends APIResource {
  /**
   * Retrieves a dynamic manifest of all integrated AI tools that Quantum can invoke
   * and execute, providing details on their capabilities, parameters, and access
   * requirements.
   *
   * @example
   * ```ts
   * const tools = await client.ai.advisor.tools.list();
   * ```
   */
  list(query?: ToolListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ai/advisor/tools', { query, ...options });
  }
}

export type ToolListResponse = unknown;

export interface ToolListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Tools {
  export { type ToolListResponse as ToolListResponse, type ToolListParams as ToolListParams };
}
