// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AnomaliesAPI from './anomalies';
import { Anomalies } from './anomalies';
import * as CardsAPI from './cards/cards';
import {
  CardFreezeParams,
  CardIssuePhysicalParams,
  CardIssuePhysicalResponse,
  CardIssueVirtualParams,
  CardIssueVirtualResponse,
  Cards,
} from './cards/cards';
import * as ComplianceAPI from './compliance/compliance';
import {
  Compliance,
  ComplianceScreenAdverseMediaParams,
  ComplianceScreenAdverseMediaResponse,
  ComplianceScreenPepParams,
  ComplianceScreenPepResponse,
  ComplianceScreenSanctionsParams,
  ComplianceScreenSanctionsResponse,
} from './compliance/compliance';
import * as GovernanceAPI from './governance/governance';
import { Governance } from './governance/governance';
import * as RiskAPI from './risk/risk';
import { Risk, RiskGetExposureResponse, RiskStressTestParams, RiskStressTestResponse } from './risk/risk';
import * as TreasuryAPI from './treasury/treasury';
import {
  Treasury,
  TreasuryForecastCashFlowParams,
  TreasuryForecastCashFlowResponse,
  TreasuryManageLiquidityParams,
  TreasuryManageLiquidityResponse,
} from './treasury/treasury';

export class Corporate extends APIResource {
  compliance: ComplianceAPI.Compliance = new ComplianceAPI.Compliance(this._client);
  treasury: TreasuryAPI.Treasury = new TreasuryAPI.Treasury(this._client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  risk: RiskAPI.Risk = new RiskAPI.Risk(this._client);
  governance: GovernanceAPI.Governance = new GovernanceAPI.Governance(this._client);
  anomalies: AnomaliesAPI.Anomalies = new AnomaliesAPI.Anomalies(this._client);

  /**
   * Onboard a New Corporate Entity
   *
   * @example
   * ```ts
   * const response = await client.corporate.onboardEntity({
   *   entityType: 'LLC',
   *   jurisdiction: 'DE',
   *   legalName: 'legalName',
   *   taxId: 'taxId',
   * });
   * ```
   */
  onboardEntity(
    body: CorporateOnboardEntityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CorporateOnboardEntityResponse> {
    return this._client.post('/corporate/onboard', { body, ...options });
  }
}

export interface CorporateOnboardEntityResponse {
  corporateId?: string;

  status?: string;
}

export interface CorporateOnboardEntityParams {
  entityType: 'LLC' | 'CORP' | 'NGO' | 'PARTNERSHIP';

  jurisdiction: string;

  /**
   * Registered business name
   */
  legalName: string;

  /**
   * EIN, VAT, or local tax ID
   */
  taxId: string;

  beneficialOwners?: Array<CorporateOnboardEntityParams.BeneficialOwner>;
}

export namespace CorporateOnboardEntityParams {
  export interface BeneficialOwner {
    id: string;

    email: string;

    identityVerified: boolean;

    name: string;

    address?: BeneficialOwner.Address;

    phone?: string;

    preferences?: BeneficialOwner.Preferences;

    securityStatus?: BeneficialOwner.SecurityStatus;
  }

  export namespace BeneficialOwner {
    export interface Address {
      city?: string;

      country?: string;

      state?: string;

      street?: string;

      zip?: string;
    }

    export interface Preferences {
      notificationChannels?: unknown;

      theme?: string;
    }

    export interface SecurityStatus {
      lastLogin?: string;

      twoFactorEnabled?: boolean;
    }
  }
}

Corporate.Compliance = Compliance;
Corporate.Treasury = Treasury;
Corporate.Cards = Cards;
Corporate.Risk = Risk;
Corporate.Governance = Governance;
Corporate.Anomalies = Anomalies;

export declare namespace Corporate {
  export {
    type CorporateOnboardEntityResponse as CorporateOnboardEntityResponse,
    type CorporateOnboardEntityParams as CorporateOnboardEntityParams,
  };

  export {
    Compliance as Compliance,
    type ComplianceScreenAdverseMediaResponse as ComplianceScreenAdverseMediaResponse,
    type ComplianceScreenPepResponse as ComplianceScreenPepResponse,
    type ComplianceScreenSanctionsResponse as ComplianceScreenSanctionsResponse,
    type ComplianceScreenAdverseMediaParams as ComplianceScreenAdverseMediaParams,
    type ComplianceScreenPepParams as ComplianceScreenPepParams,
    type ComplianceScreenSanctionsParams as ComplianceScreenSanctionsParams,
  };

  export {
    Treasury as Treasury,
    type TreasuryForecastCashFlowResponse as TreasuryForecastCashFlowResponse,
    type TreasuryManageLiquidityResponse as TreasuryManageLiquidityResponse,
    type TreasuryForecastCashFlowParams as TreasuryForecastCashFlowParams,
    type TreasuryManageLiquidityParams as TreasuryManageLiquidityParams,
  };

  export {
    Cards as Cards,
    type CardIssuePhysicalResponse as CardIssuePhysicalResponse,
    type CardIssueVirtualResponse as CardIssueVirtualResponse,
    type CardFreezeParams as CardFreezeParams,
    type CardIssuePhysicalParams as CardIssuePhysicalParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
  };

  export {
    Risk as Risk,
    type RiskGetExposureResponse as RiskGetExposureResponse,
    type RiskStressTestResponse as RiskStressTestResponse,
    type RiskStressTestParams as RiskStressTestParams,
  };

  export { Governance as Governance };

  export { Anomalies as Anomalies };
}
