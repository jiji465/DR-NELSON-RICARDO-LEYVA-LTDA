import React from 'react';
import Header from './components/Header';
import ComparisonChart from './components/ComparisonChart';
import CostBreakdown from './components/CostBreakdown';
import EquiparacaoInfo from './components/EquiparacaoInfo';
import VerdictSection from './components/VerdictSection';
import { Printer, ChevronRight } from 'lucide-react';
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
      {/* Print Wrapper: Scales content down to fit A4 and adjusts width to compensate */}
      <div className="print:transform print:scale-[0.70] print:origin-top-left print:w-[142.8%] print:h-screen">
        
        <Header 
          clientName={CLIENT_DATA.clientName} 
          competence={CLIENT_DATA.competence} 
        />

        <main className="max-w-6xl mx-auto px-6 md:px-8 -mt-16 print:mt-4 relative z-20 space-y-8 print:space-y-4">
          
          {/* Executive Summary Bar */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 print:p-4 flex flex-col md:flex-row justify-between items-center gap-8 print:gap-4 print:shadow-none print:border border-slate-200 relative overflow-visible">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 print:gap-8 w-full md:w-auto text-center md:text-left">
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Faturamento Apurado</p>
                <p className="text-4xl font-bold text-[#1e3a8a] tracking-tight">{formatCurrency(CLIENT_DATA.revenue)}</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200 print:h-8"></div>
              <div>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Situação</p>
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-semibold border border-blue-100">
                      <span className="w-2 h-2 bg-[#1e3a8a] rounded-full animate-pulse print:hidden"></span>
                      Apuração Fechada
                   </div>
              </div>
            </div>
            
            <button 
              onClick={handlePrint}
              type="button"
              className="no-print relative z-50 group flex items-center gap-3 px-8 py-3.5 bg-[#1e3a8a] hover:bg-[#172554] text-white rounded-xl transition-all font-semibold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <Printer className="w-5 h-5 stroke-[1.5]" />
              <span>Imprimir / Salvar PDF</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </div>

          {/* Section 1: Charts & Logic */}
          <section className="print:break-inside-avoid">
              <div className="grid lg:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4 items-stretch">
                  <ComparisonChart data={COMPARISON_DATA} />
                  <div className="flex flex-col gap-8 print:gap-4">
                      <div className="flex-1">
                          <CostBreakdown 
                              data={BREAKDOWN_DATA} 
                              total={COMPARISON_DATA[1].totalTax} 
                          />
                      </div>
                  </div>
              </div>
          </section>

           {/* Section 2: Explanation */}
          <section className="print:break-inside-avoid">
               <EquiparacaoInfo data={BENEFIT_DATA} />
          </section>

          {/* Section 3: Final Verdict */}
          <section className="print:break-inside-avoid">
               <VerdictSection data={{...BENEFIT_DATA}} />
          </section>

          {/* Elegant Footer */}
          <footer className="pt-12 pb-8 print:pt-4 print:pb-0 text-center border-t border-slate-200 mt-16 print:mt-4 print:break-inside-avoid">
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