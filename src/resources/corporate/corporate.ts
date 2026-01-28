// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CardsAPI from './cards/cards';
import {
  CardFreezeParams,
  CardFreezeResponse,
  CardIssueVirtualParams,
  CardIssueVirtualResponse,
  CardListParams,
  CardListResponse,
  Cards,
} from './cards/cards';
import * as ComplianceAPI from './compliance/compliance';
import { Compliance } from './compliance/compliance';
import * as RiskAPI from './risk/risk';
import { Risk } from './risk/risk';
import * as TreasuryAPI from './treasury/treasury';
import {
  Treasury,
  TreasuryForecastCashFlowParams,
  TreasuryForecastCashFlowResponse,
} from './treasury/treasury';

export class Corporate extends APIResource {
  compliance: ComplianceAPI.Compliance = new ComplianceAPI.Compliance(this._client);
  treasury: TreasuryAPI.Treasury = new TreasuryAPI.Treasury(this._client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  risk: RiskAPI.Risk = new RiskAPI.Risk(this._client);
}

Corporate.Compliance = Compliance;
Corporate.Treasury = Treasury;
Corporate.Cards = Cards;
Corporate.Risk = Risk;

export declare namespace Corporate {
  export { Compliance as Compliance };

  export {
    Treasury as Treasury,
    type TreasuryForecastCashFlowResponse as TreasuryForecastCashFlowResponse,
    type TreasuryForecastCashFlowParams as TreasuryForecastCashFlowParams,
  };

  export {
    Cards as Cards,
    type CardListResponse as CardListResponse,
    type CardFreezeResponse as CardFreezeResponse,
    type CardIssueVirtualResponse as CardIssueVirtualResponse,
    type CardListParams as CardListParams,
    type CardFreezeParams as CardFreezeParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
  };

  export { Risk as Risk };
}
