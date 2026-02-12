import { FinancialData, TaxComparison, CostBreakdownItem, BenefitData } from './types';

// Updated Elegant Colors
const COLORS = {
  NAVY: "#1e3a8a", // Classic Navy
  GOLD: "#C5A059", // Metallic Gold (More elegant than orange/amber)
  SLATE_DARK: "#334155",
  SLATE_LIGHT: "#94a3b8"
};

export const CLIENT_DATA: FinancialData = {
  clientName: "DR NELSON RICARDO LEYVA LTDA",
  competence: "01/2026",
  revenue: 16635.00
};

export const COMPARISON_DATA: TaxComparison[] = [
  {
    regime: "Simples Nacional",
    totalTax: 3101.60,
    effectiveRate: 18.65,
    color: COLORS.SLATE_LIGHT // Subtle gray for the "bad" option
  },
  {
    regime: "Lucro Presumido (SETE)",
    totalTax: 2697.86,
    effectiveRate: 16.22,
    color: COLORS.NAVY // Strong Navy for the "good" option
  }
];

export const BREAKDOWN_DATA: CostBreakdownItem[] = [
  { name: "Impostos Federais (Otimizados)", value: 1426.56, color: COLORS.NAVY }, 
  { name: "ISS (Municipal)", value: 831.75, color: COLORS.GOLD },  
  { name: "Encargos Folha", value: 439.55, color: COLORS.SLATE_DARK } 
];

export const BENEFIT_DATA: BenefitData = {
  withBenefitBase: 8485.00,
  withoutBenefitBase: 8150.00,
  resultingTax: 819.38, 
  monthlySavings: 403.74,
  annualSavings: 4844.88
};