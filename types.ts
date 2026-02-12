export interface FinancialData {
  clientName: string;
  competence: string;
  revenue: number;
}

export interface TaxComparison {
  regime: string;
  totalTax: number;
  effectiveRate: number;
  color: string;
}

export interface CostBreakdownItem {
  name: string;
  value: number;
  color: string;
}

export interface BenefitData {
  withBenefitBase: number;
  withoutBenefitBase: number;
  resultingTax: number;
  monthlySavings: number;
  annualSavings: number;
}