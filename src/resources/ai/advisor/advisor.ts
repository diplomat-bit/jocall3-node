// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ToolsAPI from './tools';
import { ToolListResponse, Tools } from './tools';

export class Advisor extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * The primary orchestration point. Connects Postman Data to Gemini Logic.
   */
  chat(body: AdvisorChatParams, options?: Core.RequestOptions): Core.APIPromise<AdvisorChatResponse> {
    return this._client.post('/ai/advisor/chat', { body, ...options });
  }

  /**
   * Get Full Chat Transcript
   */
  history(options?: Core.RequestOptions): Core.APIPromise<AdvisorHistoryResponse> {
    return this._client.get('/ai/advisor/chat/history', options);
  }
}

export interface AdvisorChatResponse {
  reply?: string;

  sessionId?: string;

  suggestedActions?: Array<unknown>;
}

export interface AdvisorHistoryResponse {
  messages?: Array<unknown>;
}

export interface AdvisorChatParams {
  message: string;

  contextAccountIds?: Array<string>;

  mode?: string;

  stream?: boolean;
}

Advisor.Tools = Tools;

export declare namespace Advisor {
  export {
    type AdvisorChatResponse as AdvisorChatResponse,
    type AdvisorHistoryResponse as AdvisorHistoryResponse,
    type AdvisorChatParams as AdvisorChatParams,
  };

  export { Tools as Tools, type ToolListResponse as ToolListResponse };
}
