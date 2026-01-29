// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuditLogsAPI from './audit-logs';
import { AuditLogListParams, AuditLogListResponse, AuditLogs } from './audit-logs';
import * as NotificationsAPI from './notifications';
import { Notifications } from './notifications';
import * as SandboxAPI from './sandbox';
import { Sandbox, SandboxSimulateErrorParams, SandboxSimulateErrorResponse } from './sandbox';
import * as StatusAPI from './status';
import { Status, StatusRetrieveResponse } from './status';
import * as VerificationAPI from './verification';
import { Verification } from './verification';
import * as WebhooksAPI from './webhooks';
import { WebhookCreateParams, WebhookListResponse, Webhooks } from './webhooks';

export class System extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  sandbox: SandboxAPI.Sandbox = new SandboxAPI.Sandbox(this._client);
  verification: VerificationAPI.Verification = new VerificationAPI.Verification(this._client);
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
}

System.Status = Status;
System.Webhooks = Webhooks;
System.AuditLogs = AuditLogs;
System.Sandbox = Sandbox;
System.Verification = Verification;
System.Notifications = Notifications;

export declare namespace System {
  export { Status as Status, type StatusRetrieveResponse as StatusRetrieveResponse };

  export {
    Webhooks as Webhooks,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
  };

  export {
    AuditLogs as AuditLogs,
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListParams as AuditLogListParams,
  };

  export {
    Sandbox as Sandbox,
    type SandboxSimulateErrorResponse as SandboxSimulateErrorResponse,
    type SandboxSimulateErrorParams as SandboxSimulateErrorParams,
  };

  export { Verification as Verification };

  export { Notifications as Notifications };
}
