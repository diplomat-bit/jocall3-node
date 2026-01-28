// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AdsAPI from './ads';
import {
  AdGenerateParams,
  AdGenerateResponse,
  AdGetOperationResponse,
  AdListParams,
  AdListResponse,
  Ads,
} from './ads';
import * as AdvisorAPI from './advisor/advisor';
import {
  Advisor,
  AdvisorChatParams,
  AdvisorChatResponse,
  AdvisorHistoryParams,
  AdvisorHistoryResponse,
} from './advisor/advisor';
import * as IncubatorAPI from './incubator/incubator';
import {
  Incubator,
  IncubatorGeneratePitchParams,
  IncubatorGeneratePitchResponse,
  IncubatorListPitchesParams,
  IncubatorListPitchesResponse,
} from './incubator/incubator';
import * as OracleAPI from './oracle/oracle';
import { Oracle } from './oracle/oracle';

export class AI extends APIResource {
  advisor: AdvisorAPI.Advisor = new AdvisorAPI.Advisor(this._client);
  oracle: OracleAPI.Oracle = new OracleAPI.Oracle(this._client);
  incubator: IncubatorAPI.Incubator = new IncubatorAPI.Incubator(this._client);
  ads: AdsAPI.Ads = new AdsAPI.Ads(this._client);
}

AI.Advisor = Advisor;
AI.Oracle = Oracle;
AI.Incubator = Incubator;
AI.Ads = Ads;

export declare namespace AI {
  export {
    Advisor as Advisor,
    type AdvisorChatResponse as AdvisorChatResponse,
    type AdvisorHistoryResponse as AdvisorHistoryResponse,
    type AdvisorChatParams as AdvisorChatParams,
    type AdvisorHistoryParams as AdvisorHistoryParams,
  };

  export { Oracle as Oracle };

  export {
    Incubator as Incubator,
    type IncubatorGeneratePitchResponse as IncubatorGeneratePitchResponse,
    type IncubatorListPitchesResponse as IncubatorListPitchesResponse,
    type IncubatorGeneratePitchParams as IncubatorGeneratePitchParams,
    type IncubatorListPitchesParams as IncubatorListPitchesParams,
  };

  export {
    Ads as Ads,
    type AdListResponse as AdListResponse,
    type AdGenerateResponse as AdGenerateResponse,
    type AdGetOperationResponse as AdGetOperationResponse,
    type AdListParams as AdListParams,
    type AdGenerateParams as AdGenerateParams,
  };
}
