// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Applications extends APIResource {
  /**
   * Track Loan Processing
   */
  retrieveStatus(
    appId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRetrieveStatusResponse> {
    return this._client.get(`/lending/applications/${appId}/status`, options);
  }
}

export interface ApplicationRetrieveStatusResponse {
  status?: string;

  underwriterQueuePos?: number;
}

export declare namespace Applications {
  export { type ApplicationRetrieveStatusResponse as ApplicationRetrieveStatusResponse };
}
