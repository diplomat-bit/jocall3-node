// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SimulateAPI from './simulate';
import { Simulate } from './simulate';
import * as SimulationsAPI from './simulations';
import { Simulations } from './simulations';

export class Oracle extends APIResource {
  simulate: SimulateAPI.Simulate = new SimulateAPI.Simulate(this._client);
  simulations: SimulationsAPI.Simulations = new SimulationsAPI.Simulations(this._client);
}

Oracle.Simulate = Simulate;
Oracle.Simulations = Simulations;

export declare namespace Oracle {
  export { Simulate as Simulate };

  export { Simulations as Simulations };
}
