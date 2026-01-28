// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Jocall3 } from './index';

export abstract class APIResource {
  protected _client: Jocall3;

  constructor(client: Jocall3) {
    this._client = client;
  }
}
