// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AdsAPI from './ads';
import { AdListParams, AdListResponse, AdRetrieveOperationStatusResponse, Ads } from './ads';
import * as AgentAPI from './agent';
import { Agent } from './agent';
import * as ModelsAPI from './models';
import { Models } from './models';
import * as AdvisorAPI from './advisor/advisor';
import {
  Advisor,
  AdvisorChatParams,
  AdvisorChatResponse,
  AdvisorRetrieveHistoryParams,
  AdvisorRetrieveHistoryResponse,
} from './advisor/advisor';
import * as IncubatorAPI from './incubator/incubator';
import {
  Incubator,
  IncubatorListPitchesParams,
  IncubatorListPitchesResponse,
  IncubatorSubmitPitchParams,
  IncubatorSubmitPitchResponse,
} from './incubator/incubator';
import * as OracleAPI from './oracle/oracle';
import { Oracle } from './oracle/oracle';

export class AI extends APIResource {
  advisor: AdvisorAPI.Advisor = new AdvisorAPI.Advisor(this._client);
  oracle: OracleAPI.Oracle = new OracleAPI.Oracle(this._client);
  incubator: IncubatorAPI.Incubator = new IncubatorAPI.Incubator(this._client);
  ads: AdsAPI.Ads = new AdsAPI.Ads(this._client);
  agent: AgentAPI.Agent = new AgentAPI.Agent(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
}

AI.Advisor = Advisor;
AI.Oracle = Oracle;
AI.Incubator = Incubator;
AI.Ads = Ads;
AI.Agent = Agent;
AI.Models = Models;

export declare namespace AI {
  export {
    Advisor as Advisor,
    type AdvisorChatResponse as AdvisorChatResponse,
    type AdvisorRetrieveHistoryResponse as AdvisorRetrieveHistoryResponse,
    type AdvisorChatParams as AdvisorChatParams,
    type AdvisorRetrieveHistoryParams as AdvisorRetrieveHistoryParams,
  };

  export { Oracle as Oracle };

  export {
    Incubator as Incubator,
    type IncubatorListPitchesResponse as IncubatorListPitchesResponse,
    type IncubatorSubmitPitchResponse as IncubatorSubmitPitchResponse,
    type IncubatorListPitchesParams as IncubatorListPitchesParams,
    type IncubatorSubmitPitchParams as IncubatorSubmitPitchParams,
  };

  export {
    Ads as Ads,
    type AdListResponse as AdListResponse,
    type AdRetrieveOperationStatusResponse as AdRetrieveOperationStatusResponse,
    type AdListParams as AdListParams,
  };

  export { Agent as Agent };

  export { Models as Models };
}
