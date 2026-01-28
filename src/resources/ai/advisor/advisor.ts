// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ToolsAPI from './tools';
import { ToolListParams, ToolListResponse, Tools } from './tools';

export class Advisor extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * Initiates or continues a sophisticated conversation with Quantum, the AI
   * Advisor. Quantum can provide advanced financial insights, execute complex tasks
   * via an expanding suite of intelligent tools, and learn from user interactions to
   * offer hyper-personalized guidance.
   *
   * @example
   * ```ts
   * const response = await client.ai.advisor.chat();
   * ```
   */
  chat(body?: AdvisorChatParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  chat(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  chat(
    body: AdvisorChatParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(body)) {
      return this.chat({}, body);
    }
    return this._client.post('/ai/advisor/chat', { body, ...options });
  }
}

export type AdvisorChatResponse = unknown;

export interface AdvisorChatParams {
  /**
   * Optional: The output from a tool function that the AI previously requested to be
   * executed.
   */
  functionResponse?: unknown;
}

Advisor.Tools = Tools;

export declare namespace Advisor {
  export { type AdvisorChatResponse as AdvisorChatResponse, type AdvisorChatParams as AdvisorChatParams };

  export { Tools as Tools, type ToolListResponse as ToolListResponse, type ToolListParams as ToolListParams };
}
