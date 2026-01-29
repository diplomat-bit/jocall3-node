// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AnomaliesAPI from './anomalies';
import {
  Anomalies,
  AnomalyListParams,
  AnomalyListResponse,
  AnomalyUpdateStatusParams,
  AnomalyUpdateStatusResponse,
} from './anomalies';
import * as SanctionScreeningAPI from './sanction-screening';
import {
  SanctionScreening,
  SanctionScreeningScreenParams,
  SanctionScreeningScreenResponse,
} from './sanction-screening';
import * as TreasuryAPI from './treasury';
import {
  Treasury,
  TreasuryForecastCashFlowParams,
  TreasuryForecastCashFlowResponse,
  TreasuryGetLiquidityPositionsResponse,
} from './treasury';
import * as CardsAPI from './cards/cards';
import {
  CardFreezeParams,
  CardFreezeResponse,
  CardIssueVirtualParams,
  CardIssueVirtualResponse,
  CardListParams,
  CardListResponse,
  CardListTransactionsParams,
  CardListTransactionsResponse,
  Cards,
} from './cards/cards';
import * as ComplianceAPI from './compliance/compliance';
import { Compliance } from './compliance/compliance';
import * as RiskAPI from './risk/risk';
import { Risk } from './risk/risk';

export class Corporate extends APIResource {
  sanctionScreening: SanctionScreeningAPI.SanctionScreening = new SanctionScreeningAPI.SanctionScreening(
    this._client,
  );
  compliance: ComplianceAPI.Compliance = new ComplianceAPI.Compliance(this._client);
  treasury: TreasuryAPI.Treasury = new TreasuryAPI.Treasury(this._client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  risk: RiskAPI.Risk = new RiskAPI.Risk(this._client);
  anomalies: AnomaliesAPI.Anomalies = new AnomaliesAPI.Anomalies(this._client);
}

Corporate.SanctionScreening = SanctionScreening;
Corporate.Compliance = Compliance;
Corporate.Treasury = Treasury;
Corporate.Cards = Cards;
Corporate.Risk = Risk;
Corporate.Anomalies = Anomalies;

export declare namespace Corporate {
  export {
    SanctionScreening as SanctionScreening,
    type SanctionScreeningScreenResponse as SanctionScreeningScreenResponse,
    type SanctionScreeningScreenParams as SanctionScreeningScreenParams,
  };

  export { Compliance as Compliance };

  export {
    Treasury as Treasury,
    type TreasuryForecastCashFlowResponse as TreasuryForecastCashFlowResponse,
    type TreasuryGetLiquidityPositionsResponse as TreasuryGetLiquidityPositionsResponse,
    type TreasuryForecastCashFlowParams as TreasuryForecastCashFlowParams,
  };

  export {
    Cards as Cards,
    type CardListResponse as CardListResponse,
    type CardFreezeResponse as CardFreezeResponse,
    type CardIssueVirtualResponse as CardIssueVirtualResponse,
    type CardListTransactionsResponse as CardListTransactionsResponse,
    type CardListParams as CardListParams,
    type CardFreezeParams as CardFreezeParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
    type CardListTransactionsParams as CardListTransactionsParams,
  };

  export { Risk as Risk };

  export {
    Anomalies as Anomalies,
    type AnomalyListResponse as AnomalyListResponse,
    type AnomalyUpdateStatusResponse as AnomalyUpdateStatusResponse,
    type AnomalyListParams as AnomalyListParams,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
