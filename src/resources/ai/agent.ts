// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Agent extends APIResource {
  /**
   * List Quantum Agent Capabilities
   */
  retrieveCapabilities(options?: Core.RequestOptions): Core.APIPromise<AgentRetrieveCapabilitiesResponse> {
    return this._client.get('/ai/agent/capabilities', options);
  }

  /**
   * Retrieve Current System System Prompts
   */
  retrievePrompts(options?: Core.RequestOptions): Core.APIPromise<AgentRetrievePromptsResponse> {
    return this._client.get('/ai/agent/prompts', options);
  }

  /**
   * Update System Instructions for Gemini Engine
   */
  updatePrompts(body: AgentUpdatePromptsParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/ai/agent/prompts', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AgentRetrieveCapabilitiesResponse {
  data?: Array<AgentRetrieveCapabilitiesResponse.Data>;
}

export namespace AgentRetrieveCapabilitiesResponse {
  export interface Data {
    description?: string;

    enabled?: boolean;

    name?: string;

    requiresHumanApproval?: boolean;
  }
}

export interface AgentRetrievePromptsResponse {
  systemPrompt?: string;

  version?: string;
}

export interface AgentUpdatePromptsParams {
  systemPrompt: string;
}

export declare namespace Agent {
  export {
    type AgentRetrieveCapabilitiesResponse as AgentRetrieveCapabilitiesResponse,
    type AgentRetrievePromptsResponse as AgentRetrievePromptsResponse,
    type AgentUpdatePromptsParams as AgentUpdatePromptsParams,
  };
}
