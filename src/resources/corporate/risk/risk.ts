// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FraudAPI from './fraud';
import { Fraud, FraudListRulesParams, FraudListRulesResponse } from './fraud';

export class Risk extends APIResource {
  fraud: FraudAPI.Fraud = new FraudAPI.Fraud(this._client);
}

Risk.Fraud = Fraud;

export declare namespace Risk {
  export {
    Fraud as Fraud,
    type FraudListRulesResponse as FraudListRulesResponse,
    type FraudListRulesParams as FraudListRulesParams,
  };
}
