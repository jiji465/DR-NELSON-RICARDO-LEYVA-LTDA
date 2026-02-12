import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { BenefitData } from '../types';

interface EquiparacaoInfoProps {
  data: BenefitData;
}

const EquiparacaoInfo: React.FC<EquiparacaoInfoProps> = ({ data }) => {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 print:p-6 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#C5A059]"></div>

       <div className="flex flex-col md:flex-row gap-12 print:gap-6 items-center">
         {/* Left: Concept */}
         <div className="md:w-5/12">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#1e3a8a] text-xs font-bold uppercase tracking-widest mb-6 print:mb-2 rounded-full border border-blue-100">
                Estratégia Aplicada
            </div>
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-5 print:mb-2 leading-tight">Equiparação Hospitalar</h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8 print:mb-4">
                Nesta competência, aplicamos o benefício da Equiparação Hospitalar sobre os serviços elegíveis. Este mecanismo legal <strong className="text-slate-800">reduziu a base de cálculo</strong> dos impostos federais (IRPJ/CSLL), gerando o resultado apurado.
            </p>
            <div className="flex items-center gap-3 text-[#C5A059] font-bold text-sm bg-[#C5A059]/5 p-4 rounded-xl border border-[#C5A059]/20 w-fit">
                <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                <span>Benefício aplicado com sucesso</span>
            </div>
         </div>

         {/* Right: Visualization */}
         <div className="md:w-7/12 w-full flex flex-col gap-6 print:gap-4">
            
            {/* Visual Comparison Card */}
            <div className="bg-slate-50 rounded-2xl p-6 print:p-4 border border-slate-200">
                
                {/* Before Row */}
                <div className="mb-8 print:mb-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-between items-end mb-3 print:mb-1">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Cenário Padrão (Sem Estratégia)</span>
                        <span className="text-sm font-bold text-slate-600 bg-slate-200 px-2 py-1 rounded">Base 32%</span>
                    </div>
                    <div className="h-12 w-full bg-slate-200 rounded-lg relative overflow-hidden">
                         <div className="absolute left-0 top-0 h-full w-[32%] bg-slate-400 pattern-diagonal-lines"></div>
                    </div>
                    <p className="text-xs text-right mt-2 text-slate-500 font-medium">Tributação incidiria sobre {formatCurrency(data.withoutBenefitBase)}</p>
                </div>

                {/* Arrow Divider */}
                <div className="h-px bg-slate-200 w-full mb-8 print:mb-4 relative">
                    <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-slate-50 px-3 text-slate-300">
                        <ArrowRight className="w-6 h-6 rotate-90" strokeWidth={1.5} />
                    </div>
                </div>

                {/* After Row - Highlighted */}
                <div>
                    <div className="flex justify-between items-end mb-3 print:mb-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wide">Base Reduzida Aplicada</span>
                            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                        </div>
                        <span className="text-sm font-bold text-white bg-[#1e3a8a] px-3 py-1 rounded shadow-md shadow-blue-900/10">Base 8% - 12%</span>
                    </div>
                    <div className="h-14 w-full bg-white border-2 border-[#1e3a8a]/10 rounded-xl relative overflow-hidden flex items-center px-4 shadow-sm">
                         <div className="absolute left-0 top-0 h-full bg-[#1e3a8a] w-[10%]"></div>
                         <div className="relative z-10 w-full flex justify-between items-center pl-4">
                            <span className="text-sm text-slate-500 font-medium">Nova Base de Cálculo</span>
                            <span className="text-xl font-bold text-[#1e3a8a]">{formatCurrency(data.withBenefitBase)}</span>
                         </div>
                    </div>
                </div>

            </div>
         </div>
       </div>
    </div>
  );
};

export default EquiparacaoInfo;