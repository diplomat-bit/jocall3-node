// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Notifications extends APIResource {
  /**
   * List notification templates
   *
   * @example
   * ```ts
   * const response =
   *   await client.system.notifications.listTemplates();
   * ```
   */
  listTemplates(options?: Core.RequestOptions): Core.APIPromise<NotificationListTemplatesResponse> {
    return this._client.get('/system/notifications/templates', options);
  }

  /**
   * Send push notification
   *
   * @example
   * ```ts
   * await client.system.notifications.sendPush({
   *   body: 'body',
   *   title: 'title',
   *   user_id: 'user_id',
   * });
   * ```
   */
  sendPush(body: NotificationSendPushParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/system/notifications/push', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type NotificationListTemplatesResponse =
  Array<NotificationListTemplatesResponse.NotificationListTemplatesResponseItem>;

export namespace NotificationListTemplatesResponse {
  export interface NotificationListTemplatesResponseItem {
    id: string;

    channel: string;

    name: string;
  }
}

export interface NotificationSendPushParams {
  body: string;

  title: string;

  user_id: string;
}

export declare namespace Notifications {
  export {
    type NotificationListTemplatesResponse as NotificationListTemplatesResponse,
    type NotificationSendPushParams as NotificationSendPushParams,
  };
}
