// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AnomaliesAPI from './anomalies';
import { Anomalies } from './anomalies';
import * as SanctionScreeningAPI from './sanction-screening';
import { SanctionScreening } from './sanction-screening';
import * as TreasuryAPI from './treasury';
import { Treasury } from './treasury';
import * as CardsAPI from './cards/cards';
import { Cards } from './cards/cards';
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
  export { SanctionScreening as SanctionScreening };

  export { Compliance as Compliance };

  export { Treasury as Treasury };

  export { Cards as Cards };

  export { Risk as Risk };

  export { Anomalies as Anomalies };
}
