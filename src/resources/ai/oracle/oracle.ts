// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PredictionsAPI from './predictions';
import {
  PredictionRetrieveInflationForecastParams,
  PredictionRetrieveInflationForecastResponse,
  PredictionRetrieveMarketCrashProbabilityResponse,
  Predictions,
} from './predictions';
import * as SimulateAPI from './simulate';
import {
  Simulate,
  SimulateRunAdvancedParams,
  SimulateRunAdvancedResponse,
  SimulateRunMonteCarloParams,
  SimulateRunStandardParams,
  SimulateRunStandardResponse,
} from './simulate';
import * as SimulationsAPI from './simulations';
import { SimulationListResponse, SimulationRetrieveResponse, Simulations } from './simulations';

export class Oracle extends APIResource {
  simulate: SimulateAPI.Simulate = new SimulateAPI.Simulate(this._client);
  predictions: PredictionsAPI.Predictions = new PredictionsAPI.Predictions(this._client);
  simulations: SimulationsAPI.Simulations = new SimulationsAPI.Simulations(this._client);
}

Oracle.Simulate = Simulate;
Oracle.Predictions = Predictions;
Oracle.Simulations = Simulations;

export declare namespace Oracle {
  export {
    Simulate as Simulate,
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunStandardResponse as SimulateRunStandardResponse,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
    type SimulateRunMonteCarloParams as SimulateRunMonteCarloParams,
    type SimulateRunStandardParams as SimulateRunStandardParams,
  };

  export {
    Predictions as Predictions,
    type PredictionRetrieveInflationForecastResponse as PredictionRetrieveInflationForecastResponse,
    type PredictionRetrieveMarketCrashProbabilityResponse as PredictionRetrieveMarketCrashProbabilityResponse,
    type PredictionRetrieveInflationForecastParams as PredictionRetrieveInflationForecastParams,
  };

  export {
    Simulations as Simulations,
    type SimulationRetrieveResponse as SimulationRetrieveResponse,
    type SimulationListResponse as SimulationListResponse,
  };
}
