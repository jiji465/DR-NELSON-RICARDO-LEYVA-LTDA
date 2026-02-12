import React from 'react';
import Header from './components/Header';
import ComparisonChart from './components/ComparisonChart';
import CostBreakdown from './components/CostBreakdown';
import EquiparacaoInfo from './components/EquiparacaoInfo';
import VerdictSection from './components/VerdictSection';
import { Printer, ChevronRight, FileCheck, Wallet } from 'lucide-react';
import { CLIENT_DATA, COMPARISON_DATA, BREAKDOWN_DATA, BENEFIT_DATA } from './constants';

const App: React.FC = () => {
  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <div className="min-h-screen pb-20 bg-slate-50 font-sans print:bg-white print:pb-0 text-slate-800 selection:bg-[#C5A059] selection:text-white">
      {/* Print Scaler Wrapper */}
      <div className="print:w-full">
        
        <Header 
          clientName={CLIENT_DATA.clientName} 
          competence={CLIENT_DATA.competence} 
        />

        <main className="max-w-6xl mx-auto px-6 md:px-8 -mt-16 print:mt-6 relative z-20 space-y-8 print:space-y-6">
          
          {/* TOP CONTROLS (Hidden in Print) */}
          <div className="flex justify-end no-print">
            <button 
              onClick={handlePrint}
              type="button"
              className="group flex items-center gap-3 px-8 py-3.5 bg-[#1e3a8a] hover:bg-[#172554] text-white rounded-xl transition-all font-semibold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <Printer className="w-5 h-5 stroke-[1.5]" />
              <span>Imprimir / Salvar PDF</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </div>

          {/* KPI SECTION: Revenue & Savings Side-by-Side */}
          {/* Uses print-grid-2 class defined in CSS to force layout in PDF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-grid-2">
            
            {/* Card 1: Faturamento */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 print:p-6 border border-slate-100 relative overflow-hidden card">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Faturamento Apurado</p>
                  <p className="text-4xl font-bold text-[#1e3a8a] tracking-tight">{formatCurrency(CLIENT_DATA.revenue)}</p>
                </div>
                <div className="p-3 bg-blue-50 text-[#1e3a8a] rounded-full">
                  <FileCheck className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#1e3a8a] rounded-full animate-pulse print:hidden"></span>
                <span className="text-xs font-semibold text-[#1e3a8a] uppercase tracking-wide">Apuração Fechada</span>
              </div>
            </div>

            {/* Card 2: Economia Mensal (Moved here for better print layout) */}
            <div className="bg-[#1e3a8a] rounded-2xl shadow-xl p-8 print:p-6 border border-blue-900 relative overflow-hidden text-white card">
               <div className="flex justify-between items-start relative z-10">
                  <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Economia Mensal</p>
                      <p className="text-4xl font-bold text-white tracking-tight">{formatCurrency(BENEFIT_DATA.monthlySavings)}</p>
                  </div>
                  <div className="p-3 bg-white/10 text-[#C5A059] rounded-full">
                      <Wallet className="w-6 h-6" strokeWidth={1.5} />
                  </div>
               </div>
               <div className="mt-4 pt-4 border-t border-white/10 relative z-10">
                 <p className="text-xs text-blue-200 font-medium">Diferença vs. Simples Nacional</p>
               </div>
               {/* Background effect hidden in print */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C5A059] opacity-20 blur-3xl rounded-full no-print"></div>
            </div>

          </div>

          {/* CHARTS SECTION */}
          <section className="print-grid-2 grid lg:grid-cols-2 gap-8 items-stretch">
              <ComparisonChart data={COMPARISON_DATA} />
              <div className="flex flex-col gap-8 h-full">
                  <div className="flex-1">
                      <CostBreakdown 
                          data={BREAKDOWN_DATA} 
                          total={COMPARISON_DATA[1].totalTax} 
                      />
                  </div>
              </div>
          </section>

           {/* STRATEGY EXPLANATION */}
          <section className="card">
               <EquiparacaoInfo data={BENEFIT_DATA} />
          </section>

          {/* VERDICT (Annual Projection) */}
          <section className="card">
               <VerdictSection data={BENEFIT_DATA} />
          </section>

          {/* FOOTER */}
          <footer className="pt-12 pb-8 print:pt-4 print:pb-0 text-center border-t border-slate-200 mt-16 print:mt-4">
              <div className="mb-8 print:mb-2 opacity-80">
                   <h4 className="text-2xl font-bold text-[#1e3a8a] tracking-widest mb-1">SETE</h4>
                   <p className="text-xs text-[#C5A059] uppercase tracking-[0.3em] font-bold">Soluções Fiscais</p>
              </div>
              <p className="text-slate-400 text-xs font-medium">
                  © {new Date().getFullYear()} Documento confidencial • Dr. Nelson Ricardo Leyva
              </p>
          </footer>

        </main>
      </div>
    </div>
  );
};

export default App;