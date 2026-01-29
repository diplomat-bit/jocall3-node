// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Security extends APIResource {
  /**
   * Retrieve Security Access Logs
   */
  retrieveLog(
    query?: SecurityRetrieveLogParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityRetrieveLogResponse>;
  retrieveLog(options?: Core.RequestOptions): Core.APIPromise<SecurityRetrieveLogResponse>;
  retrieveLog(
    query: SecurityRetrieveLogParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityRetrieveLogResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveLog({}, query);
    }
    return this._client.get('/users/me/security/log', { query, ...options });
  }

  /**
   * Rotate API/Access Keys
   */
  rotateKeys(options?: Core.RequestOptions): Core.APIPromise<SecurityRotateKeysResponse> {
    return this._client.post('/users/me/security/rotate-keys', options);
  }
}

export interface SecurityRetrieveLogResponse {
  data?: Array<SecurityRetrieveLogResponse.Data>;
}

export namespace SecurityRetrieveLogResponse {
  export interface Data {
    event?: string;

    ipAddress?: string;

    location?: Data.Location;

    timestamp?: string;
  }

  export namespace Data {
    export interface Location {
      city?: string;

      country?: string;

      latitude?: number;

      longitude?: number;
    }
  }
}

export interface SecurityRotateKeysResponse {
  newExpiry?: string;

  status?: string;
}

export interface SecurityRetrieveLogParams {
  limit?: number;

  offset?: number;
}

export declare namespace Security {
  export {
    type SecurityRetrieveLogResponse as SecurityRetrieveLogResponse,
    type SecurityRotateKeysResponse as SecurityRotateKeysResponse,
    type SecurityRetrieveLogParams as SecurityRetrieveLogParams,
  };
}
