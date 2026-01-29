// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Webhooks extends APIResource {
  /**
   * Register Real-time Event Hook
   *
   * @example
   * ```ts
   * await client.system.webhooks.create({
   *   events: ['transaction.created', 'login.alert'],
   *   url: 'https://example.com',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/system/webhooks', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Registered Webhooks
   *
   * @example
   * ```ts
   * const webhooks = await client.system.webhooks.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse> {
    return this._client.get('/system/webhooks', options);
  }

  /**
   * Delete Webhook
   *
   * @example
   * ```ts
   * await client.system.webhooks.delete('webhookId');
   * ```
   */
  delete(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/system/webhooks/${webhookId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface WebhookListResponse {
  data?: Array<unknown>;
}

export interface WebhookCreateParams {
  events: Array<string>;

  url: string;

  /**
   * HMAC signing secret
   */
  secret?: string;
}

export declare namespace Webhooks {
  export { type WebhookListResponse as WebhookListResponse, type WebhookCreateParams as WebhookCreateParams };
}
