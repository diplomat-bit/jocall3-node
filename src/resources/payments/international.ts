// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class International extends APIResource {
  /**
   * Get international payment status
   */
  getStatus(
    paymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternationalGetStatusResponse> {
    return this._client.get(`/payments/international/${paymentId}/status`, options);
  }

  /**
   * EU SEPA Credit Transfer
   */
  sepa(body: InternationalSepaParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/international/sepa', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Global SWIFT Transaction
   */
  swift(body: InternationalSwiftParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/international/swift', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface InternationalGetStatusResponse {
  fx_rate?: number;

  status?: string;
}

export interface InternationalSepaParams {
  amount: number;

  iban: string;
}

export interface InternationalSwiftParams {
  amount: number;

  bic: string;

  currency: string;

  iban: string;
}

export declare namespace International {
  export {
    type InternationalGetStatusResponse as InternationalGetStatusResponse,
    type InternationalSepaParams as InternationalSepaParams,
    type InternationalSwiftParams as InternationalSwiftParams,
  };
}
