// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Recurring extends APIResource {
  /**
   * Manually Create Recurring Schedule
   */
  create(body: RecurringCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/transactions/recurring', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Detected Subscriptions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RecurringListResponse> {
    return this._client.get('/transactions/recurring', options);
  }

  /**
   * Cancel Recurring Payment Detection
   */
  cancel(recurringId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/transactions/recurring/${recurringId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RecurringListResponse {
  data?: Array<RecurringListResponse.Data>;
}

export namespace RecurringListResponse {
  export interface Data {
    id?: string;

    description?: string;

    frequency?: string;

    nextExpectedDate?: string;
  }
}

export interface RecurringCreateParams {
  amount: number;

  category: string;

  frequency: string;
}

export declare namespace Recurring {
  export {
    type RecurringListResponse as RecurringListResponse,
    type RecurringCreateParams as RecurringCreateParams,
  };
}
