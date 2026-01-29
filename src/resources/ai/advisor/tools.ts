// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Tools extends APIResource {
  /**
   * List AI-Executable Financial Tools
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ToolListResponse> {
    return this._client.get('/ai/advisor/tools', options);
  }

  /**
   * Grant AI Execution Permission for Tool
   */
  enable(toolId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/ai/advisor/tools/${toolId}/enable`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ToolListResponse {
  data?: Array<unknown>;
}

export declare namespace Tools {
  export { type ToolListResponse as ToolListResponse };
}
