// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class International extends APIResource {
  /**
   * Get international payment status
   */
  retrieveStatus(
    paymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternationalRetrieveStatusResponse> {
    return this._client.get(`/payments/international/${paymentId}/status`, options);
  }

  /**
   * EU SEPA Credit Transfer
   */
  sendSepa(body: InternationalSendSepaParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/international/sepa', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Global SWIFT Transaction
   */
  sendSwift(body: InternationalSendSwiftParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/payments/international/swift', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface InternationalRetrieveStatusResponse {
  fx_rate?: number;

  status?: string;
}

export interface InternationalSendSepaParams {
  amount: number;

  iban: string;
}

export interface InternationalSendSwiftParams {
  amount: number;

  bic: string;

  currency: string;

  iban: string;
}

export declare namespace International {
  export {
    type InternationalRetrieveStatusResponse as InternationalRetrieveStatusResponse,
    type InternationalSendSepaParams as InternationalSendSepaParams,
    type InternationalSendSwiftParams as InternationalSendSwiftParams,
  };
}
