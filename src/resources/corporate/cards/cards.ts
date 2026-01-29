// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ControlsAPI from './controls';
import { ControlUpdateParams, Controls } from './controls';

export class Cards extends APIResource {
  controls: ControlsAPI.Controls = new ControlsAPI.Controls(this._client);

  /**
   * List all corporate cards
   *
   * @example
   * ```ts
   * const cards = await client.corporate.cards.list();
   * ```
   */
  list(query?: CardListParams, options?: Core.RequestOptions): Core.APIPromise<CardListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse>;
  list(
    query: CardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/corporate/cards', { query, ...options });
  }

  /**
   * Toggle Card Lock
   *
   * @example
   * ```ts
   * await client.corporate.cards.freeze('cardId', {
   *   frozen: true,
   * });
   * ```
   */
  freeze(cardId: string, body: CardFreezeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/corporate/cards/${cardId}/freeze`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Request Physical Corporate Card
   *
   * @example
   * ```ts
   * const response = await client.corporate.cards.issuePhysical(
   *   {
   *     holderName: 'holderName',
   *     shippingAddress: {
   *       city: 'city',
   *       country: 'country',
   *       street: 'street',
   *     },
   *   },
   * );
   * ```
   */
  issuePhysical(
    body: CardIssuePhysicalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardIssuePhysicalResponse> {
    return this._client.post('/corporate/cards/physical', { body, ...options });
  }

  /**
   * Issue Corporate Virtual Card
   *
   * @example
   * ```ts
   * const response = await client.corporate.cards.issueVirtual({
   *   holderName: 'holderName',
   *   monthlyLimit: 0,
   *   purpose: 'purpose',
   * });
   * ```
   */
  issueVirtual(
    body: CardIssueVirtualParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardIssueVirtualResponse> {
    return this._client.post('/corporate/cards/virtual', { body, ...options });
  }

  /**
   * Get card transactions
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.cards.listTransactions('cardId');
   * ```
   */
  listTransactions(
    cardId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardListTransactionsResponse> {
    return this._client.get(`/corporate/cards/${cardId}/transactions`, options);
  }
}

export interface CardListResponse {
  data?: Array<CardListResponse.Data>;

  total?: number;
}

export namespace CardListResponse {
  export interface Data {
    id: string;

    cardNumberMask: string;

    holderName: string;

    status: string;

    controls?: { [key: string]: unknown };

    frozen?: boolean;
  }
}

export interface CardIssuePhysicalResponse {
  id: string;

  cardNumberMask: string;

  holderName: string;

  status: string;

  controls?: { [key: string]: unknown };

  frozen?: boolean;
}

export interface CardIssueVirtualResponse {
  id: string;

  cardNumberMask: string;

  holderName: string;

  status: string;

  controls?: { [key: string]: unknown };

  frozen?: boolean;
}

export interface CardListTransactionsResponse {
  data?: Array<CardListTransactionsResponse.Data>;
}

export namespace CardListTransactionsResponse {
  export interface Data {
    id: string;

    amount: number;

    currency: string;

    date: string;

    description: string;

    category?: string;

    notes?: string;
  }
}

export interface CardListParams {
  limit?: number;

  offset?: number;
}

export interface CardFreezeParams {
  frozen: boolean;
}

export interface CardIssuePhysicalParams {
  holderName: string;

  shippingAddress: CardIssuePhysicalParams.ShippingAddress;
}

export namespace CardIssuePhysicalParams {
  export interface ShippingAddress {
    city: string;

    country: string;

    street: string;

    state?: string;

    zip?: string;
  }
}

export interface CardIssueVirtualParams {
  holderName: string;

  monthlyLimit: number;

  purpose: string;

  metadata?: unknown;
}

Cards.Controls = Controls;

export declare namespace Cards {
  export {
    type CardListResponse as CardListResponse,
    type CardIssuePhysicalResponse as CardIssuePhysicalResponse,
    type CardIssueVirtualResponse as CardIssueVirtualResponse,
    type CardListTransactionsResponse as CardListTransactionsResponse,
    type CardListParams as CardListParams,
    type CardFreezeParams as CardFreezeParams,
    type CardIssuePhysicalParams as CardIssuePhysicalParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
  };

  export { Controls as Controls, type ControlUpdateParams as ControlUpdateParams };
}
