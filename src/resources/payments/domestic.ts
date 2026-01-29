// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Domestic extends APIResource {
  /**
   * Execute ACH Transfer
   */
  ach(body: DomesticACHParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/domestic/ach', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Real-time Payment (RTP)
   */
  rtp(body: DomesticRtpParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/domestic/rtp', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Execute Federal Wire
   */
  wire(body: DomesticWireParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/domestic/wire', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DomesticACHParams {
  account: string;

  amount: number;

  routing: string;
}

export interface DomesticRtpParams {
  amount: number;

  recipientId: string;
}

export interface DomesticWireParams {
  account: string;

  amount: number;

  routing: string;
}

export declare namespace Domestic {
  export {
    type DomesticACHParams as DomesticACHParams,
    type DomesticRtpParams as DomesticRtpParams,
    type DomesticWireParams as DomesticWireParams,
  };
}
