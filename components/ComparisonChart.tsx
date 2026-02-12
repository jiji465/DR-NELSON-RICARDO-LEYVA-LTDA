import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { TaxComparison } from '../types';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface ComparisonChartProps {
  data: TaxComparison[];
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <div className="bg-white p-8 md:p-10 print:p-4 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col relative overflow-hidden card">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1e3a8a]"></div>

      <div className="mb-6 print:mb-2">
        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2 text-navy">
          Comparativo de Carga
        </h3>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          Confronto direto: <span className="text-[#1e3a8a] font-semibold text-navy">Regime Atual</span> vs. Simples Nacional.
        </p>
      </div>

      <div className="flex-grow w-full h-80 print:h-48 mb-8 print:mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 80, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="regime" 
              type="category" 
              width={0}
              tick={false}
              axisLine={false}
            />
            {/* Tooltip kept for web interactivity */}
            <Tooltip 
              cursor={{fill: 'transparent'}}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#1e3a8a] text-white px-4 py-3 rounded-lg shadow-xl text-sm border border-blue-800">
                      <p className="font-semibold text-lg">{formatCurrency(data.totalTax)}</p>
                      <p className="text-blue-200 text-xs">Total de Impostos</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Animation disabled for perfect PDF rendering */}
            <Bar dataKey="totalTax" radius={[0, 6, 6, 0]} barSize={40} isAnimationActive={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              {/* Labels are critical for PDF since hover isn't possible */}
              <LabelList 
                dataKey="totalTax" 
                position="right" 
                formatter={(value: number) => formatCurrency(value)}
                style={{ fill: '#1e3a8a', fontSize: '12px', fontWeight: '700' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-4 print:space-y-2">
        {data.map((item, idx) => {
          const isWinner = idx === 1; 
          return (
            <div key={item.regime} className={`group flex items-center justify-between p-4 print:p-2 rounded-xl transition-all duration-300 border ${isWinner ? 'bg-blue-50/60 border-blue-100' : 'bg-transparent border-transparent hover:bg-slate-50'}`}>
              <div className="flex items-center gap-4">
                 <div className={`p-2 rounded-full ${isWinner ? 'bg-[#1e3a8a] text-white shadow-md shadow-blue-900/20' : 'bg-slate-100 text-slate-400'}`}>
                    {isWinner ? <CheckCircle2 className="w-5 h-5" strokeWidth={2} /> : <AlertCircle className="w-5 h-5" strokeWidth={2} />}
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                      <p className={`text-base leading-none ${isWinner ? 'text-[#1e3a8a] font-bold text-navy' : 'text-slate-600 font-medium'}`}>{item.regime}</p>
                      {isWinner && <span className="text-[10px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded-full font-bold">Vigente</span>}
                   </div>
                   <p className="text-xs text-slate-400 font-medium">Carga Real Apurada: {item.effectiveRate}%</p>
                 </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ComparisonChart;