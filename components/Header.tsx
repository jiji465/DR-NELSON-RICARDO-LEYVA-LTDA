import React from 'react';
import { Calendar } from 'lucide-react';

interface HeaderProps {
  clientName: string;
  competence: string;
}

const Header: React.FC<HeaderProps> = ({ clientName, competence }) => {
  return (
    <header className="bg-[#1e3a8a] text-white pt-16 pb-24 shadow-2xl shadow-blue-900/20 print:shadow-none print:bg-white print:text-slate-900 print:pt-0 print:pb-8 relative overflow-hidden">
      {/* Abstract background - softer blur - Hidden in Print */}
      <div className="print:hidden absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059] opacity-15 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
      <div className="print:hidden absolute bottom-0 left-0 w-96 h-96 bg-black opacity-30 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10 print:px-0">
        <div className="md:max-w-3xl">
          <div className="flex items-center gap-3 mb-6 opacity-90 print:mb-2">
            <div className="h-[2px] w-8 bg-[#C5A059] print:bg-[#1e3a8a]"></div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#C5A059] print:text-[#1e3a8a]">Demonstrativo Mensal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight text-white print:text-slate-900 print:text-3xl">
            {clientName}
          </h1>
          <p className="text-blue-100/90 font-light text-base md:text-lg max-w-xl leading-relaxed print:text-slate-600 print:text-sm">
            Detalhamento completo da apuração de impostos e performance do regime tributário vigente.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl border border-white/10 shadow-lg print:shadow-none print:border-slate-200 print:bg-slate-50 print:py-2">
          <div className="flex items-center gap-4">
            <div className="text-[#C5A059] p-2 bg-white/5 rounded-lg print:bg-transparent print:p-0 print:text-[#1e3a8a]">
              <Calendar className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mb-1 print:text-slate-500">Competência</p>
              <p className="text-2xl font-bold text-white print:text-slate-900">{competence}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;