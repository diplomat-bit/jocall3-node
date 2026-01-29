// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class International extends APIResource {
  /**
   * Retrieves the current processing status and details of an initiated
   * international payment.
   *
   * @example
   * ```ts
   * const response =
   *   await client.payments.international.retrieveStatus(
   *     'int_pmt_xyz7890',
   *   );
   * ```
   */
  retrieveStatus(paymentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/payments/international/${paymentId}/status`, options);
  }
}

export type InternationalRetrieveStatusResponse = unknown;

export declare namespace International {
  export { type InternationalRetrieveStatusResponse as InternationalRetrieveStatusResponse };
}
