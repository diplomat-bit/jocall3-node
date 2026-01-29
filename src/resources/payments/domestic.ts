// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Domestic extends APIResource {
  /**
   * Execute ACH Transfer
   */
  sendACH(body: DomesticSendACHParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/domestic/ach', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Real-time Payment (RTP)
   */
  sendRtp(body: DomesticSendRtpParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/domestic/rtp', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Execute Federal Wire
   */
  sendWire(body: DomesticSendWireParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/domestic/wire', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DomesticSendACHParams {
  account: string;

  amount: number;

  routing: string;
}

export interface DomesticSendRtpParams {
  amount: number;

  recipientId: string;
}

export interface DomesticSendWireParams {
  account: string;

  amount: number;

  routing: string;
}

export declare namespace Domestic {
  export {
    type DomesticSendACHParams as DomesticSendACHParams,
    type DomesticSendRtpParams as DomesticSendRtpParams,
    type DomesticSendWireParams as DomesticSendWireParams,
  };
}
