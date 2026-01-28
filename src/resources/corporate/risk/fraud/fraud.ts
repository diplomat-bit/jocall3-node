// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as RulesAPI from './rules';
import { Rules } from './rules';

export class Fraud extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Fraud.Rules = Rules;

export declare namespace Fraud {
  export { Rules as Rules };
}
