// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FxAPI from './fx';
import { Fx, FxConvertParams, FxConvertResponse, FxGetRatesParams, FxGetRatesResponse } from './fx';
import * as InternationalAPI from './international';
import { International, InternationalGetStatusResponse } from './international';

export class Payments extends APIResource {
  international: InternationalAPI.International = new InternationalAPI.International(this._client);
  fx: FxAPI.Fx = new FxAPI.Fx(this._client);
}

Payments.International = International;
Payments.Fx = Fx;

export declare namespace Payments {
  export {
    International as International,
    type InternationalGetStatusResponse as InternationalGetStatusResponse,
  };

  export {
    Fx as Fx,
    type FxConvertResponse as FxConvertResponse,
    type FxGetRatesResponse as FxGetRatesResponse,
    type FxConvertParams as FxConvertParams,
    type FxGetRatesParams as FxGetRatesParams,
  };
}
