// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AdsAPI from './ads';
import {
  AdGenerateCopyParams,
  AdGenerateCopyResponse,
  AdGenerateVideoParams,
  AdGenerateVideoResponse,
  AdListResponse,
  AdOptimizeCampaignParams,
  AdOptimizeCampaignResponse,
  AdRetrieveOperationStatusResponse,
  Ads,
} from './ads';
import * as AgentAPI from './agent';
import {
  Agent,
  AgentRetrieveCapabilitiesResponse,
  AgentRetrievePromptsResponse,
  AgentUpdatePromptsParams,
} from './agent';
import * as ModelsAPI from './models';
import { ModelFineTuneParams, ModelFineTuneResponse, ModelListVersionsResponse, Models } from './models';
import * as AdvisorAPI from './advisor/advisor';
import {
  Advisor,
  AdvisorChatParams,
  AdvisorChatResponse,
  AdvisorRetrieveHistoryResponse,
} from './advisor/advisor';
import * as IncubatorAPI from './incubator/incubator';
import {
  Incubator,
  IncubatorListPitchesResponse,
  IncubatorSubmitPitchParams,
  IncubatorSubmitPitchResponse,
  IncubatorValidateIdeaParams,
  IncubatorValidateIdeaResponse,
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
  };

  export { Oracle as Oracle };

  export {
    Incubator as Incubator,
    type IncubatorListPitchesResponse as IncubatorListPitchesResponse,
    type IncubatorSubmitPitchResponse as IncubatorSubmitPitchResponse,
    type IncubatorValidateIdeaResponse as IncubatorValidateIdeaResponse,
    type IncubatorSubmitPitchParams as IncubatorSubmitPitchParams,
    type IncubatorValidateIdeaParams as IncubatorValidateIdeaParams,
  };

  export {
    Ads as Ads,
    type AdListResponse as AdListResponse,
    type AdGenerateCopyResponse as AdGenerateCopyResponse,
    type AdGenerateVideoResponse as AdGenerateVideoResponse,
    type AdOptimizeCampaignResponse as AdOptimizeCampaignResponse,
    type AdRetrieveOperationStatusResponse as AdRetrieveOperationStatusResponse,
    type AdGenerateCopyParams as AdGenerateCopyParams,
    type AdGenerateVideoParams as AdGenerateVideoParams,
    type AdOptimizeCampaignParams as AdOptimizeCampaignParams,
  };

  export {
    Agent as Agent,
    type AgentRetrieveCapabilitiesResponse as AgentRetrieveCapabilitiesResponse,
    type AgentRetrievePromptsResponse as AgentRetrievePromptsResponse,
    type AgentUpdatePromptsParams as AgentUpdatePromptsParams,
  };

  export {
    Models as Models,
    type ModelFineTuneResponse as ModelFineTuneResponse,
    type ModelListVersionsResponse as ModelListVersionsResponse,
    type ModelFineTuneParams as ModelFineTuneParams,
  };
}
