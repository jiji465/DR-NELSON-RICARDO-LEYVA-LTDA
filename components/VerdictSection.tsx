import React from 'react';
import { FileCheck, Wallet } from 'lucide-react';
import { BenefitData } from '../types';

interface VerdictSectionProps {
  data: BenefitData;
}

const VerdictSection: React.FC<VerdictSectionProps> = ({ data }) => {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    
  // Using fixed value based on existing constants logic for display consistency
  const totalTaxPaid = 2697.86; 

  return (
    <div className="bg-[#1e3a8a] text-white rounded-3xl shadow-2xl shadow-blue-900/30 overflow-hidden print:break-inside-avoid relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 p-48 bg-[#C5A059] rounded-full mix-blend-soft-light filter blur-[80px] opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 p-32 bg-blue-500 rounded-full mix-blend-screen filter blur-[60px] opacity-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="p-8 md:p-14 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text */}
        <div>
           <div className="inline-flex items-center gap-2 border border-[#C5A059] text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8 bg-[#C5A059]/5">
              <FileCheck className="w-4 h-4" strokeWidth={1.5} />
              Resultado da Competência
           </div>
           <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
              Eficiência tributária <span className="text-blue-200">garantida</span> neste mês.
           </h3>
           <p className="text-blue-50/90 text-lg font-normal leading-relaxed mb-10">
              A apuração do período confirma que o <strong>Lucro Presumido com Equiparação</strong> entregou o menor custo tributário possível para a clínica, garantindo conformidade e caixa.
           </p>
           
           <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <p className="text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-2">Status</p>
                  <p className="text-base font-medium text-white">Apuração Concluída</p>
              </div>
              <div className="bg-white/10 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <p className="text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-2">Conformidade</p>
                  <p className="text-base font-medium text-white">100% Legal</p>
              </div>
           </div>
        </div>

        {/* Right: Numbers */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                    <div>
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-2">Economia Realizada</p>
                        <p className="text-blue-100/70 text-sm font-normal">Valor poupado nesta competência</p>
                    </div>
                    <div className="p-3 bg-[#C5A059]/20 rounded-xl text-[#C5A059]">
                        <Wallet className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                </div>
                
                <p className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                    {formatCurrency(data.monthlySavings)}
                </p>
                <p className="text-sm text-blue-200 font-medium mb-10 pl-1 border-l-2 border-[#C5A059]">Diferença direta vs. Simples Nacional</p>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex justify-between items-center">
                        <span className="text-blue-100 text-base font-medium">Imposto Total a Pagar</span>
                        <span className="text-2xl font-bold text-[#C5A059]">{formatCurrency(totalTaxPaid)}</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default VerdictSection;