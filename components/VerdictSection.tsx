import React from 'react';
import { FileCheck, TrendingUp } from 'lucide-react';
import { BenefitData } from '../types';

interface VerdictSectionProps {
  data: BenefitData;
}

const VerdictSection: React.FC<VerdictSectionProps> = ({ data }) => {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    
  return (
    <div className="bg-[#1e3a8a] text-white rounded-3xl shadow-2xl shadow-blue-900/30 overflow-hidden relative bg-navy">
      {/* Decorative gradients - Hide on print */}
      <div className="no-print absolute top-0 right-0 p-48 bg-[#C5A059] rounded-full mix-blend-soft-light filter blur-[80px] opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="no-print absolute bottom-0 left-0 p-32 bg-blue-500 rounded-full mix-blend-screen filter blur-[60px] opacity-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="p-8 md:p-14 print:p-8 grid md:grid-cols-2 gap-16 print:gap-8 items-center relative z-10">
        
        {/* Left: Text */}
        <div>
           <div className="inline-flex items-center gap-2 border border-[#C5A059] text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8 print:mb-4 bg-[#C5A059]/5">
              <FileCheck className="w-4 h-4" strokeWidth={1.5} />
              Resultado da Competência
           </div>
           <h3 className="text-3xl md:text-4xl font-bold mb-6 print:mb-4 leading-tight text-white">
              Eficiência tributária <span className="text-blue-200">garantida</span> neste mês.
           </h3>
           <p className="text-blue-50/90 text-lg font-normal leading-relaxed mb-6">
              A apuração confirma que o <strong>Lucro Presumido com Equiparação</strong> entregou o menor custo possível.
           </p>
        </div>

        {/* Right: Annual Projection (Green Box) */}
        <div>
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 print:p-6 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-emerald-500/20 rounded-full text-emerald-400">
                        <TrendingUp className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">Projeção Anual de Economia</p>
                        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            {formatCurrency(data.annualSavings)}
                        </p>
                        <p className="text-emerald-100/60 text-sm mt-1">Estimativa acumulada em 12 meses</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default VerdictSection;