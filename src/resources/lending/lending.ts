// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ApplicationsAPI from './applications';
import { Applications } from './applications';
import * as DecisionsAPI from './decisions';
import { Decisions } from './decisions';

export class Lending extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  decisions: DecisionsAPI.Decisions = new DecisionsAPI.Decisions(this._client);
}

Lending.Applications = Applications;
Lending.Decisions = Decisions;

export declare namespace Lending {
  export { Applications as Applications };

  export { Decisions as Decisions };
}
