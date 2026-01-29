// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Offsets extends APIResource {
  /**
   * Purchase Verified Carbon Credits
   */
  purchase(body: OffsetPurchaseParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/sustainability/offsets/purchase', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retire Carbon Credits (Permanent Offsetting)
   */
  retire(body: OffsetRetireParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/sustainability/offsets/retire', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OffsetPurchaseParams {
  projectId: string;

  tonnes: number;

  paymentSourceId?: string;
}

export interface OffsetRetireParams {
  certificateId: string;
}

export declare namespace Offsets {
  export { type OffsetPurchaseParams as OffsetPurchaseParams, type OffsetRetireParams as OffsetRetireParams };
}
