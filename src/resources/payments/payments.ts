// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FxAPI from './fx';
import { Fx } from './fx';
import * as InternationalAPI from './international';
import { International } from './international';

export class Payments extends APIResource {
  international: InternationalAPI.International = new InternationalAPI.International(this._client);
  fx: FxAPI.Fx = new FxAPI.Fx(this._client);
}

Payments.International = International;
Payments.Fx = Fx;

export declare namespace Payments {
  export { International as International };

  export { Fx as Fx };
}
