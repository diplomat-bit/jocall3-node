// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PredictionsAPI from './predictions';
import { Predictions } from './predictions';
import * as SimulateAPI from './simulate';
import {
  Simulate,
  SimulateRunAdvancedParams,
  SimulateRunAdvancedResponse,
  SimulateRunStandardParams,
  SimulateRunStandardResponse,
} from './simulate';

export class Oracle extends APIResource {
  simulate: SimulateAPI.Simulate = new SimulateAPI.Simulate(this._client);
  predictions: PredictionsAPI.Predictions = new PredictionsAPI.Predictions(this._client);
}

Oracle.Simulate = Simulate;
Oracle.Predictions = Predictions;

export declare namespace Oracle {
  export {
    Simulate as Simulate,
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunStandardResponse as SimulateRunStandardResponse,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
    type SimulateRunStandardParams as SimulateRunStandardParams,
  };

  export { Predictions as Predictions };
}
