// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DomesticAPI from './domestic';
import { Domestic } from './domestic';
import * as FxAPI from './fx';
import {
  Fx,
  FxConvertCurrencyParams,
  FxConvertCurrencyResponse,
  FxRetrieveRatesParams,
  FxRetrieveRatesResponse,
} from './fx';
import * as InternationalAPI from './international';
import { International, InternationalRetrieveStatusResponse } from './international';

export class Payments extends APIResource {
  domestic: DomesticAPI.Domestic = new DomesticAPI.Domestic(this._client);
  international: InternationalAPI.International = new InternationalAPI.International(this._client);
  fx: FxAPI.Fx = new FxAPI.Fx(this._client);
}

Payments.Domestic = Domestic;
Payments.International = International;
Payments.Fx = Fx;

export declare namespace Payments {
  export { Domestic as Domestic };

  export {
    International as International,
    type InternationalRetrieveStatusResponse as InternationalRetrieveStatusResponse,
  };

  export {
    Fx as Fx,
    type FxConvertCurrencyResponse as FxConvertCurrencyResponse,
    type FxRetrieveRatesResponse as FxRetrieveRatesResponse,
    type FxConvertCurrencyParams as FxConvertCurrencyParams,
    type FxRetrieveRatesParams as FxRetrieveRatesParams,
  };
}
