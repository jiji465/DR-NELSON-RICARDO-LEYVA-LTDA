import React from 'react';
import { Calendar } from 'lucide-react';

interface HeaderProps {
  clientName: string;
  competence: string;
}

const Header: React.FC<HeaderProps> = ({ clientName, competence }) => {
  return (
    <header className="bg-[#1e3a8a] text-white pt-16 pb-24 print:pt-8 print:pb-12 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
      {/* Abstract background - Explicitly hidden in print to fix "shifting" and ink usage */}
      <div className="no-print absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059] opacity-15 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
      <div className="no-print absolute bottom-0 left-0 w-96 h-96 bg-black opacity-30 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
        <div className="md:max-w-3xl">
          <div className="flex items-center gap-3 mb-6 print:mb-2 opacity-90">
            <div className="h-[2px] w-8 bg-[#C5A059]"></div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#C5A059]">Demonstrativo Mensal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 print:mb-2 tracking-tight text-white print:text-4xl">
            {clientName}
          </h1>
          <p className="text-blue-100/90 font-light text-base md:text-lg max-w-xl leading-relaxed">
            Detalhamento completo da apuração de impostos e performance do regime tributário vigente.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl border border-white/10 shadow-lg print:bg-[#1e3a8a] print:border-white/30 print:shadow-none">
          <div className="flex items-center gap-4">
            <div className="text-[#C5A059] p-2 bg-white/5 rounded-lg">
              <Calendar className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mb-1">Competência</p>
              <p className="text-2xl font-bold text-white">{competence}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;