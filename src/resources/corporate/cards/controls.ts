// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Controls extends APIResource {
  /**
   * Update Spending Limits & MCC Controls
   *
   * @example
   * ```ts
   * await client.corporate.cards.controls.update('cardId');
   * ```
   */
  update(cardId: string, body?: ControlUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(cardId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    cardId: string,
    body: ControlUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(cardId, {}, body);
    }
    return this._client.put(`/corporate/cards/${cardId}/controls`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ControlUpdateParams {
  allowedCategories?: Array<string>;

  geoRestriction?: Array<string>;

  monthlyLimit?: number;
}

export declare namespace Controls {
  export { type ControlUpdateParams as ControlUpdateParams };
}
